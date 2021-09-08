import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './signedInLinks';


const Navbar = () => {
    return (
        <nav className="nav-wrapper purple darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MERN-Stack Academy</Link>
                <SignedInLinks />
            </div>
        </nav>
    )
}

export default Navbar;