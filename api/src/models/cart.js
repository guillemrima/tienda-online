module.exports = function (sequelize, DataTypes) {
  const Cart = sequelize.define('Cart', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    customerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customer',
        key: 'id'
      }
    },
    fingerprintId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Fingerprint',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'carts',
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
        name: 'cart_customerId_fk',
        using: 'BTREE',
        fields: [
          { name: 'customerId' }
        ]
      },
      {
        name: 'cart_fingerprintId_fk',
        using: 'BTREE',
        fields: [
          { name: 'fingerprintId' }
        ]
      }
    ]
  })

  Cart.associate = function (models) {
    Cart.hasMany(models.CartDetail, { as: 'details', foreignKey: 'cartId' }),
    Cart.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' }),
    Cart.belongsTo(models.Fingerprint, { as: 'fingerprint', foreignKey: 'fingerprintId' })
    Cart.hasMany(models.SaleError, { as: 'saleErrors', foreignKey: 'cartId' })
    Cart.hasOne(models.Sale, { as: 'sale', foreignKey: 'cartId' })
    Cart.belongsToMany(models.Product, { as: 'products', through: 'CartDetail', foreignKey: 'cartId' })
  }

  return Cart
}
