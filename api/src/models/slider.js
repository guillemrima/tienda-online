const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Slider = sequelize.define('Slider', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(255)
          }
    }, {
        sequelize,
        tableName: 'sliders',
        timestamps: true,
        paranoid: true,
    });


    Slider.associate = function(models) {
    };

    return Slider;
};