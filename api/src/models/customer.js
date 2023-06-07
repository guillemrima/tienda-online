module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define('Customer', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Nombre".'
        }
      }
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Apellido".'
        }
      }
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Teléfono".'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Email".'
        },
        isEmail: {
          msg: 'Por favor, rellena el campo "Email" con un email válido.'
        },
        isUnique: function (value, next) {
          const self = this
          Customer.findOne({ where: { email: value } })
            .then(function (customer) {
              if (customer && self.id !== customer.id) {
                return next('Ya existe un cliente con ese email.')
              }
              return next()
            })
            .catch(function (err) {
              return next(err)
            })
        }
      }
    },
    town: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Localidad".'
        }
      }
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Código Postal".'
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Dirección".'
        }
      }
    }
  }, {
    sequelize,
    tableName: 'customers',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      },
      {
        name: 'customer_email_fk',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'email' }
        ]
      }
    ]
  })

  Customer.associate = function (models) {
    Customer.hasMany(models.Cart, { as: 'carts', foreignKey: 'customerId' })
    Customer.hasMany(models.Fingerprint, { as: 'fingerprints', foreignKey: 'customerId' })
    Customer.hasMany(models.Return, { as: 'returns', foreignKey: 'customerId' })
    Customer.hasMany(models.SaleError, { as: 'saleErrors', foreignKey: 'customerId' })
    Customer.hasMany(models.Sale, { as: 'sales', foreignKey: 'customerId' })
    Customer.hasMany(models.SentEmail, { as: 'sentEmails', foreignKey: 'customerId' })
    Customer.belongsToMany(models.Email, { through: models.SentEmail, as: 'emails', foreignKey: 'customerId' })
  }

  return Customer
}
