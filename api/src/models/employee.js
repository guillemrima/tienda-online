module.exports = function(sequelize, DataTypes) {
    const Employee = sequelize.define('Employee', {
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
        position: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "position".'
                }
            }
        },
        companyId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Company',
                key: 'id'
              },
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "companyId".'
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
        tableName: 'employees',
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
                name: "foreign_company",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "companyId" },
                ]
            }
        ]
    });

    Employee.associate = function(models) {
        Employee.belongsTo(models.Company, { foreignKey: 'companyId' });
    };

    return Employee;
};