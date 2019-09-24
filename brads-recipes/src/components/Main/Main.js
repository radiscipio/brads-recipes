import React from 'react';
import Sidebar from '../Sidebar/sidebar.js'
import Recipe from '../Recipe/Recipe.js';
import './main.css';

function Main() {
  return (
    <div className="main">
      <Sidebar />
        <input placeholder="search me like one of your french foods" className="search-bar" />
      <Recipe />
    </div>
  )
}

export default Main;
