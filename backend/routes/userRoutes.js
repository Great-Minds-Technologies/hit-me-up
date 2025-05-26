const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt'); 

router.post('/register', async (req, res) => {
   const {email, password ,weapon} = req.body;
   try {
        console.log("Backend data recieved: "+req.body);
        console.time('Securing the dataaaaaaaa');
        let hashedPassword = await bcrypt.hash(password, 13);
        console.log(`Hashed Password: ${hashedPassword}`);
        let hashedWeapon = await bcrypt.hash(weapon,13); //I want to keep logging in below 1s, so a salt of 10 should be fine. Keeps within the minimum :)
        console.timeEnd('Securing the dataaaaaaaa');
        console.log(`Hashed Weapon: ${hashedWeapon}`);
        const user = new User({ email, password: hashedPassword, weapon: hashedWeapon});
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
    const { email, password ,weapon} = req.body;
    console.log(req.body);
    console.log(weapon);
    
    
    
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        console.log(`User found: ${user.email}`);
        
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
        
        if (!await bcrypt.compare(weapon, user.weapon)) {
            return res.status(401).json({ error: 'Incorrect weapon' });
        }
        
        res.status(200).json({ message: 'Login successful', user });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;