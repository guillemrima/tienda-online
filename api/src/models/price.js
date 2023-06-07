module.exports = function (sequelize, DataTypes) {
  const Price = sequelize.define('Price', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    taxId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tax',
        key: 'id'
      }
    },
    basePrice: {
      type: DataTypes.DECIMAL
    },
    current: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    tableName: 'prices',
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
        name: 'price_productId_fk',
        using: 'BTREE',
        fields: [
          { name: 'productId' }
        ]
      },
      {
        name: 'price_taxId_fk',
        using: 'BTREE',
        fields: [
          { name: 'taxId' }
        ]
      }
    ]
  })

  Price.associate = function (models) {
    Price.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' }),
    Price.belongsTo(models.Tax, { as: 'tax', foreignKey: 'taxId' })
  }

  return Price
}
