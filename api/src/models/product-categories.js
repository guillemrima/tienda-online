module.exports = function (sequelize, DataTypes) {
  const ProductCategory = sequelize.define('ProductCategory', {
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
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Visible".'
        }
      }
    }
  }, {
    sequelize,
    tableName: 'product_categories',
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
      }
    ]
  })

  ProductCategory.associate = function (models) {
    ProductCategory.hasMany(models.Product, { as: 'products', foreignKey: 'productCategoryId' })
  }

  return ProductCategory
}
