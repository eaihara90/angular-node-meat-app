const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menu.controller');
const RestaurantController = require('../controllers/restaurant.controller');
const ReviewController = require('../controllers/review.controller');


router.get('/restaurants', RestaurantController.getRestaurants);
router.get('/restaurants/:id', RestaurantController.getRestaurant);
router.post('/restaurants', RestaurantController.saveMany);

router.get('/menus', MenuController.getMenus);
router.get('/restaurants/:id/menu', MenuController.getMenu);
router.post('/menus', MenuController.saveMany);

router.get('/reviews', ReviewController.getReviews);
router.get('/restaurants/:id/reviews', ReviewController.getReview);
router.post('/reviews', ReviewController.saveMany);


module.exports = router;