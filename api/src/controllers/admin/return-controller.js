const db = require("../../models");
const Return = db.Return;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    Return.create(req.body)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            if (err.errors) {
                res.status(422).send({
                    message: err.errors
                });
            } else {
                res.status(500).send({
                    message: "Se produjo un error al guardar los datos."
                });
            }
        });
};

exports.findAll = (req, res) => {
    let page = req.query.page || 1;
    let limit = parseInt(req.query.size) || 10;
    let offset = (page - 1) * limit;

    let whereStatement = {};
    let condition = Object.keys(whereStatement).length > 0 ? { [Op.and]: [whereStatement] } : {};

    Return.findAndCountAll({
        where: condition,
        attributes: ['id', 'saleId', 'customerId', 'paymentMethodId', 'reference', 'totalPrice', 'totalBasePrice', 'totalTaxPrice', 'issueDate', 'issueTime'],
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
        })
        .catch(err => {
            res.status(500).send({
                message: err.errors || "Se produjo un error al recuperar los datos."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Return.findByPk(id)
        .then(data => {
            if (data) {
                res.status(200).send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el elemento con el id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Se produjo un error al recuperar el id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Return.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "El elemento se actualizó correctamente."
                });
            } else {
                res.status(404).send({
                    message: `No se puede actualizar el elemento con el id=${id}. Es posible que no se haya encontrado el elemento o el cuerpo de la solicitud está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Se produjo un error al actualizar el id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Return.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "El elemento se eliminó correctamente."
                });
            } else {
                res.status(404).send({
                    message: `No se puede eliminar el elemento con el id=${id}. Es posible que no se haya encontrado el elemento.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Se produjo un error al eliminar el id=" + id
            });
        });
};
