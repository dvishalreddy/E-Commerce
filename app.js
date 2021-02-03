const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const Product = require('./models/product');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/LUXEDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open")
    })
    .catch(err => {
        console.log("Mongo Connection Error")
        console.log(err)
    })

app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'cookie_secret',
    resave: true,
    saveUninitialized: true
}));
app.get('/', async (req, res) =>{
    isLoggedIn = false
    user = null;
    if(req.session.user_id)
    {
        isLoggedIn = true
        _id = req.session.user_id
        const user = await User.findOne({_id: req.session.user_id});
        name = user.fname
        console.log(user)
        return res.render('home', {user})
    }
    res.render('home', {user})
})

app.get('/login',(req, res) => {
    res.render('auth/login')
})

app.post('/login',async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    const validPassword = await bcrypt.compare(password, user.password);
    if(validPassword)
    {
        req.session.user_id = user._id
        res.redirect('/')
    }
    else{
        res.redirect('/login')
    }
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    res.redirect('/')
})

app.get('/signup',(req, res) => {
    isEmailUnique = true
    res.render('auth/signup',{ isEmailUnique })
})

app.post('/signup', async (req, res) => {
    const {fname, lname, email, password} = req.body;
    isEmailUnique = true
    if(await User.findOne({email}))
    {
        isEmailUnique = false
        res.render('auth/signup',{ isEmailUnique })
    }
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        fname,
        lname,
        email,
        password: hash
    })
    await user.save();
    res.redirect('/login')
})

app.get('/products', async (req, res) =>{
    const products = await Product.find({})
    res.render('products/allproducts', { products })
})

app.get('/wallets', async(req, res) =>{
    const products = await Product.find({"category": "wallet"})
    res.render('products/wallets', { products })
})

app.get('/watches', async(req, res) =>{
    const products = await Product.find({"category": "watch"})
    res.render('products/watches', { products })
})

app.get('/bags', async(req, res) =>{
    const products = await Product.find({"category": "bag"})
    res.render('products/bags', { products })
})

app.get('/products/new',(req, res) => {
    res.render('products/new')
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect('/products')
})

app.get('/cart',(req, res) => {
    if(!req.session.user_id)
    {
        return res.redirect('/login')
    }
    res.send("This is your cart!")
})

app.listen(3000, () =>{
    console.log("Listening on port 3000")
})