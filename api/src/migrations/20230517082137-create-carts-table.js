'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Customer',
          key: 'id'  
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
    }).then(() => queryInterface.addIndex('carts', ['customerId']))
    .then(() => queryInterface.addIndex('carts', ['fingerprintId']));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('carts');
  }
};