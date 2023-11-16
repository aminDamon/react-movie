import React from 'react'
import './styles/release.css'
import { series } from './list'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import '../../node_modules/swiper/swiper-bundle.min.css';

function ReleaseSeries({ handleLinkClick }) {
  let release = series.map((rel , index) => {
    return (
      <SwiperSlide key={index} className='rel_slider'>
        <div className='release'>
          <img onClick={handleLinkClick} data-movie={rel.name} src={rel.cover} />
          <div className='caption'>
            <h2 onClick={handleLinkClick} data-movie={rel.name}>{rel.name}</h2>
            <div className='rate'>
              <div className='hd'>HD</div>
              <div className='time'>Season {rel.season}</div>
            </div>
          </div>
        </div>
      
      
    </SwiperSlide>
    )
  })
  return (
    <div className='release_movie'>
      <br/>
      <br/>
      <h1 className='h1_body'>New Release Series</h1>
      <Swiper
      className='rel_swiper' 
      modules={[Navigation, Scrollbar, A11y , Autoplay]}
      spaceBetween={30} 
      slidesPerView={4}
      autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }} 
      onSlideChange={() => console.log('slide change')} 
      onSwiper={(swiper) => console.log(swiper)}>
        {release}
    </Swiper>
    <Swiper 
    className='rel_swiper_mobile'
      modules={[Navigation, Scrollbar, A11y , Autoplay]}
      spaceBetween={40} 
      slidesPerView={2}
      autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }} 
      onSlideChange={() => console.log('slide change')} 
      onSwiper={(swiper) => console.log(swiper)}>
        {release}
    </Swiper>
    
    </div>
  )
}

export default ReleaseSeries