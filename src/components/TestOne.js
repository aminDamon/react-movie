import React from 'react'
import './styles/test-one.css'
function TestOne() {
    const inputHandler = (event) => {
        if (event.key === "Enter") {
            console.log(document.querySelector("input").value);
            return document.querySelector("input").value
        }
    }
  return (
    <div>
        <header>
    <div className="head">
        <div className="right">
            <img src="./image/برند شما.png"></img>
            <div className="search_box">
                <h4>
                    همه دسته بندی ها
                    <i className='fa fa-sort-down'></i>
                </h4>
                <span className="line"></span>
                <input type="search" placeholder="بین بیشتر از 20,000محصول جستجو کنید" onKeyUp={inputHandler}></input>
                <i className='fa fa-search'></i>
            </div>
        </div>
        <div className="left">
            <div className="support">
                <p>
                    پشتیبانی
  
                </p>
            <span>
                09125032180
            </span>
            </div>
            <div className="icon">
                <img src="./image/cart.png"></img>
                <img src="./image/wishlists.png"></img>
                <img src="./image/login.png"></img>

            </div>
        </div>
    </div>
    <div className="header_dropdown">
        <a href="#">گیاهان طبیعی</a>
        <a href="#">گوشت خام</a>
        <a href="#">روغن</a>
        <a href="#">نوشیدنی</a>
        <a href="#">نان و شیرینی</a>
        <a href="#">میوه و سبزیجات</a>
    </div>
</header>
      
    </div>
  )
}
export default TestOne