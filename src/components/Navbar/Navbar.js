import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import './Navbar.css'

const Navbar = () => {
    const [isMobile, setisMobile] = useState(false)
  return (
    <div className='navigation'>
        <img src={logo} alt='logo' className='logo'></img>
        <button className='mobile-menu' onClick={()=> setisMobile(!isMobile)}>
            {isMobile ? <img src={close} className='close'></img>:<img src={hamburger} className='menu'></img>}
        </button>
        <ul className={isMobile?'nav-mobile':'nav-desktop'}
        onClick={()=> setisMobile(false)}>
            <Link to='/' className='home'>
                <li><p>Home</p></li>
            </Link>
            <Link to='/about' className='about'>
                <li>About</li>
            </Link>
            <Link to='/contact' className='contact'>
                <li>Contact</li>
            </Link>
            <Link to='/blog' className='blog'>
                <li>Blog</li>
            </Link>
            <Link to='/career' className='career'>
                <li>Career</li>
            </Link>
        </ul>
        <button type='button' className='navbutton'>Request Invite</button>
    </div>
  )
}

export default Navbar