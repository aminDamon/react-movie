import React from 'react'
import './styles/test-two.css'
function TestTwo() {
  return (
    <div>
      <header>
        <div className="menu__mobile__icon">
            <span></span><span></span><span></span>
        </div>
        <div className="space__2"></div>


        <div className="logo me-2">
            <img src="pic/logo/Untitled_prev_ui_prev_ui.png" alt=""></img>
        </div>


        <div className="menu">
            <ul className="list">
                <li className="list__item"><a href="#">Home</a></li>
                <li className="list__item"><a href="#">Services</a></li>
                <li className="list__item"><a href="#">Blog</a></li>
                <li className="list__item"><a href="#">About Us</a></li>
            </ul>
        </div>
        <div className="space__"></div>
        <div className="search-box">
            <button className="btn-search"></button>
            <input type="text" className="input-search" placeholder="Type to Search..."></input>
          </div>

        <div className="login">
            <div className="social__media mx-2">
            </div>
            <div className="shop__icon mx-2"></div>
            <div className="login__icon mx-2">
            </div>   
        </div>
    </header>
    </div>
  )
}

export default TestTwo