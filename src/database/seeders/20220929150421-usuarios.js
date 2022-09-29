'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        nombre: 'Admin',
        apellido: 'Administrador',
        telefono: '158789235',
        email: 'admin@gmail.com',
        password:
          '$2a$10$xAB2X19HwnrJ7L68tdJEdevWUBbJhZg/x1NgvpSUrZsCAtOfJtp7.',
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Charly',
        apellido: 'Garcia',
        telefono: '158789235',
        email: 'charly@gmail.com',
        password:
          '$2a$10$xAB2X19HwnrJ7L68tdJEdevWUBbJhZg/x1NgvpSUrZsCAtOfJtp7.',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Gustavo',
        apellido: 'Ceratti',
        telefono: '158789235',
        email: 'ceratti@gmail.com',
        password:
          '$2a$10$xAB2X19HwnrJ7L68tdJEdevWUBbJhZg/x1NgvpSUrZsCAtOfJtp7.',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
