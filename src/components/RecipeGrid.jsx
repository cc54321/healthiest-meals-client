import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipes from "./Recipes";
import RecipeCard from "./RecipeCard";
import "./RecipeGrid.css";

function RecipeGrid() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const app_Key = process.env.REACT_APP_APP_KEY;
    const app_Id = process.env.REACT_APP_APP_ID;

    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=any&app_id=${app_Id}&app_key=${app_Key}&diet=balanced`
      )
      .then((response) => {
        setRecipes(response.data.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="recipe-grid">
      <Recipes recipes={recipes}>
        {(recipe) => (
          <div key={recipe.recipe.uri} className="recipe-card-wrapper">
            <RecipeCard recipe={recipe} />
          </div>
        )}
      </Recipes>
    </div>
  );
}

export default RecipeGrid;

