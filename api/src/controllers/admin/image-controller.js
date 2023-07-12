const db = require("../../models");
const path = require('path')
const Image = db.Image;
const Op = db.Sequelize.Op;
const ImageService = require('../../services/image-service')

exports.create = async (req, res) => {
    try {
        const result = await new ImageService().uploadImages(req.files)
        res.status(200).send(result)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Algún error ha surgido al insertar el dato.',
        errors: error.errors
      })
    }
  }

exports.findAll = async(req, res) => {
    let page = req.query.page || 1;
    page = page -1
    let limit = req.query.limit || 28;
    try {
        const result = await new ImageService().getThumbnails(limit,page)
        res.status(200).send(result)
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Ha surgido algún error al recuperar las imágenes.',
        errors: error.errors
      })
    }

    // let whereStatement = {};
    // let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    // Image.findAndCountAll({
    //     where: condition, 
    //     attributes: ['id', 'imageConfigurationId', 'entityId', 'entity', 'name', 'originalFilename', 'resizedFilename', 'title', 'alt', 'languageAlias', 'mediaQuery', 'latencyMs'],
    //     limit: limit,
    //     offset: offset,
    //     order: [['createdAt', 'DESC']]
    // })
    // .then(result => {

    //     result.meta = {
    //         total: result.count,
    //         pages: Math.ceil(result.count / limit),
    //         currentPage: page
    //     };

    //     res.status(200).send(result);

    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.errors || "Algún error ha surgido al recuperar los datos."
    //     });
    // });
};

exports.findOne = (req, res) => {
    const filename = req.params.filename
    const options = {
      root: __dirname + '../../../storage/gallery/thumbnail/',
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }
    res.sendFile(filename, options)
};

exports.update = (req, res) => {

    const id = req.params.id;

    Image.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El elemento ha sido actualizado correctamente."
            });
        } else {
            res.status(404).send({
                message: `No se puede actualizar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento o el cuerpo de la petición está vacío.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al actualiazar la id=" + id
        });
    });
};

exports.delete = async (req, res) => {

    const filename = req.params.filename
    const confirmation = req.query.confirmation

    try {
        const result = await new ImageService().deleteImage(filename, confirmation)
        res.status(200).send({
          success: result.success,
          message: result.message
        })
    } catch (error) {
      res.status(500).send({
        message: error.message || 'Algún error ha surgido al insertar el dato.',
        errors: error.errors
      })
    }
};