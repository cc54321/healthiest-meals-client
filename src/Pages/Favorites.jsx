import React, { useState } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (recipe) => {
    if (!favorites.find((fav) => fav.uri === recipe.uri)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const handleRemoveFromFavorites = (recipe) => {
    const filteredFavorites = favorites.filter((fav) => fav.uri !== recipe.uri);
    setFavorites(filteredFavorites);
  };

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>You have no favorites yet</p>
      ) : (
        <ul>
          {favorites.map((recipe) => (
            <li key={recipe.uri}>
              <img src={recipe.image} alt={recipe.label} />
              <h3>{recipe.label}</h3>
              <button onClick={() => handleRemoveFromFavorites(recipe)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;



