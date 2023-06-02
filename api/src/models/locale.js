module.exports = function(sequelize, DataTypes) {
    const Locale = sequelize.define('Locale', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        languageAlias: {
            type: DataTypes.CHAR(2),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Alias del idioma".'
                }
            }
        },
        entity: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Entidad".'
                }
            }
        },
        entityKey: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unsigned: true,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Clave de entidad".'
                }
            }
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Clave".'
                }
            }
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Valor".'
                }
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE
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
        Locale.hasMany(models.LocaleSeo, { foreignKey: 'localeId' });
    };

    return Locale;
};
