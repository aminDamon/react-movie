// import React, { Component } from 'react'
// import Header from './Header'
// import VideoJS from './MyPlayer'

// class Watch extends Component {
//   render() {
//     return (
//       <div>
//         <Header backHomeHandler={this.props.backHomeHandler}/>
//         <VideoJS main={this.props.main}/>
//       </div>
//     )
//   }
// }

// export default Watch



import React from 'react'

// import Car from './movie/avatar.mp4'
import Header from './Header';
import VideoJS from './MyPlayer';
import { lists } from './list';


import inceptionCover from './pic/cover-slider/inception.jpg';
import avatarCover from './pic/cover-slider/Rectangle 2.png';
import se7enCover from './pic/cover-slider/se7en.jpg';
import shutterCover from './pic/cover-slider/shutter.jpg';
import summerCover from './pic/cover-slider/summer.jpg';

import avatarMovie from './movie/avatar.mp4'
import inceptionMovie from './movie/inception.mp4'
import shutterMovie from './movie/shutter.mp4'
import summerMovie from './movie/500-days.mp4'
import se7enMovie from './movie/se7en.mp4'

function Watch(props) {
    let myMovie = lists.find((list) => {
        return list.name === props.main
    })
    // console.log(myMovie.cover);



    const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    poster: myMovie.cover,
    sources: [{
      src: myMovie.src,
      
      type: myMovie.type
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

  };


  return (
    <div>
      <Header backHomeHandler={props.backHomeHandler}/>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  )
}

export default Watch

