import React from 'react'
import './styles/recent-update.css'
import { series } from './list'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import '../../node_modules/swiper/swiper-bundle.min.css';
function RecentUpdate({ handleLinkClick }) {
  let sliderUpdate = series.map((slide , index) => {
    return (
      <SwiperSlide key={index} >
        <div className='container' onClick={handleLinkClick} data-movie={slide.name}>
            <img src={slide.cover} onClick={handleLinkClick} data-movie={slide.name} />
            <div className='info'>
            <h2 onClick={handleLinkClick} data-movie={slide.name}>{slide.name}</h2>
            <span>Series / S{slide.season}</span>
            <div className='genre'>{slide.genre[0]}</div>
            </div>
        </div>
        
      </SwiperSlide>
    );
  });

  return (
    <div className='recent_update'>
      <h1 className='h1_body'>Recently update</h1>
      <Swiper
      className='recent_slide' 
        pagination={{ clickable: true }}
        modules={[Navigation]}
        navigation={true}
        spaceBetween={0} 
        slidesPerView={4}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        onSlideChange={() => console.log('slide change')} 
        onSwiper={(swiper) => console.log(swiper)}
      >
        {sliderUpdate}
      </Swiper>
      <Swiper 
      className='recent_slide_mobile'
        pagination={{ clickable: true }}
        spaceBetween={0} 
        slidesPerView={2}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        onSlideChange={() => console.log('slide change')} 
        onSwiper={(swiper) => console.log(swiper)}
      >
        {sliderUpdate}
      </Swiper>
    </div>
  )
}

export default RecentUpdate

