'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('social_networks_employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      socialNetworkId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'social_networks',
          key: 'id'
        }
      },
      employeeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'employees',
          key: 'id'
        }
      },
      user: {
        allowNull: false,
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
    })
    .then(() => queryInterface.addIndex('social_networks_employees', ['socialNetworkId'],{
      name: 'socialNetworksEmployee_socialNetworkId_fk'
    }))
    .then(() => queryInterface.addIndex('social_networks_employees', ['employeeId'],{
      name: 'socialNetworksEmployee_employeeId_fk'
    }))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('social_networks_employees')
  }
}
