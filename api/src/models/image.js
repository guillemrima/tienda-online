module.exports = function (sequelize, DataTypes) {
  const Image = sequelize.define('Image', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    imageConfigurationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ImageConfiguration',
        key: 'id'
      }
    },
    entityId: {
      type: DataTypes.INTEGER
    },
    entity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Entity".'
        }
      }
    },
    name: {
      type: DataTypes.STRING
    },
    originalFilename: {
      type: DataTypes.STRING
    },
    resizedFilename: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    alt: {
      type: DataTypes.STRING
    },
    languageAlias: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Language Alias".'
        }
      }
    },
    mediaQuery: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Media Query".'
        }
      }
    },
    latencyMs: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Latency Ms".'
        }
      }
    }
  }, {
    sequelize,
    tableName: 'images',
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
        name: 'image_imageConfigurationId_fk',
        using: 'BTREE',
        fields: [
          { name: 'imageConfigurationId' }
        ]
      },
      {
        name: 'image_entityId_entity_idx',
        using: 'BTREE',
        fields: [
          { name: 'entityId' },
          { name: 'entity' }
        ]
      }
    ]
  })

  Image.associate = function (models) {
    Image.belongsTo(models.ImageConfiguration, { as: 'imageConfiguration', foreignKey: 'imageConfigurationId' })
  }

  return Image
}
