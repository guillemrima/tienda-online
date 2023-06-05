'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Product',
          key: 'id'  
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
      },
      taxId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tax',
          key: 'id'  
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
      },
      basePrice: {
        type: Sequelize.DECIMAL
      },
      current: {
        type: Sequelize.BOOLEAN
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
    .then(() => queryInterface.addIndex('prices', ['productId']))
    .then(() => queryInterface.addIndex('prices', ['taxId']))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('prices');
  }
};