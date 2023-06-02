module.exports = function(sequelize, DataTypes) {
    const SaleError = sequelize.define('SaleError', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      paymentMethodId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'PaymentMethod',
          key: 'id'
        },
        allowNull: false
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Customer',
          key: 'id'
        }
      },
      cartId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Cart',
          key: 'id'
        },
        allowNull: false
      },
      errorCode: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      errorMessage: {
        type: DataTypes.STRING
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
      tableName: 'sale_errors',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
              { name: "id" },
          ]
      },
      {
        name: "foreign_paymentMethod",
        unique: true,
        using: "BTREE",
        fields: [
            { name: "paymentMethodId" },
        ]
    },
    {
      name: "foreign_customer",
      unique: true,
      using: "BTREE",
      fields: [
          { name: "customerId" },
      ]
    },
    {
      name: "foreign_cart",
      unique: true,
      using: "BTREE",
      fields: [
          { name: "cartId" },
      ]
  }
      ]
    });
  
    SaleError.associate = function(models) {
      // Define las asociaciones con otros modelos aquí
      SaleError.belongsTo(models.Customer, {foreignKey: 'customerId'})
      SaleError.belongsTo(models.PaymentMethod, {foreignKey: 'paymentMethodId'})
      SaleError.belongsTo(models.Cart, {foreignKey: 'cartId'})
    };
  
    return SaleError;
  };
  