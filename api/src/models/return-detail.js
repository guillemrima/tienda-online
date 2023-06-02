module.exports = function(sequelize, DataTypes) {
    const ReturnDetail = sequelize.define('ReturnDetail', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        returnId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Return',
                key: 'id'  
             },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL'
        },
        productId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Product',
                key: 'id'  
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
        productName: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "productName".'
                }
            }
        },
        basePrice: {
            allowNull: false,
            type: DataTypes.DECIMAL(6, 2),
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "basePrice".'
                }
            }
        },
        taxPrice: {
            allowNull: false,
            type: DataTypes.DECIMAL(6, 2),
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "taxPrice".'
                }
            }
        },
        unitOfMeasurement: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "unitOfMeasurement".'
                }
            }
        },
        quantity: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "quantity".'
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
    }, {
        sequelize,
        tableName: 'return_details',
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
            name: "foreign_return",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "returnId" },
            ]
        },
        {
            name: "foreign_product",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "productId" },
            ]
        }
    ]
    });


    ReturnDetail.associate = function(models) {
        ReturnDetail.belongsTo(models.Return, { foreignKey: 'returnId', onUpdate: 'CASCADE', onDelete: 'SET NULL' });
        ReturnDetail.belongsTo(models.Product, { foreignKey: 'productId', onUpdate: 'CASCADE', onDelete: 'SET NULL' });
        // Agrega más asociaciones aquí si es necesario
      };
    return ReturnDetail;
};