'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      language_alias: {
        allowNull:false,
        unique: true,
        type: Sequelize.STRING(2)
      },
      entity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      entity_key: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      key: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      value: {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('locales');
  }
};