import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipes }) => {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </div>
  );
};

export default RecipeGrid;







