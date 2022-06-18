const mongoose = require("mongoose");


const drinkSchema = mongoose.Schema({
    name: String,
    price: Number,
    inStock: Boolean,
    does_it_contain_caffeine: Boolean,
    volume: String,
    aboutDrink: String,

})

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink