import React from 'react';
import './Agrobhai.css'
import AgroBhai1 from '../../img/Agrobhai1.jpeg'
import Agrobhai2 from '../../img/Agrobhai2.jpeg'
import Agrobhai3 from '../../img/Agrobhai3.jpeg'
import { Link } from 'react-router-dom';

const Agrobhai = () => {
    return (
        <div>
            <h1 style={{color: 'blueviolet', fontWeight:'bolder', fontSize: '26px', paddingBottom: '10px'}}>Agro Bhai.</h1>
            <div className="image-details">
            <img style={{height: '300px', width:'300px'}} src={AgroBhai1} alt="" />
            <img style={{height: '300px', width:'300px'}} src={Agrobhai2} alt="" />
            <img style={{height: '300px', width:'300px'}} src={Agrobhai3} alt="" />
        </div>
        <a style={{color: 'blue', fontSize: '20px'}} href='https://agro-bhai.web.app'>Live Site</a >
<span className='details'>
<ol>
<li>'Agro Bhai' is a single page full stack agro tools manufacturing website.</li>
<li>In the home component , User can see few nav items except fews protected navs.</li>
<li>If
user has logged in then he/she will be able see and use those protected nav items .</li>
<li>Logged in user has access to purchase , order and use the dashboard</li> 
<span style={{color: 'black'}}>TECHNOLOGIES WERE USED :</span>
<li>Reactjs</li> <li>Tailwind Css</li> <li>Daisy UI</li> <li>React-Router</li> <li>React-Firebase-hooks</li> <li>ExpressJs,
</li> <li>MongoDB</li> <li>Google Map</li>
</ol>
</span>
        </div>
    );
};

export default Agrobhai;