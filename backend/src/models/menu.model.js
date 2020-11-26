const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    id: String,
    imagePath: String,
    name: String,
    description: String,
    price: Number,
    restaurantId: String
});

module.exports = mongoose.model('menu', MenuSchema, 'menus')