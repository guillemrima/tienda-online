const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const db = require('../models')
const ImageConfiguration = db.ImageConfiguration
const Image = db.Image

module.exports = class ImageService {

    uploadImages = async images => {
        
        const files = images.file.map(file => {
            const filename = file.filename.replace(/ |_|-/g, "-");
            return { ...file, filename }
          })
        
        files.forEach(file => {
            const fileTmpPath = file.path
            const fileName = file.filename
            const extensionName = path.extname(fileName)
            const fileWithoutExtension = path.basename(fileName, extensionName)
            const targetPathOriginal = path.join(__dirname, './../storage/gallery/original', `${fileWithoutExtension}.webp`)
            const targetPathThumbnail = path.join(__dirname, './../storage/gallery/thumbnail', `${fileWithoutExtension}.webp`)

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
                const webpBuffer = await sharp(file).toFormat('webp').toBuffer();
                return webpBuffer;
            };
            
            const resizeFile = async (file) => {
                const resizedBuffer = await sharp(file).toFormat('webp').resize(135,135).toBuffer()
                return resizedBuffer
            }

            const writeFileAsync = (file, targetPath) => {
                return new Promise((resolve, reject) => {
                  fs.writeFile(targetPath, file, (err) => {
                    if (err) {
                      reject(err);
                    } else {
                      resolve(true);
                    }
                  });
                });
            }
              
            const deleteThumbFile = (fileTmpPath) => {
              return new Promise((resolve, reject) => {
                fs.unlink(fileTmpPath, (err) => {
                  if(err) {
                    reject(err)
                  } else {
                    resolve(true)
                  }
                })
              })
            }

            (async () => {
                try {
                    const file = await readFileAsync(fileTmpPath);
                    
                    const fileWebp = await formatFile(file);
                    const isfileConvertedSaved = await writeFileAsync(fileWebp, targetPathOriginal);
                    console.log("✅ Imagen convertida y almacenada en /original")

                    const fileResized = await resizeFile(file)
                    const isfileResizedSaved = await writeFileAsync(fileResized,targetPathThumbnail)
                    console.log("✅ Imagen redimensionada y almacenada en /thumnbail")

                  if ( isfileConvertedSaved && isfileResizedSaved ) {
                    const isThumbFileDeleted = deleteThumbFile(fileTmpPath)
                    console.log("✅ Imagen temporal eliminada correctamente de /thumb")
                  }
      
                } catch (err) {
                  console.error("❌" + err);
                }
            })()
        })
    }

  resizeImages = async (entity, entityId, images) => {
   
  }

  deleteImages = async filename => {
    
  }

  getThumbnails = async (limit, offset) => {
    
  }
}