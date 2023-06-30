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
 
    images.forEach( image => {

    })
 
  }

  deleteImages = async filename => {
    
  }

  getThumbnails = async (limit, offset) => {
    
  }
}