import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedInLinks = () => {
    return (
        <ul className="right">
            
            <li>
                <NavLink to='/bootcamps/'>Bootcamps</NavLink>
            </li>

            <li>
                <NavLink to='/createbootcamp/'>Create Bootcamp</NavLink>
            </li>

            <li>
                <NavLink to='/' className='btn btn-floating blue lighten-3'>LG</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;