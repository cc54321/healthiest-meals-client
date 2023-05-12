
import RecipeCard from "./RecipeCard";

function Recipes({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.recipe.uri} />
      ))}
    </div>
  );
}


export default Recipes;







// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function RecipesCard(props) {
// 	const navigate = useNavigate();

// 	const url = "http://localhost:3000";
// ;
// 	return (
// 		<div
// 			style={{
// 				border: "1px solid",
// 				height: "200px",
// 				width: "150px",
// 				margin: "20px",
// 			}}
// 		>
// 			<h3>{props.recipe.title}</h3>
// 			<p>{props.recipe.text}</p>
// 			<p>ingredients: {props.recipe.ingredients}</p>
//             <p>mealType: {props.recipe.mealType}</p>
//             <p>dishType: {props.recipe.dishType}</p>
//             <p>instructions: {props.recipe.instructions}</p>
//             <p>externalid: {props.recipe.externalid}</p>	

// 		</div>
// 	);
// }

// export default RecipesCard;