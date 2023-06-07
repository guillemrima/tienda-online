'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fingerprintId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fingerprints',
          key: 'id'
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      subject: {
        allowNull: false,
        type: Sequelize.STRING
      },
      message: {
        allowNull: false,
        type: Sequelize.TEXT
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
    .then(() => queryInterface.addIndex('contacts', ['fingerprintId'],{
      name: 'contacts_fingerprintId_index'
    }))
    .then(() => queryInterface.addIndex('contacts', ['email'],{
      name: 'contact_email'
    }))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contacts')
  }
}
