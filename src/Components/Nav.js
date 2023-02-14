import { Link } from 'react-router-dom'

import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div>
        <div className='nav'>
            <Link className='link' to={"/"}>Home</Link>
            <Link className='link' to={"about us"}>About Us</Link>
            <Link className='link' to={"contact"}>Contact</Link>
            <Link className='link' to={"faq"}>Faq</Link>
        </div>  

    </div>
  )
}

export default Nav