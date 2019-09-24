import React from 'react';
import './recipe.css';

function Recipe() {
  return (
    <div className="recipe-container">
      <div className="recipe-card">
        <img src="https://res.cloudinary.com/radiscipio/image/upload/v1569340787/Blueberry-Pancakes.jpg" />
        <div className="recipe-details">
          <h2>Blueberry Pancakes</h2>
          <p>20 Minutes</p>
          <p>6 Ingredients</p>
          <p>10 Servings</p>
          <div>
            <button>$15 Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="recipe-card">
        <img src="https://res.cloudinary.com/radiscipio/image/upload/v1569340763/ajiaco.jpg"/>
        <div className="recipe-details">
          <h2>Ajiaco</h2>
          <p>20 Minutes</p>
          <p>6 Ingredients</p>
          <p>3 Servings</p>
          <div>
            <button>$18 Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="recipe-card">
        <img src="https://res.cloudinary.com/radiscipio/image/upload/v1569340761/pad-thai.jpg"/>
        <div className="recipe-details">
          <h2>Pad Thai</h2>
          <p>40 Minutes</p>
          <p>6 Ingredients</p>
          <p>4 Servings</p>
          <div>
            <button>$20 Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="recipe-card">
        <img src="https://res.cloudinary.com/radiscipio/image/upload/v1569340767/lasagna.jpg"/>
        <div className="recipe-details">
          <h2>Lasagna</h2>
          <p>60 Minutes</p>
          <p>6 Ingredients</p>
          <p>12 Servings</p>
          <div>
            <button>$25 Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="recipe-card">
        <img src="https://res.cloudinary.com/radiscipio/image/upload/v1569340765/seafood-arrabbiata.jpg"/>
        <div className="recipe-details">
          <h2>Seafood Arrabbiata</h2>
          <p>35 Minutes</p>
          <p>6 Ingredients</p>
          <p>3 Servings</p>
          <div>
            <button>$30 Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="recipe-card">
        <img src="https://res.cloudinary.com/radiscipio/image/upload/v1569340762/penne-alla-vodka.jpg"/>
        <div className="recipe-details">
          <h2>Penne alla Vodka</h2>
          <p>20 Minutes</p>
          <p>6 Ingredients</p>
          <p>3 Servings</p>
          <div>
            <button>$14 Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipe;
