const jwt = require('jsonwebtoken');
const userModel = require('../database/models').User;

const validateJWT = async (req, res, next) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la peticion',
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRET_KEY);

    const user = await userModel.findOne({ where: { id: uid } });
    if (!user) {
      return res.status(401).json({
        msg: 'El usuario no existe',
      });
    }

    //guarda el usuario en la request
    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Token no valido',
    });
  }
};

module.exports = validateJWT;
