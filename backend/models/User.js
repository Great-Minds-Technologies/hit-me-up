const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
      weapon: { type: String,
         required: true },
});

module.exports = mongoose.model('Hitman_User', userSchema);