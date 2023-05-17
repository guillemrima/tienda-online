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
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'carts',
          key: 'id'
        }
      },
      customerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      paymentMethodId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
