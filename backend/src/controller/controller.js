const Restaurants = require('../database/restaurant.schema');
const Product = require('../database/product.schema');

class RestaurantsController {
    async getRestaurants(req, res) {
        console.log('[Teste 1]')
        const response = await Product.find();
        console.log('[Teste 2]');

        res.json(response);
    

    }
}

module.exports = new RestaurantsController();

/*
module.exports = {
    getRestaurants: async (req, res) => {
        try {
            console.log('[RESTAURANTS ROUTE]');
            const response = await Restaurants.find();

            res.json(response);
        } catch(error) {
            console.log(error);
        }
    },

    getRestaurant: (req, res) => {
        const { id } = req.params;

        

        res.status(200).json({ status: 200, message: id });
    }
};
*/