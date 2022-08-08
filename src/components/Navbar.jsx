import React, { useState } from 'react'

const Navbar = () => {
    const [nav,setNav]=useState(false)
  
  const changeBackground=()=>{
    if(window.scrollY>=50){
      setNav(true)
    }
    else{
      setNav(false)
    }
  }
  window.addEventListener('scroll',changeBackground)
  return (
    <nav className={nav?'nav active':'nav'}>
        <a href='#' className='logo'>
            <img src='https://cdn.shopify.com/s/files/1/0519/3868/9185/files/IMG-3365.png?v=1609149467' alt=''/>
        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        <label className="menu-icon" for='menu-btn'>
            <span className="nav-icon"></span>
        </label>
        <ul className="menu">
            <li><a href='#' className='active'>ABOUT US</a></li>
            <li><a href='#'className='active'>MEDITATION</a></li>
            <li><a href='#'className='active'>YOGA ACCESSORIES</a></li>
            <li><a href='#'className='active'>Travel ACCESSORIES</a></li>
            <li><a href='#'className='active'>BULK BUY</a></li>
            <li><a href='#'className='active'>PERSONAL COACHING</a></li>
        </ul>
    </nav>
  )
}

export default Navbar