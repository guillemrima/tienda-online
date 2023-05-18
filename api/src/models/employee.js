const useBcrypt = require('sequelize-bcrypt');

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
            type: DataTypes.STRING
          },
          workPositionId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'workPositions',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
          },
          socialNetworksId: {
            allowNull: true,
            type:DataTypes.INTEGER,
            references: {
              model: 'socialNetworksEmployees',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          profileImageId: {
            allowNull: true,
            type: DataTypes.INTEGER,
            references: {
              model: 'images',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
          },
          languageId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'locale',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Company',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
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
            }
        ]
    });


    Employee.associate = function(models) {
    };

    return Employee;
};