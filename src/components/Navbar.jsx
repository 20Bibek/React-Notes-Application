import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div className="logo">LOGO</div>
        <ul>
            <li><Link to="/login" className='link'>Login</Link></li>
            <li><Link to="/signup" className='link'>SignUP</Link></li>
        </ul>
    </nav>
    
  )
}

export default Navbar