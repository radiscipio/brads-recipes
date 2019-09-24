import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <div className="sublogo">
          <a href="#">LOGO</a>
          <h1>ReciPlease</h1>
        </div>

        <div className="sublogo">
          <a href="#">PROFILE PIC</a>
          <a href="#">CART</a>
        </div>

      </div>
      <div className="nav">
        <a href="#">Home</a>
        <a href="#">My Meals</a>
        <a href="#">About</a>
      </div>
    </div>
  )
}

export default Header;
