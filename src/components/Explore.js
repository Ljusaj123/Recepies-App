import React from "react";
import { Link } from "react-router-dom";

function Explore() {
  return (
    <section className="explore" id="explore">
      <div className="explore-container">
        <div className="container">
          <div className="title-container">
            <h1>Food</h1>
            <button className="explore-button">
              {" "}
              <Link to="/food">Explore</Link>
            </button>
          </div>
          <img src="/pictures/bread-g32496b22f_1920.jpg" alt="" />
        </div>
        <div className="container">
          <div className="title-container">
            <h1>Cocktail</h1>
            <button className="explore-button">
              {" "}
              <Link to="/cocktail">Explore</Link>
            </button>
          </div>
          <img src="/pictures/pexels-live-on-shot-2789328.jpg" alt="" />
        </div>
        <div className="container">
          <div className="title-container">
            <h1>Beer</h1>
            <button className="explore-button">
              <Link to="/beer">Explore </Link>
            </button>
          </div>
          <img src="/pictures/jon-parry-C8eSYwQkwHw-unsplash.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Explore;
