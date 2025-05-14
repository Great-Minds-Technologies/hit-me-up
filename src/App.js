import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Register from './pages/Register';
import BlobBackground from '../src/components/BlobBackground';

function App() {

  return (
     <div className="App">
    <Router>
     
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/log-in' element={<LogIn/>} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/test' element={<Product/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
        <Footer/>
  
    </Router>

  <BlobBackground/>

        </div>

    
    
  );
}

export default App;
