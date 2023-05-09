const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('Company', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        fiscal_name: {
            unique: true,
            allowNull: false,
            type: DataTypes.STRING(255)
          },
          comercial_name: {
            unique: true,
            allowNull: false,
            type: DataTypes.STRING(255)
          },
          nif: {
            unique: true,
            allowNull: false,
            type: DataTypes.STRING(255)
          },
          comercial_address: {
            unique: true,
            allowNull: false,
            type: DataTypes.STRING(255)
          },
          postal_code: {
            unique: true,
            allowNull: true,
            type: DataTypes.STRING(255)
          },
          email: {
            unique: false,
            allowNull: false,
            type: DataTypes.STRING(255)
          },
          web: {
            unique: true, 
            allowNull: false,
            type: DataTypes.STRING(255)
          },
          telephone: {
            unique: true,
            allowNull: false,
            type: DataTypes.STRING(255)
          }
    }, {
        sequelize,
        tableName: 'companies',
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


    User.associate = function(models) {
    };

    return Company;
};