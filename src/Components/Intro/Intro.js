import React from 'react';
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import Shanto from '../../img/shanto3.png'
import Thumbsup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Resume from './Resume.pdf'
import { motion } from "framer-motion";

const Intro = () => {

    const transition = {duration: 2, type: 'spring'}
    return (
        <div className='Intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hello! I am Hasan</span>
                    <span>Hafizur Rahman</span>
                    <span>I am a web developer . I like to design beautiful frontend application as well as developing the backend with better quality work.</span>
                </div>
                <a href={Resume} download>
                    <button className='button i-button'>
                        Download Resume
                    </button>
                </a>
                <div className='i-icons'>
                    <a href='https://github.com/HasanHafizurRahman'>
                        <img src={Github} alt='' />
                    </a>
                    <a href='https://www.linkedin.com/in/hasan-hafizur-rahman-1b499a20a'>
                        <img src={Linkedin} alt='' />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img style={{ height: '340px', width: '240px', marginLeft: '-40px', marginTop: '-30px' }} src={Shanto} alt="" />
                <motion.img
                initial={{left: '-4%'}}
                whileInView={{left: '-30%'}}
                transition={transition}

                style={{height: '255px', width: '234px'}} src="http://eduhump.com/syllabus_pics/mern2.png" alt="" />
            <motion.div
            initial={{top: '-4%', left: '74%'}}
            whileInView={{left: '68%'}}
            transition={transition}
            style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </motion.div>
            <motion.div
            initial={{top: '19rem', left: '9rem'}}
            whileInView={{left: '0rem'}}
            transition={transition}
            style={{top: '22rem', left: '0rem'}}>
                <FloatingDiv image={Thumbsup} txt1='Enthusiast' txt2='Coder' />
            </motion.div>
            {/* blur div  */}
            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            <div className='blur' style={{
                background: "#C1F5FF",
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
                }}></div>
            </div>
        </div>
    );
};

export default Intro;