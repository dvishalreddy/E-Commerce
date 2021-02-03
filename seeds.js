const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/LUXEDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })
// const p = new Product({
//     name: 'Leather BiFold Wallet - Black',
//         price: 49.99,
//         image: 'https://cdn.shopify.com/s/files/1/1325/8059/products/blackwithblacklogo_large.jpg?v=1597415635',
//         category: 'wallet',
//         description: "Made from premium cow leather and vegetable tanned to achieve a smooth and premium feel. This is part of our Lux Collection which features products made from the best materials and with the finest craftsmanship."
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    {
        name: 'Leather BiFold Wallet - Black',
        price: 49.99,
        image: 'https://cdn.shopify.com/s/files/1/1325/8059/products/blackwithblacklogo_large.jpg?v=1597415635',
        category: 'wallet',
        description: "Made from premium cow leather and vegetable tanned to achieve a smooth and premium feel. This is part of our Lux Collection which features products made from the best materials and with the finest craftsmanship."
    },
    {
        name: 'Leather BiFold Wallet - Black & Gold',
        price: 59.99,
        image: 'https://cdn.shopify.com/s/files/1/1325/8059/products/DSC06854-Edit_large.jpg?v=1566919185',
        category: 'wallet',
        description: "Made from premium cow leather and vegetable tanned to achieve a smooth and premium feel. This is part of our Lux Collection which features products made from the best materials and with the finest craftsmanship."
    },
    {
        name: 'Core - Black & Black Leather',
        price: 49.99,
        image: 'https://cdn.shopify.com/s/files/1/1325/8059/products/black_-_black_leather_1x1_large.jpg?v=1556137323',
        category: 'watch',
        description: "This is our black on black leather. The stainless steel case has a brushed matt black finish with a subtle reflective dial. The hands and numbers are in a shiny gun metal finish."
    },
    {
        name: 'Core - Silver & Black Leather',
        price: 49.99,
        image: 'https://cdn.shopify.com/s/files/1/1325/8059/products/silver_-_black_strap_1x1_large.jpg?v=1556137356',
        category: 'watch',
        description: "This is our silver on black leather. The stainless steel case has a silver chrome finish. The hands and numbers have a silver reflective finish."
    },
    {
        name: 'Leather Backpack - Black',
        price: 129.99,
        image: "https://cdn.shopify.com/s/files/1/1325/8059/products/black_backpack_front_large.jpg?v=1564701371",
        category: 'bag',
        description: "Designed to be minimal and understated, we wanted to make a backpack that could be versatile and used every day. Features a laptop pocket designed for slim laptops up to 15-inches like the MacBook Pro."
    },
    {
        name: 'Leather Weekender - Brown',
        price: 199.99,
        image: 'https://cdn.shopify.com/s/files/1/1325/8059/products/A8E7427F-85C8-4236-860E-DD001277780C_copy_large.jpg?v=1552862414',
        category: 'bag',
        description: "Designed to be minimal and understated, we've made a bag perfect for everyday use. It has an outer zip pocket, a grab handle, three inside pockets, and a leather shoulder strap."
    },
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })