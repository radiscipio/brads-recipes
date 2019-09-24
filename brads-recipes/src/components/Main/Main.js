import React from 'react';
import Sidebar from '../Sidebar/sidebar.js'
import Recipe from '../Recipe/Recipe.js';

function Main() {
  return (
    <div className="main">
      <Sidebar />
        <input placeholder="main div"></input>
      <Recipe />
    </div>
  )
}

export default Main;
