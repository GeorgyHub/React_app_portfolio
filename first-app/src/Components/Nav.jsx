import React from 'react';
import './Nav.css';

const Nav = () => {
    return(
      <nav className='nav'>
        <div className='Item'>
          <a href="">Profile</a>
        </div>
        <div className='Item'>
         <a href="">Messages</a>
        </div>
        <div className='Item'>
          <a href="">News</a>
        </div>
      </nav>
    );
  }

export default Nav;