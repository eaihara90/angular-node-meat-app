const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: String,
    category: String,
    deliveryEstimate: String,
    rating: Number,
    imagePath: String,
    about: String,
    hours: String,
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);