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
      fiscal_name: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      comercial_name: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      nif: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      comercial_address: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      postal_code: {
        unique: true,
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        unique: false,
        allowNull: false,
        type: Sequelize.STRING
      },
      web: {
        unique: true, 
        allowNull: false,
        type: Sequelize.STRING
      },
      telephone: {
        unique: true,
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
    await queryInterface.dropTable('companies');
  }
};
