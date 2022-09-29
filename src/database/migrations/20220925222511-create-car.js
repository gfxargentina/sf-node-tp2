'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      marca: {
        type: Sequelize.STRING,
      },
      modelo: {
        type: Sequelize.STRING,
      },
      anio: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      tipoCombustible: {
        type: Sequelize.STRING,
      },
      puertas: {
        type: Sequelize.STRING,
      },
      transmision: {
        type: Sequelize.STRING,
      },
      motor: {
        type: Sequelize.STRING,
      },
      tipoCarroceria: {
        type: Sequelize.STRING,
      },
      kilometros: {
        type: Sequelize.STRING,
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: true,
        References: {
          model: 'User',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  },
};
