import React from "react";

function Explore() {
  return (
    <section className="explore">
      <div className="explore-container">
        <div className="container">
          <div className="title-container">
            <h1>Food</h1>
            <button className="explore-button">Explore</button>
          </div>
          <img src="/pictures/bread-g32496b22f_1920.jpg" alt="" />
        </div>
        <div className="container">
          <div className="title-container">
            <h1>Coctail</h1>
            <button className="explore-button">Explore</button>
          </div>
          <img src="/pictures/pexels-live-on-shot-2789328.jpg" alt="" />
        </div>
        <div className="container">
          <div className="title-container">
            <h1>Beer</h1>
            <button className="explore-button">Explore</button>
          </div>
          <img src="/pictures/jon-parry-C8eSYwQkwHw-unsplash.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Explore;
