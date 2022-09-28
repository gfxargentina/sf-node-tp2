const { Router } = require('express');
const {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} = require('../controllers/car.controller');

const router = Router();

const validateJWT = require('../middleware/validate-jwt');
const { isAdminRole, hasARole } = require('../middleware/validate-role');
const errorHandler = require('../middleware/errorHandler');

router.get('/', validateJWT, hasARole('ADMIN', 'USER'), getAllCars);
router.get('/:id', validateJWT, hasARole('ADMIN', 'USER'), getCarById);
router.post('/', validateJWT, hasARole('ADMIN', 'USER'), createCar);
router.put('/:id', validateJWT, hasARole('ADMIN', 'USER'), updateCar);
router.delete('/:id', validateJWT, hasARole('ADMIN', 'USER'), deleteCar);
router.use(errorHandler.notFound);

module.exports = router;
