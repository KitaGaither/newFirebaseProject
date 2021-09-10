import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedInLinks = () => {
    return (
        <ul className="right">
            
            <li>
                <NavLink to='/currentbootcamps/:id'>Current Bootcamps</NavLink>
            </li>

            <li>
                <NavLink to='/create'>Create Bootcamp</NavLink>
            </li>

            <li>
                <NavLink to='/' className='btn btn-floating blue lighten-1'>LG</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;