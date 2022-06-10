import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './Portfolio.css'
import 'swiper/css'
import Agrobhai from '../../img/Agrobhai1.jpeg'
import Grocery from '../../img/Grocery1.jpeg'
import Catering from '../../img/Catering1.jpeg'
import Bike from '../../img/Bike1.jpeg'

const Portfolio = () => {
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
        <span>Agro Bhai</span> <button className='button-class'>Details</button>
          <img style={{height: '720px', width: '1280px'}} src={Agrobhai} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <span>My Grocery</span> <button className='button-class'>Details</button>
          <img style={{height: '720px', width: '1280px'}} src={Grocery} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <span>Food Catering</span><button className='button-class'>Details</button>
          <img style={{height: '720px', width: '1280px'}} src={Catering} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <span>Bike House</span><button className='button-class'>Details</button>
          <img style={{height: '720px', width: '1280px'}} src={Bike} alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Portfolio;