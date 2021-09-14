import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const SignedInLinks = () => {
    return (
        <React.Fragment>
        <ul className="right">
        
            <li>
                <NavLink to='/bootcamp/'>Bootcamp List</NavLink>
            </li>

            <li>
                <NavLink to='/createbootcamp/'>Create Bootcamp</NavLink>
            </li>

            <li>
                <NavLink to='/' className='btn btn-floating blue lighten-3'>LG</NavLink>
            </li>
        </ul>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      </React.Fragment>
    )
}

export default SignedInLinks;