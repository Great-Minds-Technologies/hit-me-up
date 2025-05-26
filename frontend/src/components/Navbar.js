import { Link, NavLink } from 'react-router-dom';
import './css/Navbar.css';
import SmallLogo from '../assets/images/logo_hit_me_up8x.png';
import OutlineButton from './OutlineButton';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import EmptyCart from '../assets/glyphs/EmptyCart.svg';
import FullCart from '../assets/glyphs/FullCart.svg';
import Cart from '../pages/Cart';
import App from '../App';

function Navbar() {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState(null);

    const navHeading = [{
        value: '/',
        label:"HOME"
    },{
        value: '/shop',
        label:"SHOP"
    },{
        value: '/about',
        label:"ABOUT"
    },{
        value: '/product',
        label:"Admin"
    }]

    useEffect (() => {
        const _user = JSON.parse(localStorage.getItem("loggedInUser"));
        const _cart = JSON.parse(localStorage.getItem("userCart"));

        if (_user) setUser(_user);
        if (_cart) setCart(_cart);
    }, []);

    function LogOut () {
        localStorage.removeItem("loggedInUser");
        window.location.reload();
    }

    return (
        <div className="navbar-container">
            <Link className='logo-link' to='/'>
                <img className='logo-image' src={SmallLogo} alt="Logo"/>
            </Link>

            <div className="center-buttons">
                {navHeading.map((_heading) => (
                    <NavLink 
                        to={_heading.value}
                        className="navbar-link"
                        style={({ isActive }) => ({
                            fontWeight: isActive ? '800' : 'normal'
                        })}
                    >
                        {_heading.label}
                    </NavLink>
                ))}
            </div>

            {/* JSX ternery operater to change button to profile image 
            and cart if login information is present  */}
            {user ? 
            <div className='user-nav-buttons'>
                <div id='nav-profile-pic' onClick={LogOut}></div>
                <Link to='/cart'>
                    <img src={cart ? FullCart : EmptyCart} alt='Cart'/>
                </Link>
            </div>
            :
            <Link to='/log-in' id='entry-button-link'>
                <Button id='entry-button'>
                    LOG IN/SIGN UP
                </Button>
            </Link>
            }
        </div>
    )
}

export default Navbar;