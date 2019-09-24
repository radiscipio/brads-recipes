import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <div className="sublogo">
          <a href="#">
            <img
              className="reciplease-logo"
              src="https://res.cloudinary.com/radiscipio/image/upload/v1569344616/rsz7rm5cslwwu5iqwu2o.png"
            />
          </a>
          <h1>ReciPlease</h1>
        </div>

        <div className="sublogo">
          <a href="#">
            <img
              className="profile-pic"
              src="https://res.cloudinary.com/radiscipio/image/upload/v1569344616/p9y8mngu1rw18odmxp4m.jpg"
            />
          </a>
          <a href="#">
            <img
              className="shopping-cart"
              src="https://res.cloudinary.com/radiscipio/image/upload/v1569344616/e0jwuoi6lo61uqmillj2.png"
            />
          </a>
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
