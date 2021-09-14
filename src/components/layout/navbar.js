import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './signedInLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper deep purple darken-4 darken-3">
            <div className="container">
                {/* <Link to='/' className="brand-logo">MERN Academy</Link> */}
                <SignedInLinks />
            </div>
        </nav>
    )
}

export default Navbar;