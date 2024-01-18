import React from 'react'
import "./Navbar.css"

import fire from '../../assets/fire.png'
import star from '../../assets/glowing-star.png'
import party from '../../assets/partying-face.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>

      <div className="navbar_links">
        <a href="">Popular<img src={fire} alt="" className='navbar_emoji'/>
        </a>
        <a href="">Top Rated<img src={star} alt="" className='navbar_emoji'/>
        </a>
        <a href="">Upcoming <img src={party} alt="" className='navbar_emoji'/>
        </a>
      </div>
    </nav>

  )
}

export default Navbar
