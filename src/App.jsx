import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CounterPage from "./pages/CounterPage";
import TodoPage from "./pages/TodoPage";
import CalculatorPage from "./pages/CaluculatorPage";
import WeatherPage from "./pages/WeatherPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProfilePage from "./pages/ProfilePage";
import ValidatePage from "./pages/ValidatePage";
import AccordionPage from "./pages/AccordionPage";
import ColorPickerPage from "./pages/ColorPickerPage";
import MoviePage from "./pages/MoviePage";
import "./App.css"





function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/weather" element={<WeatherPage />} />
      <Route path="/shopping" element={<ShoppingCartPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/validate" element={<ValidatePage />} />
      <Route path="/accordion" element={<AccordionPage />} />
      <Route path="/colorpicker" element={<ColorPickerPage />} />
      <Route path="/movies" element={<MoviePage />} />

    </Routes>
  );
}

export default App;
