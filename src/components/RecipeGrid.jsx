import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeGrid({ recipes }) {
  return (
    <div className="recipe-grid">
      {recipes.map(recipe => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeGrid;







