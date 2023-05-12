import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate("/recipes");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button onClick={handleLinkClick}>Recipes</button>
        </li>
        <li>
          <Link to="/recipe-form">Add Recipe</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
