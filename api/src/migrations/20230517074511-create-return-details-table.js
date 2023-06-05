'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('return_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      returnId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Return',
          key: 'id'  
       },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
      productName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      basePrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2)
      },
      taxPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2)
      },
      unitOfMeasurement: {
        allowNull: false,
        type: Sequelize.STRING
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    }).then(() => queryInterface.addIndex('details', ['returnId']))
    .then(() => queryInterface.addIndex('details', ['productId']))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('return_details');
  }
};