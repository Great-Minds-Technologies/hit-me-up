const mongoose = require("mongoose");
const Product = require("./Product");
const User = require("./User");

const reviewSchema = new mongoose.Schema({
    rating: {
        type: float,
        required: true
    },
    review: {
        type: String
    },
    user: {
        type: User,
        unique: true,
        required: true
    },
    product: {
        type: Product,
        required: true
    }
});

module.exports = mongoose.model("Item_Review", reviewSchema);