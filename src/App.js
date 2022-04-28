import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleMeal from "./pages/SingleMeal";
import Home from "./pages/Home";

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
        <Route path="/meals/:id" element={<SingleMeal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
