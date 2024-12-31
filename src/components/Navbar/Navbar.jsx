import React from 'react'
import logo from '../../images/logo.svg'
import { FaAlignRight } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
function handleClick(){
  setIsOpen(!isOpen)
}

  return (
    <nav className='navbar'>

    <div className='nav-center'>
    <div className='nav-header'>
   <img src={logo} alt='hotel logo'/>
    <button className='nav-btn' onClick={handleClick}><FaAlignRight  className='nav-icon'/></button>
    
    </div>
    <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
    <li>
    <Link to='/'>Home</Link>
    </li>
    <li>
    <Link to='/rooms'>Rooms</Link>
    </li>
    </ul>

    </div>
    
    </nav>
  )
}

export default Navbar