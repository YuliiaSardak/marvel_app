import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../style.css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import "swiper/css/effect-coverflow";
import Slide from './Slide';

export default () => {
  const slides = [
      {id:1, img: './Images/Iron _Man.jpg', title: 'Iron Man', link: 'https://en.wikipedia.org/wiki/Iron_Man'},
      {id:2,img: './Images/Captain_America.jpg', title: 'Captain America', link: 'https://en.wikipedia.org/wiki/Captain_America'},
      {id:3,img: './Images/hulk.jpg', title: 'Hulk', link: 'https://en.wikipedia.org/wiki/Hulk'},
      {id:4,img: './Images/Deadpool.jpg', title: 'Deadpool', link: 'https://en.wikipedia.org/wiki/Deadpool'},
      {id:5,img: './Images/Doctor_Strange.jpg', title: 'Doctor Strange', link: 'https://en.wikipedia.org/wiki/Doctor_Strange'},
      {id:6,img: './Images/Ghost_Ride.jpg', title: 'Ghost Ride', link: 'https://en.wikipedia.org/wiki/Ghost_Rider'},
      {id:7,img: './Images/falkon.jpeg', title: 'Falkon', link: 'https://en.wikipedia.org/wiki/Falcon_(comics)'},
      {id:8,img: './Images/Spider-Man.jpg', title: 'Spider Man', link: 'https://en.wikipedia.org/wiki/Spider-Man'},
      {id:9,img: './Images/Thanos.jpeg', title: 'Thanos', link: 'https://en.wikipedia.org/wiki/Thanos'},
      {id:10,img: './Images/thor.jpg', title: 'Thor', link: 'https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)'},
      {id:11,img: './Images/Venom.jpg', title: 'Venom', link: 'https://en.wikipedia.org/wiki/Venom_(character)'},
      {id:12,img: './Images/Vision.jpg', title: 'Vision', link: 'https://en.wikipedia.org/wiki/Vision_(Marvel_Comics)'},
      {id:13,img: './Images/Wolverine.jpg', title: 'Wolverine', link: 'https://en.wikipedia.org/wiki/Wolverine_(character)'},
      {id:14,img: './Images/Blade.jpg', title: 'Blade', link: 'https://en.wikipedia.org/wiki/Blade_(character)'},
      {id:15,img: './Images/Black_Panther.jpg', title: 'Black Panther', link: 'https://en.wikipedia.org/wiki/Black_Panther_(character)'},
      {id:16,img: './Images/loki.jpg', title: 'Loki', link: 'https://en.wikipedia.org/wiki/Loki_(Marvel_Comics)'}
  ]
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
  breakpoints={{
    310: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 2
    },
    760: {
      slidesPerView: 3
    },
    1000: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView: 6
    },
  }}
  >
      {slides.map(slide =>
        <SwiperSlide><Slide key={slide.id} heroImg={slide.img} titleHero={slide.title} heroHref={slide.link}></Slide></SwiperSlide>)}
  </Swiper>
  )
}