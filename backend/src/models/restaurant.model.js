const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    category: String,
    deliveryEstimate: String,
    rating: Number,
    imagePath: String,
    about: String,
    hours: String,
});

module.exports = mongoose.model('restaurant', RestaurantSchema, 'restaurants');