const Restaurant = require('../models/restaurant.model');

module.exports = {
    getRestaurants: async (req, res) => {
        try {
            const response = await Restaurant.find();

            res.json(response);

        } catch(error) {
            console.log(error);
        }
    },

    getRestaurant: async (req, res) => {
        const { id } = req.params;

        try {
            const response = await Restaurant.findOne({ id: id });
            
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    },

    saveMany: async (req, res) => {
        const { restaurants } = req.body;

        try {
            const response = await Restaurant.insertMany(restaurants);

            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }
};