module.exports = function (sequelize, DataTypes) {
  const Return = sequelize.define('Return', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    saleId: {
      type: DataTypes.INTEGER,
      refence: {
        model: 'Sale',
        key: 'id'
      }
    },
    customerId: {
      type: DataTypes.INTEGER,
      refence: {
        model: 'Customer',
        key: 'id'
      }
    },
    paymentMethodId: {
      type: DataTypes.INTEGER,
      refence: {
        model: 'PaymentMethod',
        key: 'id'
      }
    },
    reference: {
      allowNull: false,
      type: DataTypes.STRING
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2)
    },
    totalBasePrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2)
    },
    totalTaxPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2)
    },
    issueDate: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    issueTime: {
      allowNull: false,
      type: DataTypes.TIME
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    tableName: 'returns',
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
        name: 'return_saleId_fk',
        using: 'BTREE',
        fields: [
          { name: 'saleId' }
        ]
      },
      {
        name: 'return_customerId_fk',
        using: 'BTREE',
        fields: [
          { name: 'customerId' }
        ]
      },
      {
        name: 'return_paymentMethodId_fk',
        using: 'BTREE',
        fields: [
          { name: 'paymentMethodId' }
        ]
      }
    ]
  })

  Return.associate = function (models) {
    Return.belongsTo(models.Sale, { as: 'sale', foreignKey: 'saleId' }),
    Return.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' }),
    Return.belongsTo(models.PaymentMethod, { as: 'paymentMethod', foreignKey: 'paymentMethodId' })
    Return.hasMany(models.ReturnDetail, { as: 'details', foreignKey: 'returnId' })
    Return.belongsToMany(models.Product, { as: 'products', through: 'ReturnDetail', foreignKey: 'returnId' })
  }

  return Return
}
