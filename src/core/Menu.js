import React from 'react'
import {Link} from 'react-router-dom'

const Menu = (history)=> (
    <div>
        <ul  className="nav nav-tabs bg-dark">
        <li className="nav-item">
            <Link className='nav-link'  to="/">
                Home
            </Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link'  to="/dashboard">
                Dashboard
            </Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link'  to="/category">
            Category
            </Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link'   to="/signin">
            Sign In
            </Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link'   to="/signup">
            Sign Up
            </Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link'   to="/logout">
            logout
            </Link>
        </li>
        
        </ul>
    </div>
)


export default Menu;



