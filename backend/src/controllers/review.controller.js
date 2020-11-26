const Review = require('../models/review.model');

module.exports = {
    saveMany: async (req, res) => {
        const { reviews } = req.body;

        try {
            const response = await Review.insertMany(reviews);

            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    },

    getReview: async (req, res) => {
        const { id } = req.params;

        try {
            const response = await Review.find({ restaurantId: id });

            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    },

    getReviews: async (req, res) => {
        try {
            const response = await Review.find();

            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }
}