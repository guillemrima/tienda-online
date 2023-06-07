module.exports = function (sequelize, DataTypes) {
  const SaleDetail = sequelize.define('SaleDetail', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    saleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Sale',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
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
    tableName: 'sale_details',
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
        name: 'saleDetail_saleId_fk',
        using: 'BTREE',
        fields: [
          { name: 'saleId' }
        ]
      },
      {
        name: 'saleDetail_productId_fk',
        using: 'BTREE',
        fields: [
          { name: 'productId' }
        ]
      }
    ]
  })

  SaleDetail.associate = function (models) {
    SaleDetail.belongsTo(models.Sale, { as: 'sale', foreignKey: 'saleId' })
    SaleDetail.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' })
  }

  return SaleDetail
}
