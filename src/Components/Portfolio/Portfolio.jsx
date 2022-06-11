import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './Portfolio.css'
import 'swiper/css'
import Agrobhai from '../../img/Agrobhai1.jpeg'
import Grocery from '../../img/Grocery1.jpeg'
import Catering from '../../img/Catering1.jpeg'
import Bike from '../../img/Bike1.jpeg'
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const navigate = useNavigate()
  const Agro = () =>{
    navigate('/agrobhai')
  }
  const grocery = () =>{
    navigate('/grocery')
  }

  const food = () =>{
    navigate('/catering')
  }
    return (
        <div className='portfolio'>

            {/* heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>


            {/* slider */}
            <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <h1 className='project-title'>Agro Bhai</h1><button onClick={Agro} className='button-class'>Details</button>
          <img style={{height: '450px', width: '480px'}} src={Agrobhai} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <h1 className='project-title'>My Grocery</h1><button onClick={grocery} className='button-class'>Details</button>
          <img style={{height: '450px', width: '480px'}} src={Grocery} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <h1 className='project-title'>Catering</h1><button onClick={food} className='button-class'>Details</button>
          <img style={{height: '450px', width: '480px'}} src={Catering} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <h1 className='project-title'>Bike House</h1><button className='button-class'>Details</button>
          <img style={{height: '450px', width: '480px'}} src={Bike} alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Portfolio;