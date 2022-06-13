import React, { useContext } from 'react';
import './Services.css';
import Glass from '../../img/glasses.png'
import heart from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import { motion } from "framer-motion";

const Services = () => {
    // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // transition
  const transition = {duration: 5, type: 'spring'}
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
            <motion.div
            initial={{left: '20%'}}
            whileInView={{left: '18rem'}}
            transition={transition}
            style={{left: '24rem'}}>
            <Card
            emoji="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
            heading={"Design"}
            detail={"Html, Css, Bootstrap, Tailwind Css"}
          />
            </motion.div>
            <motion.div
            initial={{left: '28%'}}
            whileInView={{left: '10rem'}}
            transition={transition}
             style={{ top: '12rem', left: '-4rem' }}>
              <Card
              emoji="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              heading={"Front End"}
              detail={"ReactJs,Daisy UI,React-bootstrap, React-Router"}
              />
            </motion.div>
            <motion.div
            initial={{left: '24%'}}
            whileInView={{left: '24rem'}}
            transition={transition}
             style={{ top: '22rem', left: '11rem' }}>
              <Card
              emoji="https://static.cdnlogo.com/logos/m/30/mongodb-icon.svg"
              heading={"Back End"}
              detail={"NodeJs, ExpressJs, MongoDB"}
              />
            </motion.div>
            <div className="blur s-blur2" style={{ background: 'rgba(255, 166, 0, 0.221)'}}></div>
            </div>
        </div>
    );
};

export default Services;