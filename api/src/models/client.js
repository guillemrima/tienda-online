const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Client = sequelize.define('Client', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          name: {
            allowNull: false,
            type: DataTypes.STRING(255)
          },
          surname: {
            allowNull: false,
            type: DataTypes.STRING(255)
          },
          telephone: {
            allowNull: false,
            type: DataTypes.STRING(10)
          },
          email: {
            allowNull: false,
            type: DataTypes.STRING(255)
          },
          poblation: {
            allowNull: false,
            type: DataTypes.STRING(255)
          },
          postal_code: {
            allowNull: false,
            type: DataTypes.CHAR
          },
          address: {
            allowNull: false,
            type: DataTypes.STRING(255)
          }
    }, {
        sequelize,
        tableName: 'clients',
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


    Client.associate = function(models) {
    };

    return Client;
};