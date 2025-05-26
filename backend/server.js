const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');

//load enviornment variables from .env file
dotenv.config();

//Initialise express app
const app = express();
const PORT = process.env.PORT || 5000;
console.log(process.env.MONGODB_URI);

// Use CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
//Middleware to parse JSON bodies
<<<<<<< Updated upstream
app.use(express.json({limit:'1mb'}));
=======
app.use(express.json());

// Use Express session
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        maxAge: parseInt(process.env.MAX_COOKIE_AGE),
        sameSite: 'lax',
        secure: false
    }
}))

// app.use((req,res,next) => {
//     console.log(req.session);
// });
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

//MONGODB connection 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//User Routes
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( () => console.log('MongoDB connected'))
.catch(err => console.error('Error',err));


//Start the server
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes)

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes)

const requireAuth = (req, res, next) => {
    const {user} = req.session;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}