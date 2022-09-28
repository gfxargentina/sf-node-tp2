const { Router } = require('express');
const router = Router();

const validateJWT = require('../middleware/validate-jwt');
const { isAdminRole, hasARole } = require('../middleware/validate-role');

const {
  getAllUsers,
  getUserById,
  //createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

router.get('/', validateJWT, hasARole('ADMIN', 'USER'), getAllUsers);
router.get('/:id', validateJWT, isAdminRole, getUserById);
//router.post('/', validateJWT, hasARole('ADMIN', 'USER'), createUser);
router.put('/:id', validateJWT, hasARole('ADMIN', 'USER'), updateUser);
router.delete('/:id', validateJWT, isAdminRole, deleteUser);

module.exports = router;
