import Portfolio from "../Portfolio/Portfolio";
import React from 'react';
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Intro from "../Intro/Intro";

const Home = () => {
    return (
        <div>
    <Intro />
      
      <Portfolio />
      <Services />
      <Contact />
        </div>
    );
};

export default Home;
