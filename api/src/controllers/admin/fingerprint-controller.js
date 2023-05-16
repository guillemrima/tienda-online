const db = require("../../models");
const Fingerprint = db.Fingerprint;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    Fingerprint.create(req.body).then(data => {

        res.status(200).send(data);

    }).catch(err => {
        if(err.errors){
            res.status(422).send({
                message: err.errors
            });
        }else{
            res.status(500).send({
                message: "Algún error ha surgido al crear el registro de fingerprint."
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

    Fingerprint.findAndCountAll({
        where: condition, 
        attributes: ['id','clientld', 'fingerprint'],
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
            message: "Algún error ha surgido al recuperar los registros de fingerprint."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    Fingerprint.findByPk(id).then(data => {

        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({
                message: `No se puede encontrar el registro de fingerprint con la id=${id}.`
            });
        }

    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al recuperar el registro de fingerprint con la id=" + id
        });
    });
};

exports.update = (req, res) => {

    const id = req.params.id;

    Fingerprint.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El registro de fingerprint ha sido actualizado correctamente."
            });
        } else {
            res.status(404).send({
                message: `No se puede actualizar el registro de fingerprint con la id=${id}. Tal vez no se ha encontrado el registro o el cuerpo de la petición está vacío.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al actualizar el registro de fingerprint con la id=" + id
        });
    });
};

exports.delete = (req, res) => {

    const id = req.params.id;

    Fingerprint.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El registro de fingerprint ha sido borrado correctamente."
            });
        } else {
            res.status(404).send({
                message: `No se puede borrar el registro de fingerprint con la id=${id}. Tal vez no se ha encontrado el registro.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al borrar la id=" + id
        });
    });
};