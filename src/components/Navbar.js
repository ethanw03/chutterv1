import './Navbar.css';

import React from 'react';

export const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='leftNav'>
        <div>Products</div>
        <div>About Us</div>
      </div>
      <div className='centerNav'>
        <img
          src='/images/chutter.png'
          alt='logo'
          className='logo'
        />
      </div>
      <div className='rightNav'>
        <div>Login</div>
        <div>Sign Up</div>
      </div>
    </div>
  );
};
