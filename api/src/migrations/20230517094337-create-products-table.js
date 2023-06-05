'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ProductCategory',
          key: 'id'  
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      featured: {
        type: Sequelize.BOOLEAN,
        references: {
          model: 'feature',
          key: 'id'  
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
    .then(() => queryInterface.addIndex('products', ['poductCategoryId']))
    .then(() => queryInterface.addIndex('products', ['featured']));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};