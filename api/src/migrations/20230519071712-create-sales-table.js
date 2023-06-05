'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cartId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cart',
          key: 'id'
        }
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Customer',
          key: 'id'
        }
      },
      paymentMethodId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PaymentMethod',
          key: 'id'
        }
      },
      reference: {
        allowNull: false,
        type: Sequelize.STRING
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      totalBasePrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      totalTaxPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      issueDate: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      issueTime: {
        allowNull: false,
        type: Sequelize.TIME
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
    .then(() => queryInterface.addIndex('sales', ['cartId']))
    .then(() => queryInterface.addIndex('sales', [ 'customerId']))
    .then(() => queryInterface.addIndex('sales', ['paymentMethodId']))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
