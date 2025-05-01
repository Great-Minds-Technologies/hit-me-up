import { Link, NavLink } from 'react-router-dom';
import './css/Navbar.css';
import SmallLogo from '../assets/images/logo_hit_me_up8x.png';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Navbar() {
    const [user, setUser] = useState(null);

    const navHeading = [{
        value: '/',
        label:"HOME"
    },{
        value: '/shop',
        label:"SHOP"
    },{
        value: '/about',
        label:"ABOUT"
    }]

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
            {user ? 
            <div>
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