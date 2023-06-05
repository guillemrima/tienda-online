module.exports = function(sequelize, DataTypes) {
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
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'payment_methods',
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
        }
    ]
    });
    
    PaymentMethod.associate = function(models) {
      PaymentMethod.hasMany(models.Order, { foreignKey: 'paymentMethodId' });

    PaymentMethod.hasMany(models.Returns, {
      foreignKey: 'paymentMethodId',
      as: 'returns',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    
    PaymentMethod.hasMany(models.SaleError, {
      foreignKey: 'paymentMethodId',
      as: 'saleErrors',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    
    PaymentMethod.hasMany(models.Sale, {
      foreignKey: 'paymentMethodId',
      as: 'sales',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
    
    return PaymentMethod;
  };