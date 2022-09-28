const userModel = require('../database/models').User;
const bcrypt = require('bcryptjs');

const generateJWT = require('../helpers/generate-jwt');

//crea un nuevo usuario
const register = async (req, res) => {
  try {
    //busca en la bd si hay un usuario con el mismo email
    let findUser = await userModel.findOne({
      where: { email: req.body.email },
    });
    //si hay un usuario con el mismo email tira un error
    if (findUser) {
      return res.status(400).json({
        ok: false,
        msg: 'Un usuario ya existe con ese email',
      });
    }

    //encriptar contraseña
    const salt = bcrypt.genSaltSync();
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    const user = await userModel.create(req.body);

    //generar JWT
    const token = await generateJWT(user.id, user.nombre, user.role);

    res.status(201).json({
      msg: 'registro exitoso',
      uid: user.id,
      nombre: user.nombre,
      role: user.role,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'El nombre de usuario o contraseña esta mal, porfavor comuniquese con el administrador',
    });
  }
};

const login = async (req, res) => {
  //const { email, password } = req.body;

  try {
    //verificar si existe el usuario
    const user = await userModel.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(400).json({
        msg: 'Usuario o Contaseña incorrectos',
      });
    }

    //verificar password
    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: 'usuario o contraseña incorrectos',
      });
    }

    //generar JWT
    const token = await generateJWT(user.id);

    res.json({
      msg: 'Login exitoso',
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador',
    });
  }
};

module.exports = {
  login,
  register,
};
