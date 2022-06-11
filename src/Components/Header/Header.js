import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="n-wrapper" id="Navbar">
        {/* left */}
        <div className="n-left">
          <div className="n-name">HASAN</div>
          <span>toggle</span>
        </div>
        {/* right */}
        <div className="n-right">
         <div className='n-list'>
             <ul>
             <Link to='/'><li>Home</li></Link>
                 <li>About</li>
             <Link to='/blog'><li>Blogs</li></Link>
                 <li>Services</li>
                 <li>Projects</li>
                 <li>Skills</li>
             </ul>
         </div>
         <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
        </div>
      </div>
    );
  };

export default Header;