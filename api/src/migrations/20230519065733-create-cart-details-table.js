'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cart_details', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cart',
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Product',
          key: 'id'
        }
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      basePrice: {
        type: Sequelize.DECIMAL(6, 2),
        allowNull: false
      },
      taxPrice: {
        type: Sequelize.DECIMAL(6, 2)
      },
      unitOfMeasurement: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
    .then(() => queryInterface.addIndex('cart_details', ['cartId']))
    .then(() => queryInterface.addIndex('cart_details', ['productId']))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cart_details');
  }
};
