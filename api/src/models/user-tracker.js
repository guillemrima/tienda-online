module.exports = function (sequelize, DataTypes) {
        const UserTracker = sequelize.define('UserTracker', {
          id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
          },
          userId: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          ip: {
                type: DataTypes.STRING,
                allowNull: false
          },
          recurso: {
                type: DataTypes.STRING,
                allowNull: false,
          },
          metodo: {
                 type: DataTypes.STRING,
                 allowNull: false
          },
          estado : {
            type: DataTypes.STRING,
            allowNull: false
          }
        },{
            sequelize,
            tableName: 'users_tracker',
            timestamps: true,
            paranoid: true,
            indexes: [
            ]
        },)
      
        UserTracker.associate = function (models) {
        }
      
        return UserTracker
      }
      