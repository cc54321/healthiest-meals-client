import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>Recipe App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/search-form">Search Recipes</Link>
      </div>
    </nav>
  );
};

export default NavBar;