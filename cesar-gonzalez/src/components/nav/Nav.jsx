import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import{FaUserAstronaut, FaAmericanSignLanguageInterpreting} from 'react-icons/fa'
import {GiBookshelf} from 'react-icons/gi'
import {BiMessageDetail} from 'react-icons/bi'
import {useState} from 'react';


const Nav = () => { 
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaAmericanSignLanguageInterpreting/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GiBookshelf/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>

    </nav>
  )
}

export default Nav