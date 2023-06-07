module.exports = function (sequelize, DataTypes) {
  const LocaleSeo = sequelize.define('LocaleSeo', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    language: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "language".'
        }
      }
    },
    group: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "group".'
        }
      }
    },
    key: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "key".'
        }
      }
    },
    subdomain: {
      type: DataTypes.STRING
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "url".'
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
      type: DataTypes.STRING
    },
    keywords: {
      type: DataTypes.STRING
    },
    redirection: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    menu: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    },
    changeFrequency: {
      type: DataTypes.STRING
    },
    priority: {
      type: DataTypes.DECIMAL
    },
    sitemap: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'locale_seos',
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

  LocaleSeo.associate = function (models) {
    LocaleSeo.hasMany(models.LocaleSeoRedirect, { as: 'redirects', foreignKey: 'localeSeoId' })
    LocaleSeo.hasMany(models.LocaleSeoSlug, { as: 'slugs', foreignKey: 'localeSeoId' })
    LocaleSeo.hasMany(models.MenuItem, { as: 'menuItems', foreignKey: 'localeSeoId' })
  }

  return LocaleSeo
}
