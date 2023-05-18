const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const WorkPosition = sequelize.define('WorkPosition', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          name: {
            allowNull: false,
            type: Sequelize.STRING
          }
    }, {
        sequelize,
        tableName: 'workPositions',
        timestamps: true,
        paranoid: true,
        indexes: [ {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "id" },
            ]
        }]
    });


    WorkPosition.associate = function(models) {
    };

    return WorkPosition;
};