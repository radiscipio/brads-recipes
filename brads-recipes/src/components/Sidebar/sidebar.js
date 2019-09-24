import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div>
        <select name="filter">
          <option>Filter: </option>
        </select>
      </div>
      <div>
      <select name="sort-by">
        <option>Sort By:</option>
      </select>
      </div>
    </div>
  )
}

export default Sidebar;
