const db = require('../../models');
const SentEmail = db.SentEmail;
const Customer = db.Customer;
const Email = db.Email;

exports.create = (req, res) => {
  const { customerId, emailId, createdAt, updatedAt } = req.body;

  SentEmail.create({
    customerId,
    emailId,
    createdAt,
    updatedAt
  })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the SentEmail.'
      });
    });
};

exports.findAll = (req, res) => {
  SentEmail.findAll({
    include: [Customer, Email],
    attributes: ['id', 'customerId', 'emailId', 'createdAt', 'updatedAt']
  })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving SentEmails.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  SentEmail.findByPk(id, {
    include: [Customer, Email],
    attributes: ['id', 'customerId', 'emailId', 'createdAt', 'updatedAt']
  })
    .then(data => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send({
          message: `SentEmail with id=${id} not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error retrieving SentEmail with id=${id}.`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const { customerId, emailId, createdAt, updatedAt } = req.body;

  SentEmail.update(
    {
      customerId,
      emailId,
      createdAt,
      updatedAt
    },
    { where: { id: id } }
  )
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: 'SentEmail was updated successfully.'
        });
      } else {
        res.status(404).send({
          message: `Cannot update SentEmail with id=${id}. Maybe SentEmail was not found or req.body is empty.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error updating SentEmail with id=${id}.`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  SentEmail.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: 'SentEmail was deleted successfully.'
        });
      } else {
        res.status(404).send({
          message: `Cannot delete SentEmail with id=${id}. Maybe SentEmail was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error deleting SentEmail with id=${id}.`
      });
    });
};
