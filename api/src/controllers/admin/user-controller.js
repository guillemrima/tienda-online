const db = require("../../models");
const User = db.User;
const Op = db.Sequelize.Op;
const ImageService = require('../../services/image-service');
const TrackingService = require('../../services/tracking-service');

exports.create = (req, res) => {
    User.create(req.body).then(async (data) => {
        if(req.body.images) {
            const result = await new ImageService().resizeImages('user', data.id, req.body.images);
        }

        res.status(200).send(data);
    }).catch(async (err) => {
        res.status(500).send({
            message: err.errors || "Algún error ha surgido al insertar el dato."
        });
    }).finally(async () => {
        const userTracked = await new TrackingService().userTracking(req.userId, req.socket.remoteAddress, req.originalUrl, req.method, res.statusCode);
        userTracked ? console.log(`✅ Usuario trackeado correctamente.`) : console.log(`❌ Error al trackear el usuario.`);
    });
};

exports.findAll = (req, res) => {

    let page = req.query.page || 1;
    let limit = parseInt(req.query.size) || 5;
    let offset = (page - 1) * limit;
    let whereStatement = {}

    for (const key in req.query) {
        if (req.query[key] != '' && key != 'page' && key != 'size') {
          whereStatement[key] = { [Op.substring]: req.query[key] }
        }
      }
    
    let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    User.findAndCountAll({
        where: condition, 
        attributes: ['id', 'name', 'email'],
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
    }).finally(async () => {
        const userTracked = await new TrackingService().userTracking(req.userId, req.socket.remoteAddress, req.originalUrl, req.method, res.statusCode);
        userTracked ? console.log(`✅ Usuario trackeado correctamente.`) : console.log(`❌ Error al trackear el usuario.`);
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    User.findByPk(id, {
        include: [
            {
                model: db.Image,    
                as: 'images',
                where: { mediaquery: 'lg' },
                required: false
            }
        ]
    })
    
    .then(data => {

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
    }).finally(async () => {
        const userTracked = await new TrackingService().userTracking(req.userId, req.socket.remoteAddress, req.originalUrl, req.method, res.statusCode);
        userTracked ? console.log(`✅ Usuario trackeado correctamente.`) : console.log(`❌ Error al trackear el usuario.`);
    });
};

exports.update = (req, res) => {

    const id = req.params.id;

    User.update(req.body, {
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
    }).finally(async () => {
        const userTracked = await new TrackingService().userTracking(req.userId, req.socket.remoteAddress, req.originalUrl, req.method, res.statusCode);
        userTracked ? console.log(`✅ Usuario trackeado correctamente.`) : console.log(`❌ Error al trackear el usuario.`);
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    db.sequelize.transaction((t) => {
        return User.destroy({
            where: { id: id },
            transaction: t
        })
        .then(num => {
            if (num == 1) {
                return db.Image.destroy({
                    where: { entityId: id, entity: 'user' },
                    transaction: t
                });
            } else {
                throw new Error(`No se puede borrar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento.`);
            }
        });
    })
    .then(() => {
        res.status(200).send({
            message: "El elemento ha sido borrado correctamente"
        });
    })
    .catch(err => {
        if (err.message) {
            res.status(404).send({
                message: err.message
            });
        } else {
            res.status(500).send({
                message: "Algún error ha surgido al borrar la id=" + id
            });
        }
    }).finally(async () => {
        const userTracked = await new TrackingService().userTracking(req.userId, req.socket.remoteAddress, req.originalUrl, req.method, res.statusCode);
        userTracked ? console.log(`✅ Usuario trackeado correctamente.`) : console.log(`❌ Error al trackear el usuario.`);
    });
};
