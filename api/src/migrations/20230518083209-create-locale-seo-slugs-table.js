'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locale_seo_slugs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      language: {
        allowNull: false,
        type: Sequelize.STRING
      },
      relParent: {
        allowNull: false,
        type: Sequelize.STRING
      },
      slug: {
        allowNull: false,
        type: Sequelize.STRING
      },
      key: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      localeSeoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'LocaleSeo',
          key: 'id'
        }
      },
      parentSlug: {
        type: Sequelize.STRING
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      keywords: {
        type: Sequelize.STRING
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
    }).then(() => queryInterface.addIndex('locale_seo_slugs', ['localeSeoId']));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('locale_seo_slugs');
  }
};