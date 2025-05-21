import { Link, NavLink } from 'react-router-dom';
import './css/Navbar.css';
import SmallLogo from '../assets/images/logo_hit_me_up8x.png';
import OutlineButton from './OutlineButton';
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
    },{
        value: '/test',
        label:"Product"
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

            {/* JSX ternery operater to change button to profile image 
            and cart if login information is present  */}
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