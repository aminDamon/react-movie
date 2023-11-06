// import React from 'react'
// import './styles/watch-list.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import '../../node_modules/swiper/swiper-bundle.min.css';
// import avatarCover from './pic/cover-slider/Rectangle 2.png'
// import watchIcon from './pic/icons/watch-icon.png'
// function SwiperWatch({handleLinkClick}) {
//     let lists = [
//         {src: avatarCover},
//         {src: avatarCover},
//         {src: avatarCover}
//     ]
//     let movieList = lists.map((movie, index) => (
//         <SwiperSlide key={index} className='slider'>
//             <img src={movie.src} className='cover'/>
//             <div className='watch_btn'>
//                 <a href='#' onClick={handleLinkClick}>Watch Now <img src={watchIcon}/></a>
//                 <a href='#'>Watch Later</a>
//             </div>
//         </SwiperSlide>
//       ));
//   return (
//     <Swiper
//       spaceBetween={30}
//       slidesPerView={1}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       {movieList}
//     </Swiper>
//   )
// }

// export default SwiperWatch


import React from 'react';
import './styles/watch-list.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import '../../node_modules/swiper/swiper-bundle.min.css';
import avatarCover from './pic/cover-slider/Rectangle 2.png';
import se7enCover from './pic/cover-slider/se7en.jpg';
import shutterCover from './pic/cover-slider/shutter.jpg';
import summerCover from './pic/cover-slider/summer.jpg';
import inceptionCover from './pic/cover-slider/inception.jpg';
import watchIcon from './pic/icons/watch-icon.png';

function SwiperWatch({ handleLinkClick }) {
  let lists = [
    { cover: avatarCover , name: "Avatar: The Way of Water" , years: 2022 , time: "3:12:00" , star: 6.5 , genre:["Action" , "Science Fiction" , "Adventure"] },
    { cover: inceptionCover , name: "Inception" , years: 2010 , time: "2:28:00" , star: 8.8 , genre:["Action" , "Adventure" , "Sci-Fi"]},
    { cover: shutterCover , name: "Shutter Island" , years: 2010 , time: "2:19:00" , star: 8.2 , genre:["MyStery" , "Thriller" , "Drama"] },
    { cover: summerCover , name: "500 Days Of Summer" , years: 2009 , time: "1:39:00" , star: 7.7 , genre:["Comedy" , "Drama" , "Romance"] },
    { cover: se7enCover , name: "Se7en" , years: 1995 , time: "2:07:00" , star: 8.6 , genre:["Crime" , "Drama" , "MyStery"] },
  ];

  let movieList = lists.map((movie, index) => (
    <SwiperSlide key={index} className='slider'>
      <img src={movie.cover} className='cover' />
      <div className='watch_btn'>
        <a href='#' onClick={handleLinkClick} data-movie={movie.name}>
          Watch Now <img src={watchIcon} />
        </a>
        <a href='#'>Watch Later</a>
      </div>
      <div className='caption'>
        <h1>{movie.name}</h1>
        <div className='info'>
                <div className='genre'>{movie.genre[0]}</div>
                <div className='genre'>{movie.genre[1]}</div>
                <div className='genre'>{movie.genre[2]}</div>
            
            <div className='years'><i class='fa fa-calendar'></i> {movie.years}</div>
            <div className='time'><i class='fa fa-clock-o'></i> {movie.time}</div>
            <div className='star'><i class='fa fa-star'></i> {movie.star}</div>
        </div>
        <p>
            Set more than a decade after the events of the first film, learn the story of the 
            Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths 
            they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.
        </p>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper 
    modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
      pagination={{ clickable: true }}
    spaceBetween={30} 
    slidesPerView={1}
    autoplay={{
        delay: 80000,
        disableOnInteraction: false,
      }} 
    onSlideChange={() => console.log('slide change')} 
    onSwiper={(swiper) => console.log(swiper)}>
      {movieList}
    </Swiper>
  );
}

export default SwiperWatch;
