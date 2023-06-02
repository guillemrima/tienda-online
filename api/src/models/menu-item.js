module.exports = function(sequelize, DataTypes) {
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
        localeSlugSeoId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'LocaleSlugSeo',
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
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        tableName: 'menu_items',
        timestamps: true,
        paranoid: true,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
            {
                name: "foreign_localeSeo",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "localeSeoId" },
                ]
            },
            {
                name: "foreign_menu",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "menuId" },
                ]
            },
            {
                name: "foreign_localeSlugSeO",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "localeSlugSeoId" },
                ]
            },
            {
                name: "foreign_parent",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "parentId" },
                ]
            }
        ]
    });

    MenuItem.associate = function(models) {
        MenuItem.belongsTo(models.Menu, { foreignKey: 'menuId' });
      };
      

    return MenuItem;
};
