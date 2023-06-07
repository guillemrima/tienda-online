module.exports = function (sequelize, DataTypes) {
  const Employee = sequelize.define('Employee', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    companyId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "companyId".'
        }
      }
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
    }
  }, {
    sequelize,
    tableName: 'employees',
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
        name: 'employee_companyId_fk',
        using: 'BTREE',
        fields: [
          { name: 'companyId' }
        ]
      }
    ]
  })

  Employee.associate = function (models) {
    Employee.belongsTo(models.Company, { as: 'company', foreignKey: 'companyId' })
    Employee.belongsToMany(models.SocialNetwork, { through: 'SocialNetworkEmployee', as: 'socialNetworks', foreignKey: 'employeeId' })
  }

  return Employee
}
