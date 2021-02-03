const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['wallet', 'bag', 'watch']
    },
    description: {
        type: String,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;