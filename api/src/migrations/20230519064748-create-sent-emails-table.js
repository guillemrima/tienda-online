'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sent_emails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Customer',
          key: 'id'
        }
      },
      emailId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Email',
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
    })
    .then(() => queryInterface.addIndex('sent_emails', ['customerId']))
    .then(() => queryInterface.addIndex('sent_emails', ['emailId']))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sent_emails');
  }
};
