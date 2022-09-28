const isAdminRole = (req, res, next) => {
  if (!req.user) {
    return res.status(500).json({
      msg: 'Error: Debe validar el token primero',
    });
  }

  const { role, nombre, apellido } = req.user;
  if (role !== 'ADMIN') {
    return res.status(401).json({
      msg: `El usuario ${nombre} ${apellido} no esta autorizado a realizar esta accion`,
    });
  }

  next();
};

const hasARole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(500).json({
        msg: 'Error: debe validar el token primero',
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(401).json({
        msg: `No esta autorizado a realizar esta accion, comuniquese con el admin para que le active los permisos`,
      });
    }

    next();
  };
};

module.exports = {
  isAdminRole,
  hasARole,
};
