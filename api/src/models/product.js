module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    productCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ProductCategory',
        key: 'id'
      }
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "name".'
        }
      }
    },
    featured: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    tableName: 'products',
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
        name: 'product_productCategoryId_fk',
        using: 'BTREE',
        fields: [
          { name: 'productCategoryId' }
        ]
      }
    ]
  })

  Product.associate = function (models) {
    Product.belongsTo(models.ProductCategory, { as: 'productCategory', foreignKey: 'productCategoryId' })
    Product.hasMany(models.CartDetail, { as: 'cartDetails', foreignKey: 'productId' })
    Product.hasMany(models.Price, { as: 'prices', foreignKey: 'productId' })
    Product.hasMany(models.ReturnDetail, { as: 'returnDetails', foreignKey: 'productId' })
    Product.hasMany(models.SaleDetail, { as: 'saleDetails', foreignKey: 'productId' })
  }

  return Product
}
