import './Hero.css';

import { Navbar } from './Navbar.js';
import React from 'react';

export const Hero = () => {
  return (
    <div className='heroContainer'>
      <Navbar />
      <img
        className='hero'
        alt='hero'
        src='/images/hero.png'
      />
    </div>
  );
};
