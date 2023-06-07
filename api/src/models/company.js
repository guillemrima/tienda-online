module.exports = function (sequelize, DataTypes) {
  const Company = sequelize.define('Company', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fiscalName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Nombre Fiscal".'
        }
      }
    },
    comercialName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Nombre Comercial".'
        }
      }
    },
    nif: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "NIF".'
        }
      }
    },
    comercialAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Dirección Comercial".'
        }
      }
    },
    fiscalAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Dirección Fiscal".'
        }
      }
    },
    postalCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Código Postal".'
        }
      }
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: {
        args: true,
        msg: 'Ya existe una empresa con ese correo electrónico.'
      },
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Email".'
        },
        isEmail: {
          msg: 'Por favor, rellena el campo "Email" con un email válido.'
        }
      }
    },
    web: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Sitio web".'
        }
      }
    },
    telephone: {
      type: DataTypes.STRING(255)
    }
  }, {
    sequelize,
    tableName: 'companies',
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
      }
    ]
  })

  Company.associate = function (models) {
    Company.hasMany(models.Employee, { as: 'employees', foreignKey: 'companyId' })
    Company.belongsToMany(models.SocialNetwork, { through: 'SocialNetworkCompany', as: 'socialNetworks', foreignKey: 'companyId' })
  }

  return Company
}
