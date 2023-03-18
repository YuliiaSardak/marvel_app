import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './style.css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';



export default () => {
  return (
    <Swiper
    className="SliderMain"
    modules={[Navigation, Pagination, Autoplay, EffectFade]}
    slidesPerView={5}
    loop={true}
    navigation
    effect="fade"
    autoplay={{delay:2000}}
    pagination={{clickable: true}}
    >
        <SwiperSlide>
            <img className='img' src='./Images/bg_header.jpg' alt='marvel team'/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img' src='./Images/k2.jpg' alt='marvel team'/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img' src='./Images/k3.jpg' alt='marvel team'/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img' src='./Images/k4.jpg' alt='marvel team'/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img' src='./Images/k5.jpg' alt='marvel team'/>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img' src='./Images/k6.jpg' alt='marvel team'/>
        </SwiperSlide>
    </Swiper>
  )
}
