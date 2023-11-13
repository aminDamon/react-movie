// import React, { Component } from 'react'
// import { lists } from './list'

// class VideoJS extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        myFilm : this.props.main,
//        videoLink : null
//     }
//   }
//   componentDidMount() {
//     let myMovie = lists.find((list) => {
//       return list.name === this.state.myFilm
//     })
//     this.setState({
//       videoLink: myMovie.cover
//     })
//   }
  
//   render() {
//     return (
//       <div>
//         <img src={this.state.videoLink}/>
//       </div>
//     )
//   }
// }

// export default VideoJS


import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './styles/my-player.css'
import "videojs-seek-buttons";
import "videojs-seek-buttons/dist/videojs-seek-buttons.css";




function VideoJS(props) {
  // let myMovie = lists.find((list) => {
  //   return list.name === props.main
  // })




  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const {options, onReady} = props;

  React.useEffect(() => {

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        player.seekButtons({
            back: 15,
            forward: 30
          });
        videojs.log('player is ready');
        onReady && onReady(player);
      });

    // You could update an existing player in the `else` block here
    // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);



  return (
    // <div>
    //   <img src={myMovie.cover}/>
    // </div>
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  )
}

export default VideoJS






