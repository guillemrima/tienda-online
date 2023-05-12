'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('image_configurations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entity: {
        allowNull: false,
        type: Sequelize.STRING
      },
      directory: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      grid: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contentAccepted: {
        allowNull: false,
        type: Sequelize.STRING
      },
      extensionConversion: {
        allowNull: false,
        type: Sequelize.STRING(4)
      },
      widthPx: {
        type: Sequelize.INTEGER(4).UNSIGNED
      },
      heightPx: {
        type: Sequelize.INTEGER(4).UNSIGNED
      },
      quality: {
        allowNull: false,
        type: Sequelize.INTEGER(3).UNSIGNED
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
    await queryInterface.dropTable('image_configurations');
  }
};