import React from 'react';
import './Header.css'

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
                 <li>Home</li>
                 <li>Services</li>
                 <li>Projects</li>
                 <li>Skills</li>
             </ul>
         </div>
         <button className='button'>
                Contact Me
         </button>
        </div>
      </div>
    );
  };

export default Header;