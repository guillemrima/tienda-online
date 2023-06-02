module.exports = function(sequelize, DataTypes) {
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
        tableName: 'carts',
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
                name: "foreign_customer",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "customerId" },
                ]
            },
            {
                name: "foreign_fingerprint",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "fingerprintId" },
                ]
            }
        ]
    });

    Cart.associate = function(models) {
            Cart.belongsTo(models.Customer, {
                foreignKey: 'customerId',
                as: 'customer',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });

            Cart.belongsTo(models.Fingerprint, {
                foreignKey: 'fingerprintId',
                as: 'fingerprint',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
    };

    return Cart;
};