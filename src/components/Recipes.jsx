import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeGrid from "./RecipeGrid";
import { Link } from "react-router-dom";

function Recipes({ recipes }) {
  return (
    <div>
      <h1>Recipes</h1>
      <RecipeGrid recipes={recipes} />
      <Link to="/recipe-form">Add Recipe</Link>
    </div>
  );
}

export default Recipes;












// import React from "react";
// import RecipeCard from "./RecipeCard";
// import { Link } from "react-router-dom";

// function Recipes({ recipes }) {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes ? (
//         <div className="recipes-grid">
//           {recipes.map((recipe, index) => (
//             <RecipeCard
//               key={index}
//               recipe={recipe.recipe}
//               image={recipe.recipe.image}
//             />
//           ))}
//         </div>
//       ) : (
//         <div>No recipes found. Please try again later.</div>
//       )}
//       <Link to="/recipe-form">Add Recipe</Link>
//     </div>
//   );
// }

// export default Recipes;