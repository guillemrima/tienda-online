module.exports = function (sequelize, DataTypes) {
  const SocialNetworkEmployee = sequelize.define('SocialNetworkEmployee', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    socialNetworkId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "socialNetworkId".'
        }
      },
      references: {
        model: 'SocialNetwork',
        key: 'id'
      }
    },
    employeeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "employeeId".'
        }
      },
      references: {
        model: 'Employee',
        key: 'id'
      }
    },
    user: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "user".'
        }
      }
    }
  }, {
    sequelize,
    tableName: 'social_networks_employees',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      },
      {
        name: 'socialNetworksEmployee_socialNetworkId_fk',
        using: 'BTREE',
        fields: [
          { name: 'socialNetworkId' }
        ]
      },
      {
        name: 'socialNetworksEmployee_employeeId_fk',
        using: 'BTREE',
        fields: [
          { name: 'employeeId' }
        ]
      }
    ]
  })

  SocialNetworkEmployee.associate = function (models) {

  }

  return SocialNetworkEmployee
}
