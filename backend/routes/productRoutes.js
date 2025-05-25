const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
   const { name, description, price, image, rating, vendor } = req.body;
   try {
        console.log(req.body);
        const product = new Product({ name, description, price, image, rating, vendor, type });
        await product.save();
        res.status(201).json({ product });
   } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

module.exports = router;