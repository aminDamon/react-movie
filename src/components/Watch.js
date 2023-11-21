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
import { allSeriesMovie, lists } from './list';
import Info from './Info';

function Watch(props) {
    let myMovie = allSeriesMovie.find((list) => {
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
      <Info selectMovie={myMovie}/>
    </div>
  )
}

export default Watch

