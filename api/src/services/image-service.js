const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const db = require('../models')
const ImageConfiguration = db.ImageConfiguration
const Image = db.Image

module.exports = class ImageService {

    uploadImages = async images => {
        
        const files = images.file.map(file => {
            const filename = file.filename.replace(/ /g, "-")
            return { ...file, filename }
          })
        
        files.forEach(file => {
            const fileTmpPath = file.path
            const fileName = file.filename
            const targetPath = path.join(__dirname, './../storage/gallery/original', fileName)

            fs.readFile(fileTmpPath, (err, data) => {
                if (err) {
                    console.log(err)
                    return
                }    
                fs.writeFile(targetPath, data, (err) => {
                    if(err) {
                        console.log(err)
                    }
                })
            })
        })
    }

  resizeImages = async (entity, entityId, images) => {
   
  }

  deleteImages = async filename => {
    
  }

  getThumbnails = async (limit, offset) => {
    
  }
}