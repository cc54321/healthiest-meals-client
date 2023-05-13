import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Recipes from './components/Recipes';
import SearchForm from './components/SearchForm';
import Favorites from './pages/Favorites';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/search">
            <SearchForm />
            <Recipes />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
      </Router>
    </div>
  );
}

export default App;































// import "./App.css";

// import axios from "axios";
// import NavBar from "./components/NavBar";
// import Recipes from "./components/Recipes";
// import RecipeForm from "./components/RecipeForm";
// import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// //import RecipesCard from "./components/RecipesCard";


// function App() {
//   const [Recipes, setRecipes] = useState([]);
//   const [shouldRefresh, setShouldRefresh] = useState(false);

//   const url = "http://localhost:3000";

//   useEffect(() => {
//     // const fetchData = async () => {

//     // 	const response = await axios.get(`${url}/recipes/all-recipes`);
//     // 	if (response.data.success) {
//     // 		setRecipes(response.data.recipes);
//     // 	}
//     // };
//     // fetchData();
//     const app_Key = process.env.REACT_APP_APP_KEY;
//     const app_Id = process.env.REACT_APP_APP_ID;
// 	console.log(app_Key);
// 	console.log(app_Id);
//     axios
//       .get(`https://api.edamam.com/api/recipes/v2?type=any&app_id=${app_Id}&app_key=${app_Key}&diet=balanced`)
//       .then((response) => {
//         console.log(response.data.hits);
// 		setRecipes(response.data.hits)
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [shouldRefresh]);
//   return (
// 	<div>
// 		<NavBar />
  
  
//       <Routes>
//          {/* <Route
// 						path="/recipe-form"
// 						element={
// 							<Recipes
// 								setRecipesProps={setRecipes}
// 								setShouldRefreshProps={setShouldRefresh}
// 						/>
          
// 						}
// 					/> */}

           
// 					<Route path="recipes"element={<Recipes
// 								setRecipesProps={setRecipes}
// 								setShouldRefreshProps={setShouldRefresh}
// 							/>
// 						}
// 					/>
//           <Route/>
//         </Routes>
// 	</div>
//   )
// }

// export default App;
