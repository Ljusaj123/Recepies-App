import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Food from "./pages/Food.js";
import Cocktail from "./pages/Cocktail.js";
import Beer from "./pages/Beer.js";
import "./styles/css/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="beer" element={<Beer />} />
        <Route path="cocktail" element={<Cocktail />} />
        <Route path="food" element={<Food />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
