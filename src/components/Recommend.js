import React, { Component } from 'react'
import './styles/recommend.css'
import { lists, series } from './list';

export class Recommend extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         category: lists,
         activeTag: "movie"
      }
      this.movieHandler = this.movieHandler.bind(this);
      this.seriesHandler = this.seriesHandler.bind(this);
    }

    movieHandler() {
        this.setState({
            category: lists,
            activeTag: "movie"
        })
        console.log(this.state.category);
    }

    seriesHandler() {
        this.setState({
            category: series,
            activeTag: "series"
        })
        console.log(this.state.category);
    }

    handler() {
        
    }

    
  render() {
    let Recommended = this.state.category.map((rec , index) => {
        return(
           <div key={index} className='recommended rel_slider'>
            <div className='release'>
            <img onClick={this.props.handleLinkClick} data-movie={rec.name} src={this.state.activeTag === "movie" ? `${rec.yCover}` : `${rec.cover}`} />
            <div className='caption'>
                <h2 onClick={this.props.handleLinkClick} data-movie={rec.name}>{rec.name}</h2>
                <div className='rate rel_rate'>
              <div className='hd'>HD</div>
              <div className='time'>{this.state.activeTag === "movie" ? (<span><i className='fa fa-clock-o'></i> {rec.time}</span>) : (<span>Season {rec.season}</span>)}</div>
                </div>
            </div>
            </div>
            </div> 
        )
        
      })
    return (
      <div className='recommend'>
        <br/>
        <br/>
        <div className='top'>
            <h1 className='h1_body'>Recommended</h1>
            <div className={`category ${this.state.activeTag === "movie" ? "active" : ""}`} onClick={this.movieHandler}>Movies</div>
            <div className={`category ${this.state.activeTag === "series" ? "active" : ""}`} onClick={this.seriesHandler}>Series</div>
        </div>
        <div className='rec_contain'>{Recommended}</div>
        
      </div>
    )
  }
}

export default Recommend

