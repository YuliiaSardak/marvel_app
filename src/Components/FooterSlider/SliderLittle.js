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
        {img: './Images/Iron _Man.jpg', title: 'Iron Man', link: 'https://en.wikipedia.org/wiki/Iron_Man'},
        {img: './Images/Captain_America.jpg', title: 'Captain America', link: 'https://en.wikipedia.org/wiki/Captain_America'},
        {img: './Images/hulk.jpg', title: 'Hulk', link: 'https://en.wikipedia.org/wiki/Hulk'},
        {img: './Images/Deadpool.jpg', title: 'Deadpool', link: 'https://en.wikipedia.org/wiki/Deadpool'},
        {img: './Images/Doctor_Strange.jpg', title: 'Doctor Strange', link: 'https://en.wikipedia.org/wiki/Doctor_Strange'},
        {img: './Images/Ghost_Ride.jpg', title: 'Ghost Ride', link: 'https://en.wikipedia.org/wiki/Ghost_Rider'},
        {img: './Images/falkon.jpeg', title: 'Falkon', link: 'https://en.wikipedia.org/wiki/Falcon_(comics)'},
        {img: './Images/Spider-Man.jpg', title: 'Spider Man', link: 'https://en.wikipedia.org/wiki/Spider-Man'},
        {img: './Images/Thanos.jpeg', title: 'Thanos', link: 'https://en.wikipedia.org/wiki/Thanos'},
        {img: './Images/thor.jpg', title: 'Thor', link: 'https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)'},
        {img: './Images/Venom.jpg', title: 'Venom', link: 'https://en.wikipedia.org/wiki/Venom_(character)'},
        {img: './Images/Vision.jpg', title: 'Vision', link: 'https://en.wikipedia.org/wiki/Vision_(Marvel_Comics)'},
        {img: './Images/Wolverine.jpg', title: 'Wolverine', link: 'https://en.wikipedia.org/wiki/Wolverine_(character)'},
        {img: './Images/Blade.jpg', title: 'Blade', link: 'https://en.wikipedia.org/wiki/Blade_(character)'},
        {img: './Images/Black_Panther.jpg', title: 'Black Panther', link: 'https://en.wikipedia.org/wiki/Black_Panther_(character)'},
        {img: './Images/loki.jpg', title: 'Loki', link: 'https://en.wikipedia.org/wiki/Loki_(Marvel_Comics)'}
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
        <SwiperSlide>
           <Slide heroImg={slides[0].img} titleHero={slides[0].title} heroHref={slides[0].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[1].img} titleHero={slides[1].title} heroHref={slides[1].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[2].img} titleHero={slides[2].title} heroHref={slides[2].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[3].img} titleHero={slides[3].title} heroHref={slides[3].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[4].img} titleHero={slides[4].title} heroHref={slides[4].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[5].img} titleHero={slides[5].title} heroHref={slides[5].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[6].img} titleHero={slides[6].title} heroHref={slides[6].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[7].img} titleHero={slides[7].title} heroHref={slides[7].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[8].img} titleHero={slides[8].title} heroHref={slides[8].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[9].img} titleHero={slides[9].title} heroHref={slides[9].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[10].img} titleHero={slides[10].title} heroHref={slides[10].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[11].img} titleHero={slides[11].title} heroHref={slides[11].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[12].img} titleHero={slides[12].title} heroHref={slides[12].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[13].img} titleHero={slides[13].title} heroHref={slides[13].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[14].img} titleHero={slides[14].title} heroHref={slides[14].link}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide heroImg={slides[15].img} titleHero={slides[15].title} heroHref={slides[15].link}></Slide>
        </SwiperSlide>
    </Swiper>
  )
}
