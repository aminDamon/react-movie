import React from 'react'
import './styles/release.css'
import { lists } from './list'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import '../../node_modules/swiper/swiper-bundle.min.css';


function ReleaseMovie() {
  let release = lists.map((rel , index) => {
    return (
      <SwiperSlide key={index} className='slider'>
        <div className='release'>
          <img src={rel.yCover} />
          <div className='caption'></div>
        </div>
      
      
    </SwiperSlide>
    )
  })
  return (
    <div className='release_movie'>
      <br/>
      <br/>
      <h1 className='h1_body'>New Release Movie</h1>
      <Swiper 
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
    </div>
  )
}

export default ReleaseMovie

