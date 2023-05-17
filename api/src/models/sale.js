module.exports = function(sequelize, DataTypes) {
    const Sale = sequelize.define('Sale', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      cartId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Cart',
          key: 'id'
        }
      },
      customerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Customer',
          key: 'id'
        }
      },
      paymentMethodId: {
        allowNull: false,
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
      }
    }, {
        sequelize,
        tableName: 'sales',
        timestamps: true,
        paranoid: true,
      
    });
  
    Sale.associate = function(models) {
    };
  
    return Sale;
  };
  