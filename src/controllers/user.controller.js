const userModel = require('../database/models').User;
const carModel = require('../database/models').Car;

const getAllUsers = async (req, res) => {
  userModel
    .findAll({
      include: [{ model: carModel }],
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
};

const createUser = async (req, res) => {
  userModel
    .create(req.body)
    .then((data) => {
      res.json({ datos: data });
    })
    .catch((error) => {
      res.json({ error: error });
    });
};

const updateUser = async (req, res) => {
  res.send('actualiza un usuario');
};

const deleteUser = async (req, res) => {
  res.send('borra un usuario');
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
