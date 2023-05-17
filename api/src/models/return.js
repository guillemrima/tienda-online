const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Return = sequelize.define('Return', {
        saleId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paymentMethodId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        totalBasePrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        totalTaxPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        issueDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        issueTime: {
            type: DataTypes.TIME,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'returns',
        timestamps: true,
        paranoid: true,
    });

    Return.associate = function(models) {
    };

    return Return;
};
