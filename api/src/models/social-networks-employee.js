const useBcrypt = require('sequelize-bcrypt');

module.exports = function(sequelize, DataTypes) {
    const SocialNetworksEmployees = sequelize.define('SocialNetworksEmployees', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          socialNetworkId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'socialNetworks',
              key: 'id'
            }
          },
          employeeId: {
            allowNull:false,
            type: DataTypes.INTEGER,
            references: {
              model: 'employees',
              key: 'id'
            }
          }
    }, {
        sequelize,
        tableName: 'socialNetworksEmployees',
        timestamps: true,
        paranoid: true,
        indexes: []
    });


    SocialNetworksEmployees.associate = function(models) {
    };

    return SocialNetworksEmployees;
};