
import React from "react";

function RecipeCard({ recipe }) {
  const { title, ingredients, instructions, image, source, totalTime, servings } = recipe;

  return (
    <div className="recipe-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Source: {source}</p>
      <p>Total Time: {totalTime} minutes</p>
      <p>Servings: {servings}</p>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeCard;







