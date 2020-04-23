<<<<<<< HEAD
import React from "react";

import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
  return (
    <div className="container">
      <div className="row">
        {recipes.map((recipe) => {
          return (
            <div
              key={recipe.recipe_id}
              className="col-md-4"
              style={{ marginBottom: "2rem" }}
            >
              <div className="recipes__box">
                <img
                  className="recipe__box-img"
                  src={recipe.image_url}
                  alt={recipe.title}
                />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {recipe.title.length < 20
                      ? `${recipe.title}`
                      : `${recipe.title.substring(0, 25)}...`}
                  </h5>
                  <p className="recipes__subtitle">
                    {" "}
                    Publisher: <span> {recipe.publisher}</span>
                  </p>
                </div>
                <button className="recipe_buttons">
                  <Link to={{ 
                      pathname: `/recipe/${recipe.recipe_id}`, 
                      state : {recipe: recipe.title}
                
                }}>View Recipe</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
=======
import React from "react";

import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
  return (
    <div className="container">
      <div className="row">
        {recipes.map((recipe) => {
          return (
            <div
              key={recipe.recipe_id}
              className="col-md-4"
              style={{ marginBottom: "2rem" }}
            >
              <div className="recipes__box">
                <img
                  className="recipe__box-img"
                  src={recipe.image_url}
                  alt={recipe.title}
                />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {recipe.title.length < 20
                      ? `${recipe.title}`
                      : `${recipe.title.substring(0, 25)}...`}
                  </h5>
                  <p className="recipes__subtitle">
                    {" "}
                    Publisher: <span> {recipe.publisher}</span>
                  </p>
                </div>
                <button className="recipe_buttons">
                  <Link to={{ 
                      pathname: `/recipe/${recipe.recipe_id}`, 
                      state : {recipe: recipe.title}
                
                }}>View Recipe</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
>>>>>>> 8cd950aa0191971d394012f74d0e6db777c54cc9
