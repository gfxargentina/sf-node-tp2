const userModel = require('../database/models').User;
const carModel = require('../database/models').Car;

const getAllUsers = async (req, res) => {
  // userModel
  //   .findAll({
  //     include: [{ model: carModel }],
  //   })
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((error) => {
  //     res.json(error);
  //   });
  try {
    const allUsers = await userModel.findAll({
      include: [{ model: carModel }],
    });
    res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// const createUser = async (req, res) => {
//   // userModel
//   //   .create(req.body)
//   //   .then((data) => {
//   //     res.json({ datos: data });
//   //   })
//   //   .catch((error) => {
//   //     res.json({ error: error });
//   //   });
//   const newUser = await userModel.create(req.body);
//   res.status(200).json(newUser);
// };

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ msg: 'El usuario no existe' });
    }

    res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const updateUser = async (req, res) => {
  // const id = req.params.id;
  // const updatedUser = req.body;
  // userModel
  //   .update(updatedUser, { where: { id } })
  //   .then((user) => res.status(200).send('User Updated'))
  //   .catch((err) => next(err));

  try {
    const { id } = req.params;
    const newUser = req.body;

    await userModel.update(newUser, {
      where: { id: id },
    });

    const updatedUser = await userModel.findByPk(id);

    res.status(200).json({
      msg: 'Usuario Actualizado',
      updatedUser,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  // const id = req.params.id;
  // userModel
  //   .destroy({ where: { id } })
  //   .then((user) => res.status(200).send('User Destroyed'))
  //   .catch((err) => next(err));
  try {
    const { id } = req.params;
    await userModel.destroy({
      where: { id },
    });
    res.status(200).json({
      msg: 'Usuario eliminado exitosamente',
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  //createUser,
  updateUser,
  deleteUser,
};
