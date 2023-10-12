import React from 'react'
import './header.css'
import logo from './logo1.png'
import { useState } from 'react'

import { Link } from 'react-router-dom'
const Header = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)


  const openMenu = () => {
    setIsNavOpen(true)
  };


  const closeMenu = () => {
    setIsNavOpen(false)
  };


 
  return (
    <div>
      <section className= 'navSection'>
        <Link to={"/"}><img src={logo} alt="" /></Link>
        <ul className={`ulSection ${isNavOpen ? "open" :"close"} `}>
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/about"}><li>About</li></Link>
          <Link to={"/works"}><li>Works</li></Link>
          <i class="uil uil-times closeicons" onClick={closeMenu} ></i>
        </ul>
        <i class="uil uil-apps openicons" onClick={openMenu}></i>

      </section>
    </div>
  )
}

export default Header