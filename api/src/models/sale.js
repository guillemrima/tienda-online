module.exports = function (sequelize, DataTypes) {
  const Sale = sequelize.define(
    'Sale',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      cartId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Cart',
          key: 'id'
        }
      },
      customerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Customer',
          key: 'id'
        }
      },
      paymentMethodId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'PaymentMethod',
          key: 'id'
        }
      },
      reference: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "reference".'
          }
        }
      },
      totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "totalPrice".'
          }
        }
      },
      totalBasePrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "totalBasePrice".'
          }
        }
      },
      totalTaxPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "totalTaxPrice".'
          }
        }
      },
      issueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "issueDate".'
          }
        }
      },
      issueTime: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please provide a value for "issueTime".'
          }
        }
      }
    }, {
      sequelize,
      tableName: 'sales',
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
          name: 'sale_cartId_fk',
          using: 'BTREE',
          fields: [
            { name: 'cartId' }
          ]
        },
        {
          name: 'sale_customerId_fk',
          using: 'BTREE',
          fields: [
            { name: 'customerId' }
          ]
        },
        {
          name: 'sale_paymentMethodId_fk',
          using: 'BTREE',
          fields: [
            { name: 'paymentMethodId' }
          ]
        }
      ]
    }
  )

  Sale.associate = function (models) {
    Sale.belongsTo(models.Cart, { as: 'cart', foreignKey: 'cartId' }),
    Sale.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' }),
    Sale.belongsTo(models.PaymentMethod, { as: 'paymentMethod', foreignKey: 'paymentMethodId' })
    Sale.hasMany(models.SaleDetail, { as: 'details', foreignKey: 'saleId' })
    Sale.hasMany(models.Return, { as: 'returns', foreignKey: 'saleId' })
    Sale.belongsToMany(models.Product, { as: 'products', through: 'SaleDetail', foreignKey: 'saleId' })
  }

  return Sale
}
