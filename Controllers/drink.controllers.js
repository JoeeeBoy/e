const Drink = require("../Models/Drink.model");

module.exports.drinkController = {
  postDrink: async (req, res) => {
    const {
      name,
      price,
      inStock,
      does_it_contain_caffeine,
      volume,
      aboutDrink,
    } = req.body;
    try {
      await Drink.create({
        name,
        price,
        inStock,
        does_it_contain_caffeine,
        volume,
        aboutDrink,
      });
      res.json(`Напиток ${name} добавлен!`);
    } catch (error) {
      console.log(error);
    }
  },

  deleteDrink: async (req, res) => {
    try {
      await Drink.findByIdAndDelete(req.params.id);
      res.json(`напиток с id:${req.params.id} удален!`);
    } catch (error) {
      console.log(error);
    }
  },
  patchDrink: async (req, res) => {
    const {
      name,
      price,
      inStock,
      does_it_contain_caffeine,
      volume,
      aboutDrink,
    } = req.body;
    try {
      await Drink.findByIdAndUpdate(req.params.id, {
        name,
        price,
        inStock,
        presence,
        does_it_contain_caffeine,
        volume,
        aboutDrink,
      });
      res.json(`напиток с id:${req.params.id} изменен!`);
    } catch (error) {
      console.log(error);
    }
  },

  getDrink: async (req, res) => {
    try {
      const info = await Drink.find({}).select("_id name price");
      res.json(info);
    } catch (error) {
      console.log(error);
    }
  },

  getIdDrink: async (req, res) => {
    try {
      res.json(await Drink.findById(req.params.id).select("_id name price"));
    } catch (error) {
      console.log(error);
    }
  },


  getInstock: async (req, res) => {
    try {
      res.json(await Drink.find({inStock: true}).select('_id name price'));
    } catch (e) {
      res.json(e);
    }   
  },
};
