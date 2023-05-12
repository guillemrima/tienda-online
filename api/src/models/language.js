const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Language = sequelize.define('Language', {
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
          alias: {
            allowNull: false,
            type: DataTypes.STRING(255)
          }
    }, {
        sequelize,
        tableName: 'languages',
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


    Language.associate = function(models) {
    };

    return Language;
};