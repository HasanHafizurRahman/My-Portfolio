import React from 'react';
import './Catering.css';
import Catering1 from '../../img/Catering1.jpeg'
import Catering2 from '../../img/Catering2.jpeg'
import Catering3 from '../../img/Catering3.png'

const Catering = () => {
    return (
        <div>
            <h1 style={{color: 'blueviolet', fontWeight:'bolder', fontSize: '26px', paddingBottom: '10px'}}>Hoom Made Food Catering Service.</h1>
            <div className="image-details">
            <img style={{height: '300px', width:'300px'}} src={Catering1} alt="" />
            <img style={{height: '300px', width:'300px'}} src={Catering2} alt="" />
            <img style={{height: '300px', width:'300px'}} src={Catering3} alt="" />
        </div>
        <a style={{color: 'blue', fontSize: '20px'}} href='https://astounding-souffle-29503d.netlify.app/'>Live Site</a >
<span className='details'>
<ol>
<li>'Home Made Catering' is a single page catering service providing website.</li>
<li>Here home page contains some of Home made foods.</li>
<li>Users can orders from the home page by clicking Order button .</li>

<span style={{color: 'black'}}>TECHNOLOGIES WERE USED :</span>
<li>Reactjs</li> <li>Css</li> <li>Bootstrap</li> <li>React-Router</li> <li>React-Firebase-hooks</li> <li>Netlify
</li>
</ol>
</span>
        </div>
    );
};

export default Catering;