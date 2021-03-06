import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <h1>Tasty Recipes</h1>
        </div>
        <div className="header-info">
          <h2>
            Get yourself the best recipes inspiration for lunch! Or party!
          </h2>
          <button className="explore-button">
            <Link to="/recepies">Explore</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
