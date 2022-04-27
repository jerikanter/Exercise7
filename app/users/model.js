const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be filled"],
    },
    age: {
        type: Number,
        required: [true, "Age must be filled"],
    },
    status: {
        type: String,
        enum: ["fine", "not okay"],
        default: "not okay",
    },
});

const users = mongoose.model('users', userSchema);

module.exports = users;