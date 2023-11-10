import React, { Component } from 'react'
import Header from './Header'
import MyPlayer from './MyPlayer'

class Watch extends Component {
  render() {
    return (
      <div>
        <Header backHomeHandler={this.props.backHomeHandler}/>
        <MyPlayer main={this.props.main}/>
      </div>
    )
  }
}

export default Watch
