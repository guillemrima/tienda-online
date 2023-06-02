'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('menu_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menuId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Menu',
          key: 'id'
        }
      },
      localeSeoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'LocaleSeo',
          key: 'id'
        }
      },
      localeSlugSeoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'LocaleSlugSeo',
          key: 'id'
        }
      },
      parentId: {
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      customUrl: {
        type: Sequelize.STRING
      },
      private: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      order: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('menu_items');
  }
};