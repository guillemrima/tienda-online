module.exports = function(sequelize, DataTypes) {
    const Price = sequelize.define('Price', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        productId: {
            type: DataTypes.INTEGER
        },
        taxId: {
            type: DataTypes.INTEGER
        },
        basePrice: {
            type: DataTypes.DECIMAL
        },
        current: {
            type: DataTypes.BOOLEAN
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
        tableName: 'prices',
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
                name: "foreign_producct",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "productId" },
                ]
            },
            {
                name: "foreign_tax",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "taxId" },
                ]
            }
        
        ]
    });


    Price.associate = function(models) {
        Price.belongsTo(models.Product, { foreignKey: 'productId' });
        Price.belongsTo(models.Tax, { foreignKey: 'taxId' });
        // Otras asociaciones que desees definir...
      };

    return Price;
};