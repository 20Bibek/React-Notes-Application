import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">LOGO</div>
        <ul>
            <li><Link to="/login" className='link'>Login</Link></li>
            <li><Link to="/signup" className='link'>SignUP</Link></li>
        </ul>
    </nav>
    
  )
}

export default Navbar