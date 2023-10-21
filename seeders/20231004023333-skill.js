'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Skills', [
      {
        name: 'Desarrollo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Diseñar',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Escritor',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Skills", null, {});
  }
};
