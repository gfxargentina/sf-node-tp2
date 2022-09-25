const getAllUsers = async (req, res) => {
  res.send('trae todos los usuarios');
};

const createUser = async (req, res) => {
  res.send('crea un usuario');
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
