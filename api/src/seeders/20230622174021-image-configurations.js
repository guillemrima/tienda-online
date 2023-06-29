'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('image_configurations', [
      {
        id: 1,
        entity: 'gallery',
        name: 'thumbnail',
        mediaQuery: 'xs',
        widthPx: 50,
        heightPx: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        entity: 'gallery',
        name: 'thumbnail',
        mediaQuery: 'sm',
        widthPx: 50,
        heightPx: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        entity: 'gallery',
        name: 'thumbnail',
        mediaQuery: 'md',
        widthPx: 135,
        heightPx: 135,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        entity: 'gallery',
        name: 'thumbnail',
        mediaQuery: 'lg',
        widthPx: 135,
        heightPx: 135,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        entity: 'user',
        name: 'avatar',
        mediaQuery: 'xs',
        widthPx: 50,
        heightPx: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        entity: 'user',
        name: 'avatar',
        mediaQuery: 'sm',
        widthPx: 50,
        heightPx: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        entity: 'user',
        name: 'avatar',
        mediaQuery: 'md',
        widthPx: 135,
        heightPx: 135,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        entity: 'user',
        name: 'avatar',
        mediaQuery: 'lg',
        widthPx: 135,
        heightPx: 135,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('image_configurations', null, {});
  }
};