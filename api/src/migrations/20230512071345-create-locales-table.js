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
      languageAlias: {
        allowNull: false,
        type: Sequelize.CHAR(2),
      },
      entity: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      entityKey: {
        allowNull: false,
        unsigned: true,
        type: Sequelize.INTEGER
      },
      key: {
        allowNull: false,
        type: Sequelize.STRING
      },
      value: {
        allowNull: false,
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
