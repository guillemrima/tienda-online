module.exports = function (sequelize, DataTypes) {
  const PaymentMethod = sequelize.define('PaymentMethod', {
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
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'payment_methods',
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

  PaymentMethod.associate = function (models) {
    PaymentMethod.hasMany(models.Return, { as: 'returns', foreignKey: 'paymentMethodId' })
    PaymentMethod.hasMany(models.SaleError, { as: 'saleErrors', foreignKey: 'paymentMethodId' })
    PaymentMethod.hasMany(models.Sale, { as: 'sales', foreignKey: 'paymentMethodId' })
  }

  return PaymentMethod
}
