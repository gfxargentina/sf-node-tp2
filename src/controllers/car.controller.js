const carModel = require('../database/models').Car;
const userModel = require('../database/models').User;

const getAllCars = async (req, res) => {
  carModel
    .findAll({
      include: [{ model: userModel }],
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
};

const createCar = async (req, res) => {
  carModel
    .create(req.body)
    .then((data) => {
      res.json({ datos: data });
    })
    .catch((error) => {
      res.json({ error: error });
    });
};

const updateCar = async (req, res) => {
  res.json('actualizar un auto');
};

const deleteCar = async (req, res) => {
  res.json('borra un auto');
};

module.exports = {
  getAllCars,
  createCar,
  updateCar,
  deleteCar,
};
