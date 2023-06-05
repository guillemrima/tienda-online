'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('emails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fingerprintId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fingerprint',
          key: 'id'  
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
    }).then(() => queryInterface.addIndex('emails', ['fingerprintId']));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('emails');
  }
};