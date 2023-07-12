const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const moment = require('moment');
const db = require('../models')
const ImageConfiguration = db.ImageConfiguration
const Image = db.Image

module.exports = class ImageService {

  uploadImages = async (images) => {
    const processedFiles = [];
  
    const files = images.file.map((file) => {
      const filename = file.filename.replace(/ |_|-/g, "-");
      return { ...file, filename };
    });
  
    for (const file of files) {
      const fileTmpPath = file.path;
      const fileName = file.filename;
      const extensionName = path.extname(fileName);
      const fileWithoutExtension = path.basename(fileName, extensionName);
      const targetPathOriginal = path.join(
        __dirname,
        "./../storage/gallery/original",
        `${fileWithoutExtension}.webp`
      );
      const targetPathThumbnail = path.join(
        __dirname,
        "./../storage/gallery/thumbnail",
        `${fileWithoutExtension}.webp`
      );
  
      const readFileAsync = (fileTmpPath) => {
        return new Promise((resolve, reject) => {
          fs.readFile(fileTmpPath, (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
        });
      };
  
      const formatFile = async (file) => {
        const webpBuffer = await sharp(file).toFormat("webp").toBuffer();
        return webpBuffer;
      };
  
      const resizeFile = async (file) => {
        const resizedBuffer = await sharp(file)
          .toFormat("webp")
          .resize(135, 135)
          .toBuffer();
        return resizedBuffer;
      };
  
      const writeFileAsync = (file, targetPath) => {
        return new Promise((resolve, reject) => {
          fs.access(targetPath, fs.constants.F_OK, (err) => {
            if (err) {
              fs.writeFile(targetPath, file, (err) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(fileWithoutExtension+ ".webp");
                }
              });
            } else {
              const fileExtension = path.extname(targetPath);
              const fileName = path.basename(targetPath, fileExtension);
              const date = moment().format("YYYY-MM-DD_HH-mm-ss");
              const newFileName = `${fileName}_${date}${fileExtension}`;
              const newPath = path.join(path.dirname(targetPath), newFileName);
  
              fs.writeFile(newPath, file, (err) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(newFileName);
                }
              });
            }
          });
        });
      };
  
      const deleteThumbFile = (fileTmpPath) => {
        return new Promise((resolve, reject) => {
          fs.unlink(fileTmpPath, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve(true);
            }
          });
        });
      };
  
      try {
        const file = await readFileAsync(fileTmpPath);
        const fileWebp = await formatFile(file);;
        const isFileConvertedSaved = await writeFileAsync(fileWebp, targetPathOriginal);
        console.log("✅ Imagen convertida y almacenada en /original");
        processedFiles.push(isFileConvertedSaved)
        const fileResized = await resizeFile(file);
        const isFileResizedSaved = await writeFileAsync(fileResized, targetPathThumbnail);
        console.log("✅ Imagen redimensionada y almacenada en /thumbnail");
        if (isFileConvertedSaved && isFileResizedSaved) {
          const isThumbFileDeleted = await deleteThumbFile(fileTmpPath);
          console.log("✅ Imagen temporal eliminada correctamente de /thumbnail");
        }
      } catch (err) {
        console.error("❌" + err);
      }
    }
  
    return processedFiles;
  };
  
  resizeImages = async (entity, entityId, images) => {
    for (const image of images) {
      var startTime = new Date().getTime();
      
      try {
        const imageConfigurations = await ImageConfiguration.findAll({
          where: {
            entity: entity,
            name: image.name
          }
        });
  
        const jsonImageConfigurations = imageConfigurations.map(imageConfiguration => {
          const { _previousDataValues, ...jsonImageConfiguration } = imageConfiguration.toJSON();
          return jsonImageConfiguration;
        });
  
        for (const jsonImageConfiguration of jsonImageConfigurations) {
          const width = jsonImageConfiguration.widthPx;
          const height = jsonImageConfiguration.heightPx;
  
          const originalRoute = path.join(__dirname, "./../storage/gallery/original", image.filename);
          const filenameWithoutExtension = path.parse(image.filename).name;
  
          const resizedRoute = path.join(__dirname, "./../storage/gallery/resized");
          const resizedCompleteRoute = path.join(resizedRoute, `${filenameWithoutExtension}-${width}px-${height}px.webp`);
  
          try {
            await sharp(originalRoute).resize(width, height).toFile(resizedCompleteRoute);        
            console.log(`✅ Imagen redimensionada correctamente a ${width}px x ${height}px`);

            var endTime = new Date().getTime()
            var latencyMs = endTime - startTime

            const body = {
              imageConfigurationId: jsonImageConfiguration.id,
              entityId: entityId,
              entity: entity,
              name: image.name,
              originalFilename: image.filename,
              resizedFilename: `${filenameWithoutExtension}-${width}px-${height}px.webp`,
              title: image.title,
              languageAlias: 'es',
              alt: image.alt,
              mediaQuery: jsonImageConfiguration.mediaQuery,
              latencyMs: latencyMs
            }

            Image.create(body)

          } catch (error) {
            console.error(error);
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  
  deleteImage = async (filename, confirmation) => {

    try {
      const thumbnailFilePath = path.join(__dirname, "./../storage/gallery/thumbnail");
      const thumbnailFiles = fs.readdirSync(thumbnailFilePath);
  
      const rawfiles = await Image.findAll({
        where: {
          originalFilename: filename
        }
      });
      const bdfiles = rawfiles.map(rawfile => {
        const { _previousDataValues, ...bdfiles } = rawfile.toJSON();
        return bdfiles;
      });

      if(bdfiles.length > 0) {
        if(confirmation == 0) {
          return {
            success: false,
            message: "La imagen está siendo utilizada por varios usuarios. ¿Estás seguro que deseas eliminarla?"
          }
        } else if(confirmation == 1) {
            await Image.destroy({
              where: {
                originalFilename: filename
              }
            })
            const thumbnailToDelete = thumbnailFiles.find(file => file === filename);

            if (thumbnailToDelete) {
              const thumbnailPath = path.join(thumbnailFilePath, thumbnailToDelete);
              fs.unlinkSync(thumbnailPath);
            }
            
            return {
              success: true,
              message: "La imagen se ha eliminado correctamente."
            }
        }
      } else {
        const thumbnailToDelete = thumbnailFiles.find(file => file === filename);
            
        if (thumbnailToDelete) {
          const thumbnailPath = path.join(thumbnailFilePath, thumbnailToDelete);
          fs.unlinkSync(thumbnailPath);
        }
        return {
          success: true,
          message: "La imagen se ha eliminado correctamente."
        }
      }     
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: error
      };
    }
  };
  

  getThumbnails = async (limit, offset) => {

    const thumbnailFilePath = path.join(__dirname, "./../storage/gallery/thumbnail");
    const thumbnailFiles = fs.readdirSync(thumbnailFilePath);

    const startIndex = offset * limit;
    const endIndex = startIndex + limit;
    const totalPages = Math.ceil(thumbnailFiles.length / limit);
    const currentPage = Math.floor(offset + 1);
    const thumbnails = thumbnailFiles.slice(startIndex, endIndex);

    return {
      thumbnails,
      totalPages,
      currentPage
    }
  }
}