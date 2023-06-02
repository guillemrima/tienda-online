'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fiscalName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      comercialName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nif: {
        allowNull: false,
        type: Sequelize.STRING
      },
      comercialAddress: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fiscalAddress: {
        allowNull: false,
        type: Sequelize.STRING
      },
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      web: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telephone: {
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
    await queryInterface.dropTable('companies');
  }
};
