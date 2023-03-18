import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './style.css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import "swiper/css/effect-coverflow";



export default () => {
  return (
    <Swiper
    className="SliderLittle"
    modules={[Autoplay, EffectFade, EffectCoverflow]}
    slidesPerView={6}
    loop={true}
    autoplay={{delay:1500}}
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    coverflowEffect={{
        rotate: 50,
        stretch: 10,
        depth: 10,
        modifier: 0.5,
        slideShadows: false,
    }}
    >
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/Iron _Man.jpg' alt='Iron Man'/>
            <div className='text__slider-little'>
                <h1>Iron Man</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Iron_Man' target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/Captain_America.jpg' alt='Captain America'/>
            <div className='text__slider-little'>
                <h1>Captain America</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Captain_America' target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/hulk.jpg' alt='Hulk'/>
            <div className='text__slider-little'>
                <h1>Hulk</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Hulk' target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/Deadpool.jpg' alt='Deadpool'/>
            <div className='text__slider-little'>
                <h1>Deadpool</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Deadpool'target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/Doctor_Strange.jpg' alt='Doctor Strange'/>
            <div className='text__slider-little'>
                <h1>Doctor Strange</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Doctor_Strange'target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/Ghost_Ride.jpg' alt='Ghost Ride'/>
            <div className='text__slider-little'>
                <h1>Ghost Ride</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Ghost_Rider'target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/falkon.jpeg' alt='Falkon'/>
            <div className='text__slider-little'>
                <h1>Falkon</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Falcon_(comics)'target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/Spider-Man.jpg' alt='Spider Man'/>
            <div className='text__slider-little'>
                <h1>Spider Man</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Spider-Man' target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/Thanos.jpeg' alt='Thanos'/>
            <div className='text__slider-little'>
                <h1>Thanos</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Thanos' target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/thor.jpg' alt='Thor'/>
            <div className='text__slider-little'>
                <h1>Thor</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)' target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/Venom.jpg' alt='Venom'/>
            <div className='text__slider-little'>
                <h1>Venom</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Venom_(character)' target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/Vision.jpg' alt='Vision'/>
            <div className='text__slider-little'>
                <h1>Vision</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Vision_(Marvel_Comics)' target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/Wolverine.jpg' alt='Wolverine'/>
            <div className='text__slider-little'>
                <h1>Wolverine</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Wolverine_(character)' target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/Blade.jpg' alt='Blade'/>
            <div className='text__slider-little'>
                <h1>Blade</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Blade_(character)' target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/Black_Panther.jpg' alt='Black Panther'/>
            <div className='text__slider-little'>
                <h1>Black Panther</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Black_Panther_(character)' target="_blank">More information</a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='img__slider-little' src='./Images/loki.jpg' alt='Loki'/>
            <div className='text__slider-little'>
                <h1>Loki</h1>
                <a className='slider__button' href='https://en.wikipedia.org/wiki/Loki_(Marvel_Comics)' target="_blank">More information</a>
            </div>
        </SwiperSlide>

    </Swiper>
  )
}
