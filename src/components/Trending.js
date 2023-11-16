import React from 'react'
import './styles/trending.css'
import { allSeriesMovie } from './list'
import watchIcon from './pic/icons/watch-icon.png';

function Trending({ handleLinkClick }) {
    let damon = allSeriesMovie.filter((tre) => {
        return tre.category === 'trending';
      });
    
    let trend = damon.map((tre , index) => {
        let styles = {backgroundImage: `url(${tre.cover})` , backgroundSize: "cover", backgroundPosition: "center"};
        return(
            <div className='trend' key={index}>
                <div className='trending_img' style={ styles }>
                    <img src={watchIcon} onClick={handleLinkClick} data-movie={tre.name} />
                    <div className='info'>
                        <div className='one'><i className='fa fa-clock-o'></i> <span>{tre.time}</span></div>
                        <div className='two'><i className='fa fa-star'></i><span>{tre.star}</span></div> 
                    </div>
                </div> 
                <div className='caption'>
                   <h2 onClick={handleLinkClick} data-movie={tre.name}>{tre.name}</h2>
                   <div className='genre_tag'>
                        <div className='genre'>{tre.genre[0]}</div>
                        <div className='genre'>{tre.genre[1]}</div>
                    </div> 
                </div>
                
            </div>
            
        )
    })
    
  return (
    <div className='padding_all'>
        <br/>
        <br/>
        <h1 className='h1_body'>Trending</h1>
        <div className='trending'>
        { trend }
        </div>
      
      
    </div>
  )
}

export default Trending
