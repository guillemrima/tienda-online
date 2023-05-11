'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('social_networks_companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      social_network_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'social_networks',
          key: 'id'
        }
      },
      company_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'companies',
          key: 'id'
        }
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
    await queryInterface.dropTable('social_networks_companies');
  }
};
