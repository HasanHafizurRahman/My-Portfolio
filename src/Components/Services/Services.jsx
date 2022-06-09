import React from 'react';
import './Services.css';

const Services = () => {
    // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
    return (
        <div className="services" id="services">

            {/* left side */}
            <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
            </div>
            
        </div>
    );
};

export default Services;