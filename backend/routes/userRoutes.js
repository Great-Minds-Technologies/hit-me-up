const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
   const { name, email, password } = req.body;
   try {
        console.log(req.body);
        const user = new User({ name, email, password});
        await user.save();
        res.status(201).json({user});
   } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const users=await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
        res.status(200).json({ message: 'Login successful', user });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;