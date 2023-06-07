module.exports = function (sequelize, DataTypes) {
  const MenuItem = sequelize.define('MenuItem', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    menuId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Menu',
        key: 'id'
      }
    },
    localeSeoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'LocaleSeo',
        key: 'id'
      }
    },
    localeSeoSlugId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'LocaleSeoSlug',
        key: 'id'
      }
    },
    parentId: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    customUrl: {
      type: DataTypes.STRING
    },
    private: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'menu_items',
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
        name: 'menuItem_menuId_fk',
        using: 'BTREE',
        fields: [
          { name: 'menuId' }
        ]
      },
      {
        name: 'menuItem_localeSeoId_fk',
        using: 'BTREE',
        fields: [
          { name: 'localeSeoId' }
        ]
      },
      {
        name: 'menuItem_localeSeoSlugId_fk',
        using: 'BTREE',
        fields: [
          { name: 'localeSeoSlugId' }
        ]
      }
    ]
  })

  MenuItem.associate = function (models) {
    MenuItem.belongsTo(models.Menu, { as: 'menu', foreignKey: 'menuId' })
    MenuItem.belongsTo(models.LocaleSeo, { as: 'localeSeo', foreignKey: 'localeSeoId' })
    MenuItem.belongsTo(models.LocaleSeoSlug, { as: 'localeSeoSlug', foreignKey: 'localeSeoSlugId' })
  }

  return MenuItem
}
