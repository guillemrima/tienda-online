module.exports = function (sequelize, DataTypes) {
  const LocaleSeoRedirect = sequelize.define('LocaleSeoRedirect', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    localeSeoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'LocaleSeo',
        key: 'id'
      }
    },
    language: {
      type: DataTypes.STRING
    },
    group: {
      type: DataTypes.STRING
    },
    key: {
      type: DataTypes.STRING
    },
    subdomain: {
      type: DataTypes.STRING
    },
    oldUrl: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName: 'locale_seo_redirects',
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
        name: 'localeSeoRedirect_localeSeoId_fk',
        using: 'BTREE',
        fields: [
          { name: 'localeSeoId' }
        ]
      }
    ]
  })

  LocaleSeoRedirect.associate = function (models) {
    LocaleSeoRedirect.belongsTo(models.LocaleSeo, { as: 'localeSeo', foreignKey: 'localeSeoId' })
  }

  return LocaleSeoRedirect
}
