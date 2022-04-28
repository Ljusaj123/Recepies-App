import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleMeal from "./pages/SingleMeal";
import Home from "./pages/Home";
import Recepies from "./pages/Recepies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Home />
            </div>
          }
        />
        <Route path="/recepies/" element={<Recepies />} />
        <Route path="/meals/:id" element={<SingleMeal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
