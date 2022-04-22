import React from "react";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <h1>Tasty Recepies</h1>
        </div>
        <div className="header-info">
          <h2>
            Get yourself the best recepies inspiration for lunch! Or party!
          </h2>
          <button className="explore-button">
            <a href="#explore">Explore</a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
