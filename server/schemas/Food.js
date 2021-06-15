const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FoodSchema = new Schema({
    foodID : {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true
    },
    imageURL: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    avail: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('Food', FoodSchema)