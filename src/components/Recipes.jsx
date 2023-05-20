

import { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import RecipeGrid from "./RecipeGrid";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const app_Key = process.env.REACT_APP_APP_KEY;
  const app_Id = process.env.REACT_APP_APP_ID;

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=any&app_id=${app_Id}&app_key=${app_Key}&diet=balanced&q=${searchTerm}`
      );
      setRecipes(response.data.hits);
      setIsLoading(false);
    };

    fetchRecipes();
  }, [searchTerm]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <RecipeGrid recipes={recipes} />
      )}
    </div>
  );
};

export default Recipes;









// // import React from "react";
// // import RecipeCard from "./RecipeCard";
// // import RecipeGrid from "./RecipeGrid";
// // import { Link } from "react-router-dom";

// // function Recipes({ recipes }) {
// //   return (
// //     <div>
// //       <h1>Recipes</h1>
// //       <RecipeGrid recipes={recipes} />
// //       <Link to="/recipe-form">Add Recipe</Link>
// //     </div>
// //   );
// // }

// // export default Recipes;












// // import React from "react";
// // import RecipeCard from "./RecipeCard";
// // import { Link } from "react-router-dom";

// // function Recipes({ recipes }) {
// //   return (
// //     <div>
// //       <h1>Recipes</h1>
// //       {recipes ? (
// //         <div className="recipes-grid">
// //           {recipes.map((recipe, index) => (
// //             <RecipeCard
// //               key={index}
// //               recipe={recipe.recipe}
// //               image={recipe.recipe.image}
// //             />
// //           ))}
// //         </div>
// //       ) : (
// //         <div>No recipes found. Please try again later.</div>
// //       )}
// //       <Link to="/recipe-form">Add Recipe</Link>
// //     </div>
// //   );
// // }

// // export default Recipes;