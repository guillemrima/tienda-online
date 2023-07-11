'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users_tracker', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ip: {
        type: Sequelize.STRING,
        allowNull: false
      },
      recurso: {
        type: Sequelize.STRING,
        allowNull: false
      },
      metodo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING,
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users_tracker')
  }
}