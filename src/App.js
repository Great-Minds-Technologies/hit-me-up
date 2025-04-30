import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import SignUp from './pages/SignUp';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Home />} />
            <Route path='/about' element={<Home />} />
          </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
