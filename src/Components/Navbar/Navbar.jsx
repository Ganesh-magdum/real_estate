import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpeg'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu.png'
const Navbar = () => {

const[sticky,setSticky]=useState(false);

useEffect(()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY >50 ? setSticky(true) : setSticky(false)
    })
},[]);

const [mobileMenu, setMobileMenu]=useState(false);
const toggleMenu=()=>{
  mobileMenu ? setMobileMenu(false): setMobileMenu(true);
}

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
       
      <img src={logo} alt='' className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero container' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to='Login' smooth={true} offset={0} duration={500}>Login</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About US</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact US</Link></li>
        
      </ul>
        <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>

    </nav>
  )
}

export default Navbar