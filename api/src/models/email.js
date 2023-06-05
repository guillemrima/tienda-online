module.exports = function(sequelize, DataTypes) {
    const Email = sequelize.define('Email', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        subject: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "subject".'
                }
            }
        },
        content: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "content".'
                }
            }
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
        tableName: 'emails',
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
                name: "foreign_fingerprint",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "fingerprintId" },
                ]
            }
        ]
    });

    Email.associate = function(models) {
        Email.belongsTo(models.Fingerprint, { foreignKey: 'fingerprintId' });
    };

    Email.hasMany(models.SentEmail, {
        foreignKey: 'emailId',
        as: 'sentEmails',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      
    return Email;
};