const { Router } = require('express');
const {
  getAllCars,
  createCar,
  updateCar,
  deleteCar,
} = require('../controllers/car.controller');
const router = Router();

router.get('/', getAllCars);
router.post('/', createCar);
router.put('/', updateCar);
router.delete('/', deleteCar);

module.exports = router;
