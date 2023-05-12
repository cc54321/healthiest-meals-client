import React from "react";

function RecipeForm(props) {
  const { setRecipesProps, setShouldRefreshProps, history } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    // logic to handle form submission
    // ...

    // Add the new recipe to the recipes array
    const newRecipe = { /* recipe data */ };
    const updatedRecipes = [...props.recipes, newRecipe];
    setRecipesProps(updatedRecipes);

    // Set shouldRefresh to true to trigger re-fetching of recipes from API
    setShouldRefreshProps(true);

    // Redirect to the recipes page
    history.push("/recipes");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;