import React, { Component } from 'react'
import { lists } from './list'


import avatarCover from './pic/cover-slider/Rectangle 2.png';
import se7enCover from './pic/cover-slider/se7en.jpg';
import shutterCover from './pic/cover-slider/shutter.jpg';
import summerCover from './pic/cover-slider/summer.jpg';
import inceptionCover from './pic/cover-slider/inception.jpg';

class MyPlayer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       myFilm : this.props.main,
       videoLink : null
    }
  }
  componentDidMount() {
    let myMovie = lists.find((list) => {
      return list.name === this.state.myFilm
    })
    this.setState({
      videoLink: myMovie.cover
    })
  }
  
  render() {
    return (
      <div>
        <img src={this.state.videoLink}/>
      </div>
    )
  }
}

export default MyPlayer



