module.exports = function(sequelize, DataTypes) {
    const Contact = sequelize.define('Contact', {
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
                    msg: 'Por favor, rellena el campo "Nombre Fiscal".'
                }
            }
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Email".'
                },
                isEmail: {
                    msg: 'Por favor, rellena el campo "Email" con un email válido.'
                }
            }
        },
        subject: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Subject".'
                }
            }
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
              notNull: {
                msg: 'Por favor, rellena el campo "Mensaje".'
              }
            }
        },
        fingerprintId:{
            type: DataTypes.INTEGER,
            references: {
                model: 'Fingerprint',
                key: 'id'  
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
    }, {
        sequelize,
        tableName: 'Contacts',
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

    Contact.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
    };

    return Contact;
};
