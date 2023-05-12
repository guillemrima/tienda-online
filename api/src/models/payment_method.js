const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Payment_method = sequelize.define('Payment_method', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        visible: {
            allowNull: false,
            type: DataTypes.TINYINT(1),      
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


    Payment_method.associate = function(models) {
    };

    return Payment_method;
};