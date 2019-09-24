import React from 'react';
import './sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sort-by">
        <select className="dropdown" name="sort-by">
          <option>Sort By:</option>
          <option>No. of ingredients (low to high)</option>
          <option>No. of ingredients (high to low)</option>
          <option>Cook time (low to high)</option>
          <option>Cook time (high to low)</option>
          <option>Price (low to high)</option>
          <option>Price (high to low)</option>
        </select>
      </div>

      <div className="filter">
        <select className="dropdown" name="filter">
          <option>Filter:</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dietary Restrictions</option>
          <option>Allergies</option>
        </select>
      </div>
    </div>
  )
}

export default Sidebar;
