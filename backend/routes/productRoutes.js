const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

router.post('/register', async (req, res) => {
   const { productName, description, price, image, rating, vendor, type } = req.body;
   try {
    console.log(req.body);
       const product = new Product({ productName, description, price, image, rating, vendor, type });
       console.log("Product created");
       
       await product.save();
       console.log("Product saved");
       
       res.status(201).json({ product });
       console.log(req.body);
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
// Deleting a Product
// router.delete ('/:id', getProduct, async (req, res) => {
//     try {
//         await res.product.deleteOne();
//         res.json({ message: 'Deleted Product' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }


// });

module.exports = router;