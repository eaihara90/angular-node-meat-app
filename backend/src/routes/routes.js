const express = require('express');
const RestaurantsController = require('../controller/controller');

const router = express.Router();

router.get('/restaurants', RestaurantsController.getRestaurants);
// router.get('/restaurants/:id', RestaurantsController.getRestaurant);
// router.get('/restaurants/:id/reviews')
// router.get('/restaurants/:id/menu')

module.exports = router;