const db = require("../../models");
const Social_network = db.Social_network;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    Social_network.create(req.body).then(data => {

        res.status(200).send(data);

    }).catch(err => {
      if(err.errors ){
        res.status(422).send({
          message: err.errors
        });
      }else{
        res.status(500).send({
          message: "Algún error ha surgido al recuperar los datos."
        });
      }
    });
};

exports.findAll = (req, res) => {

    let page = req.query.page || 1;
    let limit = parseInt(req.query.size) || 10;
    let offset = (page - 1) * limit;

    let whereStatement = {};
    let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    Social_network.findAndCountAll({
        where: condition, 
        attributes: ['id', 'name', 'baseURL'],
        limit: limit,
        offset: offset,
        order: [['createdAt', 'DESC']]
    })
    .then(result => {

        result.meta = {
            total: result.count,
            pages: Math.ceil(result.count / limit),
            currentPage: page
        };

        res.status(200).send(result);

    }).catch(err => {
        res.status(500).send({
            message: err.errors || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    Social_network.findByPk(id).then(data => {

        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({
                message: `No se puede encontrar el elemento con la id=${id}.`
            });
        }

    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al recuperar la id=" + id
        });
    });
};

exports.update = (req, res) => {

    const id = req.params.id;

    Social_network.update(req.body, {
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

exports.delete = (req, res) => {

    const id = req.params.id;

    Social_network.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El elemento ha sido borrado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se puede borrar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al borrar la id=" + id
        });
    });
};