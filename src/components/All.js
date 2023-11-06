import React, { Component } from 'react'
import './styles/all-style.css'
import Header from './Header'
class All extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         comp: {
            header: Header,
         }
      }
    }
    
  render() {
    const Comp = this.state.comp.header;
    return (
      <div>
        <Comp />
      </div>
    )
  }
}
export default All