module.exports = function (sequelize, DataTypes) {
  const LocaleSeoSlug = sequelize.define('LocaleSeoSlug', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    localeSeoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'LocaleSeo',
        key: 'id'
      }
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false
    },
    relParent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    key: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parentSlug: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    keywords: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName: 'locale_seo_slugs',
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
        name: 'localeSeoSlug_localeSeoId_fk',
        using: 'BTREE',
        fields: [
          { name: 'localeSeoId' }
        ]
      }
    ]
  })

  LocaleSeoSlug.associate = function (models) {
    LocaleSeoSlug.belongsTo(models.LocaleSeo, { as: 'localeSeo', foreignKey: 'localeSeoId' })
    LocaleSeoSlug.hasMany(models.MenuItem, { as: 'menuItems', foreignKey: 'localeSeoSlugId' })
  }

  return LocaleSeoSlug
}
