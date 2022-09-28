const carModel = require('../database/models').Car;
const userModel = require('../database/models').User;

const getAllCars = async (req, res) => {
  // carModel
  //   .findAll({
  //     include: [{ model: userModel }],
  //   })
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((error) => {
  //     res.json(error);
  //   });

  try {
    const allCars = await carModel.findAll({
      include: [{ model: userModel }],
    });
    res.status(200).json(allCars);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await carModel.findByPk(id);
    if (!car) {
      return res.status(404).json({ msg: 'El auto no existe' });
    }

    res.status(200).json({ car });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createCar = async (req, res) => {
  // carModel
  //   .create(req.body)
  //   .then((data) => {
  //     res.json({ datos: data });
  //   })
  //   .catch((error) => {
  //     res.json({ error: error });
  //   });

  const newCar = await carModel.create(req.body);
  res.status(200).json(newCar);
};

const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const newCar = req.body;

    await carModel.update(newCar, {
      where: { id },
    });

    const updatedCar = await carModel.findByPk(id);

    res.status(200).json({
      msg: 'Auto Actualizado',
      updatedCar,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    await carModel.destroy({
      where: { id },
    });
    res.status(200).json({
      msg: 'Auto eliminado exitosamente',
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
