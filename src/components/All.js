import React, { Component } from 'react'
import './styles/all-style.css'
import Header from './Header'
import WatchList from './WatchList'
class All extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         comp: {
            header: Header,
            watchList: WatchList,
         }
      }
    }
    
  render() {
    const HeaderTag = this.state.comp.header;
    const WatchList = this.state.comp.watchList;
    return (
      <div>
        <HeaderTag backHomeHandler={this.props.backHomeHandler} />
        <WatchList handleLinkClick={this.props.handleLinkClick} />
      </div>
    )
  }
}
export default All