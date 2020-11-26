const Menu = require('../models/menu.model');

module.exports = {
    saveMany: async (req, res) => {
        const { menus } = req.body;

        try {
            const response = await Menu.insertMany(menus);

            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    },

    getMenus: async (req, res) => {
        try {
            const response = await Menu.find();

            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    },

    getMenu: async (req, res) => {
        const { id } = req.params;

        try {
            const response = await Menu.find({ restaurantId: id });

            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    }
}