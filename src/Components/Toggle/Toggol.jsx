import React from 'react';
import './Toggle.css'
import { FaSun, FaMoon } from 'react-icons/fa';

const Toggol = () => {
    
    return (
        <div className="toggle">
        <FaSun />
        <FaMoon />
        {/*                              toggle.css mein left ki property aik assign hy ussy delete
                                            krna hy pehly */}
        <div
          className="t-button"
          
        ></div>
      </div>
    );
};

export default Toggol;