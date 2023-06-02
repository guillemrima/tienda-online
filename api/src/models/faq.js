module.exports = function(sequelize, DataTypes) {
    const Faq = sequelize.define('Faq', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "name".'
                }
            }
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "title".'
                }
            }
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "description".'
                }
            }
        },
        order: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        tableName: 'faqs',
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

    return Faq;
};