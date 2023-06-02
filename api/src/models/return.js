module.exports = function(sequelize, DataTypes) {
    const Returns = sequelize.define('Return', {
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
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
              { name: "id" },
          ]
      },
        {
          name: "foreign_sale",
          unique: true,
          using: "BTREE",
          fields: [
              { name: "returnId" },
          ]
      },
      {
        name: "foreign_return",
        unique: true,
        using: "BTREE",
        fields: [
            { name: "saleId" },
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
      name: "foreign_paymentMethod",
      unique: true,
      using: "BTREE",
      fields: [
          { name: "paymentMethodId" },
      ]
    }
      ]
    });
  
    Returns.associate = function(models) {
          Returns.belongsTo(models.Sale, {
            foreignKey: 'saleId'
          });

        Returns.belongsTo(models.Customer, {
            foreignKey: 'customerId'
        });

        Returns.belongsTo(models.PaymentMethod, {
            foreignKey: 'paymentMethodId'
        });
    };
  
    return Returns;
  };
  