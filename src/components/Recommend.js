import React, { Component } from 'react'

export class Recommend extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         category: "movie"
      }
    }

    movieHandler() {
        this.setState({
            category: "movie"
        })
        console.log(this.state.category);
    }

    seriesHandler() {
        this.setState({
            category: "series"
        })
        console.log(this.state.category);
    }


    
  render() {
    return (
      <div>
        <h1 onClick={this.movieHandler}>Recommended</h1>
        <h1 onClick={this.seriesHandler}>damon</h1>
      </div>
    )
  }
}

export default Recommend

