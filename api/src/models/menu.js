module.exports = function (sequelize, DataTypes) {
  const Menu = sequelize.define('Menu', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Nombre".'
        }
      }
    }
  }, {
    sequelize,
    tableName: 'menus',
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

  Menu.associate = function (models) {
    Menu.hasMany(models.MenuItem, { as: 'menuItems', foreignKey: 'menuId' })
    Menu.belongsToMany(models.LocaleSeo, { through: models.MenuItem, as: 'localeSeos', foreignKey: 'menuId' })
    Menu.belongsToMany(models.LocaleSeoSlug, { through: models.MenuItem, as: 'localeSeoSlugs', foreignKey: 'menuId' })
  }

  return Menu
}
