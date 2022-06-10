import React, { useContext } from 'react';
import './Services.css';
import Glass from '../../img/glasses.png'
import heart from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card';

const Services = () => {
    // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
    return (
        <div className="services" id="services">

            {/* left side */}
            <div className="awesome">
            <span>Services I</span>
        <span>Provide</span>
        <spane>
          As a web developer , I provide developement services.
          <br />
          I help clients to build websites for their services.
        </spane>
        <button className='button s-button'>
                        Hire Me
                    </button>
                    <div className="blur s-blur" style={{background: "rgba(255, 166, 0, 0.171)"}}></div>
            </div>
            {/* right side */}
            <div className='cards'>
            <div style={{left: '24rem'}}>
            <Card
            emoji={heart}
            heading={"Design"}
            detail={"Html, Css, Bootstrap, Tailwind Css"}
          />
            </div>
            <div style={{ top: '12rem', left: '-4rem' }}>
              <Card
              emoji={Glass}
              heading={"Front End"}
              detail={"ReactJs,Daisy UI,React-bootstrap, React-Router"}
              />
            </div>
            <div style={{ top: '22rem', left: '11rem' }}>
              <Card
              emoji={Humble}
              heading={"Back End"}
              detail={"NodeJs, ExpressJs, MongoDB"}
              />
            </div>
            <div className="blur s-blur2" style={{ background: 'rgba(255, 166, 0, 0.221)'}}></div>
            </div>
        </div>
    );
};

export default Services;