const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Tax = sequelize.define('Tax', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        vatRate: {
            allowNull: false,
            type: DataTypes.INTEGER(2),
        },
        valid: {
            allowNull: false,
            type: DataTypes.TINYINT(1)
        }
    }, {
        sequelize,
        tableName: 'taxes',
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


    Tax.associate = function(models) {
    };

    return Tax;
};