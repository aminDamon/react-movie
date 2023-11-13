import avatarCover from './pic/cover-slider/Rectangle 2.png';
import se7enCover from './pic/cover-slider/se7en.jpg';
import shutterCover from './pic/cover-slider/shutter.jpg';
import summerCover from './pic/cover-slider/summer.jpg';
import inceptionCover from './pic/cover-slider/inception.jpg';

// import filmOne from './movie/inception.mp4'
// import filmTwo from './movie/How.I.Met.Your.Mother.S01E01.720p.WEB-DL.DeeJayAhmed.mkv'

import avatarMovie from './movie/avatar.mp4'
import inceptionMovie from './movie/inception.mp4'
import shutterMovie from './movie/shutter.mp4'
import summerMovie from './movie/500-days.mp4'
import se7enMovie from './movie/se7en.mp4'

export let lists = [
    { 
        cover: avatarCover , 
        name: "Avatar: The Way of Water" , 
        src: avatarMovie,
        type: 'video/mp4',
        years: 2022 , time: "3:12:00" , 
        star: 6.5 , 
        genre:["Action" , "Science Fiction" , "Adventure"] 
    },
    { 
        cover: inceptionCover , 
        name: "Inception" ,
        src: inceptionMovie, 
        type: 'video/mp4',
        years: 2010 , 
        time: "2:28:00" , 
        star: 8.8 , 
        genre:["Action" , "Adventure" , "Sci-Fi"]
    },
    { 
        cover: shutterCover , 
        name: "Shutter Island" ,
        src: shutterMovie, 
        type: 'video/mp4',
        years: 2010 , time: "2:19:00" , 
        star: 8.2 , 
        genre:["MyStery" , "Thriller" , "Drama"] 
    },
    { 
        cover: summerCover , 
        name: "500 Days Of Summer" ,
        src: summerMovie, 
        type: 'video/mp4',
        years: 2009 , time: "1:39:00" , 
        star: 7.7 , 
        genre:["Comedy" , "Drama" , "Romance"] 
    },
    { 
        cover: se7enCover , 
        name: "Se7en" , 
        src: se7enMovie,
        type: 'video/mp4',
        years: 1995 , 
        time: "2:07:00" , 
        star: 8.6 , 
        genre:["Crime" , "Drama" , "MyStery"] 
    },
];