module.exports = function(sequelize, DataTypes) {
    const Customer = sequelize.define('Customer', {
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
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Apellido".'
          }
        }
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Teléfono".'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Email".'
          },
          isEmail: {
            msg: 'Por favor, rellena el campo "Email" con un email válido.'
          }
        }
      },
      town: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Localidad".'
          }
        }
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Código Postal".'
          }
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Dirección".'
          }
        }
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
      tableName: 'customers',
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
  
    Customer.associate = function(models) {
      Customer.hasMany(models.Cart, {
        foreignKey: 'customerId',
        as: 'carts',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      Customer.hasMany(models.Returns, {
        foreignKey: 'customerId',
        as: 'returns',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      
      Customer.hasMany(models.SaleError, {
        foreignKey: 'customerId',
        as: 'saleErrors',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      Customer.hasMany(models.Sale, {
        foreignKey: 'customerId',
        as: 'sales',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      
      Customer.hasMany(models.SentEmail, {
        foreignKey: 'customerId',
        as: 'sentEmails',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      
    };
  
    return Customer;
  };
  