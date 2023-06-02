'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sale_errors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      paymentMethodId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'PaymentMethod',
          key: 'id'
        }
      },
      customerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Customer',
          key: 'id'
        }
      },
      cartId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cart',
          key: 'id'
        }
      },
      errorCode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      errorMessage: {
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
    await queryInterface.dropTable('sale_errors');
  }
};
