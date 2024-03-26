import logo from "./logo.svg";
import "./App.css";
import { Recipiefinder } from "./component/recipieFinder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecipieInfo } from "./component/RecipieInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recipiefinder />} />
          <Route path="/:MealId" element={<RecipieInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
