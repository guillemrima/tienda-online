module.exports = function (sequelize, DataTypes) {
  const ReturnDetail = sequelize.define('ReturnDetail', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    returnId: {
      type: DataTypes.INTEGER,
      refence: {
        model: 'Return',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      refence: {
        model: 'Product',
        key: 'id'
      }
    },
    productName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "productName".'
        }
      }
    },
    basePrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(6, 2),
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "basePrice".'
        }
      }
    },
    taxPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(6, 2),
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "taxPrice".'
        }
      }
    },
    unitOfMeasurement: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "unitOfMeasurement".'
        }
      }
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "quantity".'
        }
      }
    }
  }, {
    sequelize,
    tableName: 'return_details',
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
        name: 'returnDetail_returnId_fk',
        using: 'BTREE',
        fields: [
          { name: 'returnId' }
        ]
      },
      {
        name: 'returnDetail_productId_fk',
        using: 'BTREE',
        fields: [
          { name: 'productId' }
        ]
      }
    ]
  })

  ReturnDetail.associate = function (models) {
    ReturnDetail.belongsTo(models.Return, { as: 'return', foreignKey: 'returnId' })
    ReturnDetail.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' })
  }

  return ReturnDetail
}
