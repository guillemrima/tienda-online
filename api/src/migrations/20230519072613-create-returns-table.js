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
        references: {
          model: 'Sale',
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('returns');
  }
};
