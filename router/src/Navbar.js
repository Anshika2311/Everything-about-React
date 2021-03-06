import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar(){

    return<div>
        
        <ul>
            <Link to='/home'>
                <li>Home</li>
            </Link>
            <Link to="/contact">
                <li>Contact</li>
            </Link>
            <Link to="/services">
                <li>Services</li>
            </Link>        
        </ul>

    </div>
}

export default Navbar