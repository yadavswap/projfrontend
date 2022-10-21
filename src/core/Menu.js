import React from 'react'
import {Link} from 'react-router-dom'
import {signout, isAutheticated } from '../auth/helper';

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
        {isAutheticated() && (
            <li className="nav-item">
            <Link className='nav-link'    onClick={()=>{
                signout(()=>{
                    history.push("")
                })
            }}>
            Sign Out
            </Link>
            {/* <span className='nav-link text-warning'
            onClick={()=>{
                signout(()=>{
                    history.push("")
                })
            }}
            >
            Sign out 
            </span> */}
            </li>
        )}
            
        
        </ul>
    </div>
)


export default Menu;



