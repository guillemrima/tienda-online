const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Locale = sequelize.define('Locale', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        language_alias: {
            allowNull:false,
            unique: true,
            type: DataTypes.STRING(2)
          },
          entity: {
            allowNull: false,
            type: DataTypes.STRING(255)
          },
          entity_key: {
            allowNull: false,
            type: DataTypes.INTEGER
          },
          key: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING(255)
          },
          value: {
            type: DataTypes.STRING(255)
          }
    }, {
        sequelize,
        tableName: 'locales',
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


    Locale.associate = function(models) {
    };

    return Locale;
};