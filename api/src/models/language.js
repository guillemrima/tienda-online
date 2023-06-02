module.exports = function(sequelize, DataTypes) {
    const Language = sequelize.define('Language', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Language".'
                }
            },
            unique: {
                args: true,
                msg: 'Ya existe ese lenguaje.'
            },
        },
        alias: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Alias".'
                }
            },
            unique: {
                args: true,
                msg: 'Ya existe ese alias.'
            },
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
            },
            {
                name: "email",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "email" },
                ]
            },
        ]
    });

    Language.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
    };

    return Language;
};
