const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Social_network = sequelize.define('Social_network', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(255)
          },
          baseURL: {
            allowNull: false,
            type: DataTypes.STRING(255)
          }
    }, {
        sequelize,
        tableName: 'social_networks',
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


    Social_network.associate = function(models) {
    };

    return Social_network;
};