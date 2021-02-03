const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true,
        //min: 0
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;