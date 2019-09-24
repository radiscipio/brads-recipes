import React from 'react';
import Sidebar from '../Sidebar/sidebar.js'
import Recipe from '../Recipe/Recipe.js';
import './main.css';

function Main() {
  return (
    <div className="main">
      <Sidebar />
      <div className="right-container">
        <input placeholder="SEARCH" className="search-bar" />
      <Recipe />
      </div>
    </div>
  )
}

export default Main;
