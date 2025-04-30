import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const navHeading = [{
        value: '/',
        label:"Home"
    },{
        value: '/shop',
        label:"Shop"
    },{
        value: '/about',
        label:"About"
    }]

    return (
        <div className="navbar-container">
            <div className="lower-nav">
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
        </div>
    )
}

export default Navbar;