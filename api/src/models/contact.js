const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Contact = sequelize.define('Contact', {
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
        email: {
            allowNull: false,
            type: DataTypes.STRING
        },
        issue: {
            allowNull: false,
            type: DataTypes.STRING
        },
        message: {
            allowNull: false,
            type: DataTypes.STRING
          }
    }, {
        sequelize,
        tableName: 'contacts',
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


    Contact.associate = function(models) {
    };

    return Contact;
};