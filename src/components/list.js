import avatarCover from './pic/cover-slider/Rectangle 2.png';
import se7enCover from './pic/cover-slider/se7en.jpg';
import shutterCover from './pic/cover-slider/shutter.jpg';
import summerCover from './pic/cover-slider/summer.jpg';
import inceptionCover from './pic/cover-slider/inception.jpg';
import oppenheimerCover from './pic/cover-slider/oppenheimer.webp'

import coverAvatar from './pic/cover-slider/avatar-y.webp'
import coverInception from './pic/cover-slider/inception-y.jpg'
import coverShutter from './pic/cover-slider/shutter-y.jpg'
import coverSummer from './pic/cover-slider/summer-y.jpg'
import coverSe7en from './pic/cover-slider/se7en-y.jpg'



import shamelessCover from './pic/cover-slider/shameless.jpg'
import himymCover from './pic/cover-slider/himym.webp'
import strangerCover from './pic/cover-slider/stranger.jpg'
import bansheeCover from './pic/cover-slider/banshee.webp'
import youCover from './pic/cover-slider/you.avif'
import vikingsCover from './pic/cover-slider/vikings.jpg'
import wednesdayCover from './pic/cover-slider/wednesday.jpg'

import avatarMovie from './movie/avatar.mp4'
import inceptionMovie from './movie/inception.mp4'
import shutterMovie from './movie/shutter.mp4'
import summerMovie from './movie/500-days.mp4'
import se7enMovie from './movie/se7en.mp4'

export let lists = [
    {
        category: "none", 
        cover: avatarCover , 
        name: "Avatar: The Way of Water" , 
        src: avatarMovie,
        type: 'video/mp4',
        years: 2022 , time: "3:12:00" , 
        star: 6.5 , 
        genre:["Action" , "Science Fiction" , "Adventure"] ,
        yCover: coverAvatar
    },
    {
        category: "trending", 
        cover: inceptionCover , 
        name: "Inception" ,
        src: inceptionMovie, 
        type: 'video/mp4',
        years: 2010 , 
        time: "2:28:00" , 
        star: 8.8 , 
        genre:["Action" , "Adventure" , "Sci-Fi"],
        yCover: coverInception
    },
    {
        category: "none", 
        cover: shutterCover , 
        name: "Shutter Island" ,
        src: shutterMovie, 
        type: 'video/mp4',
        years: 2010 , time: "2:19:00" , 
        star: 8.2 , 
        genre:["MyStery" , "Thriller" , "Drama"] ,
        yCover: coverShutter
    },
    {
        category: "none", 
        cover: summerCover , 
        name: "500 Days Of Summer" ,
        src: summerMovie, 
        type: 'video/mp4',
        years: 2009 , time: "1:39:00" , 
        star: 7.7 , 
        genre:["Comedy" , "Drama" , "Romance"],
        yCover: coverSummer
    },
    {
        category: "none", 
        cover: se7enCover , 
        name: "Se7en" , 
        src: se7enMovie,
        type: 'video/mp4',
        years: 1995 , 
        time: "2:07:00" , 
        star: 8.6 , 
        genre:["Crime" , "Drama" , "MyStery"] ,
        yCover: coverSe7en
    },
    {
        category: "trending", 
        cover: oppenheimerCover , 
        name: "Oppenheimer" , 
        src: se7enMovie,
        type: 'video/mp4',
        years: 2023 , 
        time: "3:03:00" , 
        star: 8.9 , 
        genre:["Action" , "Drama" , "Documentary"] ,
        yCover: oppenheimerCover
    },
];

export let series = [
    {
        category: "none",
        cover: shamelessCover , 
        name: "Shameless" , 
        src: avatarMovie,
        type: 'video/mp4',
        years: 2010, 
        season: 10,
        episode: 10,
        star: 8.4, 
        genre:["Comedy" , "Drama" , "Romance"] 
    },
    {
        category: "none",
        cover: strangerCover , 
        name: "Stranger things" , 
        src: avatarMovie,
        type: 'video/mp4',
        years: 2015 , 
        season: 4,
        episode: 9,
        star: 8.8 , 
        genre:["Horror" , "Mystery" , "Drama"] 
    },
    {
        category: "none",
        cover: himymCover , 
        name: "Himym" , 
        src: avatarMovie,
        type: 'video/mp4',
        years: 2004, 
        season: 9,
        episode: 24,
        star: 8.5 , 
        genre:["Sitcom" , "Comedy" , "Romance"] 
    },
    {
        category: "none",
        cover: bansheeCover , 
        name: "Banshee" , 
        src: avatarMovie,
        type: 'video/mp4',
        years: 2013 , 
        season: 4,
        episode: 12,
        star: 8.4 , 
        genre:["Action" , "Drama" , "Crime thriller"] 
    },
    {
        category: "none",
        cover: youCover , 
        name: "You" , 
        src: avatarMovie,
        type: 'video/mp4',
        years: 2018 , 
        season: 4,
        episode: 10,
        star: 8.4 , 
        genre:["thriller" , "Drama" , "Romance"] 
    },
    {
        category: "none",
        cover: vikingsCover , 
        name: "Vikings" , 
        src: avatarMovie,
        type: 'video/mp4',
        years: 2009 , 
        season: 6,
        episode: 20,
        star: 8.7 , 
        genre:["Historical" , "Drama" , "Action"] 
    },
    {
        category: "trending",
        cover: wednesdayCover , 
        name: "Wednesday" , 
        src: avatarMovie,
        type: 'video/mp4',
        years: 2022 , 
        season: 1,
        episode: 10,
        star: 8.2 , 
        genre:["Horror" , "Comedy" , "Drama"] 
    }
]

export let allSeriesMovie = [...lists , ...series]