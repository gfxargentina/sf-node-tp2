'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.belongsTo(models.User, {
        foreignKey: 'id',
        target_Key: 'idUser',
      });
    }
  }
  Car.init(
    {
      marca: DataTypes.STRING,
      modelo: DataTypes.STRING,
      anio: DataTypes.STRING,
      color: DataTypes.STRING,
      tipoCombustible: DataTypes.STRING,
      puertas: DataTypes.STRING,
      transmision: DataTypes.STRING,
      motor: DataTypes.STRING,
      tipoCarroceria: DataTypes.STRING,
      kilometros: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Car',
    }
  );
  return Car;
};
