'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('returns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      saleId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      paymentMethodId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      reference: {
        type: Sequelize.STRING,
        allowNull: false
      },
      totalPrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      totalBasePrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      totalTaxPrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      issueDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      issueTime: {
        type: Sequelize.TIME,
        allowNull: false
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
    await queryInterface.dropTable('returns');
  }
};
