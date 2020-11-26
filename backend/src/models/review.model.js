const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: String,
    data: String,
    rating: Number,
    comments: String,
    restaurantId: String
});

module.exports = mongoose.model('review', ReviewSchema, 'reviews');