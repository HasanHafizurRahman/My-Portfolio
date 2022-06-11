import './Footer.css'
import React from 'react';
import { AiOutlineInstagram, AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import Wave from '../../img/wave.png'

const Footer = () => {
    return (
        <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>hasanhafiz922@gmail.com</span>
        <div className="f-icons">
          <AiOutlineInstagram color="white" size={"3rem"} />
          <AiFillFacebook color="white" size={"3rem"} />
          <AiFillGithub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
    );
};

export default Footer;