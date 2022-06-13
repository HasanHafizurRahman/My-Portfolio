import React, { useContext } from 'react';
import './Services.css';
import tailwind from '../../img/tailwind.png'
import react from '../../img/react.png'
import mongodb from '../../img/mongodb.png'
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
            initial={{left: '24%'}}
            whileInView={{left: '14rem'}}
            transition={transition}
            style={{left: '24rem'}}>
            <Card
            emoji={tailwind}
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
              emoji={react}
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
              emoji={mongodb}
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