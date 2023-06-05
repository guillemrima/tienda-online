module.exports = function(sequelize, DataTypes) {
    const Sale = sequelize.define(
      'Sale',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        cartId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Cart',
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
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please provide a value for "reference".'
            }
          }
        },
        totalPrice: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please provide a value for "totalPrice".'
            }
          }
        },
        totalBasePrice: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please provide a value for "totalBasePrice".'
            }
          }
        },
        totalTaxPrice: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please provide a value for "totalTaxPrice".'
            }
          }
        },
        issueDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please provide a value for "issueDate".'
            }
          }
        },
        issueTime: {
          type: DataTypes.TIME,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please provide a value for "issueTime".'
            }
          }
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
      },
      {
        sequelize,
        tableName: 'sales',
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
          name: "foreign_cart",
          unique: true,
          using: "BTREE",
          fields: [
              { name: "cartId" },
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
      }
    );
  
    Sale.associate = function(models) {
      // Define las asociaciones con otros modelos aquí
      Sale.belongsTo(models.Cart, {foreignKey: 'cartId'})
      Sale.belongsTo(models.Customer, {foreignKey: 'customerId'})
      Sale.belongsTo(models.PaymentMethod, {foreignKey: 'paymentMethodId'})

      Sale.hasMany(models.Returns, {
        foreignKey: 'saleId',
        as: 'returns',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      
      Sale.hasMany(models.SaleDetail, {
        foreignKey: 'saleId',
        as: 'saleDetails',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      
    };
  
    return Sale;
  };
  