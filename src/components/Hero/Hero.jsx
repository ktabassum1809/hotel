import React from 'react'
import './Hero.css'
import Banner from '../banner/Banner';
import { Link } from 'react-router-dom';

function Hero({children, hero}) {
  return (
   <header className={hero}>
  {children}
    </header>
  )
}


Hero.defaultProps = {
  hero: "defaultHero"
};

export default Hero;