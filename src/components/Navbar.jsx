import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
          
          <img src="logo2.png" alt="" style={{}}/>
        </div>
        <ul>
          <li><Link to="/about" className='link'>About</Link></li>
          <li><Link to="/contact" className='link'>Contact</Link></li>
            <li><Link to="/login" className='link'>Login</Link></li>
            <li><Link to="/signup" className='link'>Sign Up</Link></li>
        </ul>
    </nav>
    
  )
}

export default Navbar
