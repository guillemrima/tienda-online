'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sale_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      saleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
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
    })
    .then(() => queryInterface.addIndex('sale_details', ['saleId'],{
      name: 'saleDetail_saleId_fk'
    }))
    .then(() => queryInterface.addIndex('sale_details', ['productId'],{
      name: 'saleDetail_productId_fk'
    }))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sale_details')
  }
}
