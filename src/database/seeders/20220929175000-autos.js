'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cars', [
      {
        marca: 'Ford',
        modelo: 'Focus',
        anio: '2022',
        color: 'rojo',
        tipoCombustible: 'nafta',
        puertas: '4',
        transmision: 'automatico',
        motor: 'v8',
        tipoCarroceria: 'Sedan',
        kilometros: '90 km',
        idUser: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        marca: 'Chevrolet',
        modelo: 'Corsa',
        anio: '2005',
        color: 'gris',
        tipoCombustible: 'diesel',
        puertas: '4',
        transmision: 'manuel',
        motor: '2.0',
        tipoCarroceria: 'Sedan',
        kilometros: '169000 km',
        idUser: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        marca: 'Peugeot',
        modelo: '208',
        anio: '2019',
        color: 'negro',
        tipoCombustible: 'nafta',
        puertas: '4',
        transmision: 'manual',
        motor: '1.6',
        tipoCarroceria: 'Sedan',
        kilometros: '130000 km',
        idUser: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cars', null, {});
  },
};
