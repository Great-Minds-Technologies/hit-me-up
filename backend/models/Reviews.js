const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hitman_User",
        unique: true,
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    }
});

module.exports = mongoose.model("Item_Review", reviewSchema);