import React from 'react';
import './Grocery.css'
import Grocery1 from '../../img/Grocery1.jpeg'
import Grocery2 from '../../img/Grocery2.jpeg'
import Grocery3 from '../../img/Grocery3.jpeg'

const Grocery = () => {
    return (
        <div>
            <h1 style={{color: 'blueviolet', fontWeight:'bolder', fontSize: '26px', paddingBottom: '10px'}}>My Grocery</h1>
        <div className="image-details">
        <img style={{height: '300px', width:'300px'}} src={Grocery1} alt="" />
        <img style={{height: '300px', width:'300px'}} src={Grocery2} alt="" />
        <img style={{height: '300px', width:'300px'}} src={Grocery3} alt="" />
    </div>
    
<span className='details'>
<a style={{color: 'blue', fontSize: '20px'}} href='https://sparkly-gecko-c2362b.netlify.app'>Live Site</a >
<ol>
<li>My Grocery' is a single page full stack Grocery management website.</li>
<li>Here home page contains with limited inventory items</li>
<li>If any user wants to see any update or create any update ,he/she has to login/signup</li>
<li>After signing in , user will be able to purchase grocery items or manage his/her
orders</li> 
<span style={{color: 'black'}}>TECHNOLOGIES WERE USED :</span>
<li>Reactjs</li> <li>Bootstrap</li> <li>React-Bootstrap</li> <li>React-Router</li> <li>React-Firebase-hooks</li> <li>ExpressJs,
</li> <li>MongoDB</li> <li>Google Map</li>
</ol>
</span>
    </div>
    );
};

export default Grocery;