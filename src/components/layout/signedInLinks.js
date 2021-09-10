import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedInLinks = () => {
    return (
        <ul className="right">
            
            <li>
                <NavLink to='/bootcampdetails'>Bootcamp Details</NavLink>
            </li>

            <li>
                <NavLink to='/bootcamplist'>Bootcamp List</NavLink>
            </li>

            <li>
                <NavLink to='/' className='btn btn-floating blue lighten-1'>LG</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;