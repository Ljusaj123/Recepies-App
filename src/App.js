import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleMeal from "./components/SingleMeal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Header />
              <Explore />
              <Footer />
            </div>
          }
        />
        <Route path="/meals/:id" element={<SingleMeal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
