import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>React Mini Applications Hub</h1>
      <p className="subtitle">
        A collection of small React projects built while learning.
      </p>

      <div className="grid">
        <Link to="/counter" className="card">
          <span className="icon">🔢</span>
          <h3>Counter</h3>
        </Link>

        <Link to="/todo" className="card">
          <span className="icon">📝</span>
          <h3>Todo</h3>
        </Link>

        <Link to="/calculator" className="card">
          <span className="icon">🧮</span>
          <h3>Calculator</h3>
        </Link>

        <Link to="/weather" className="card">
          <span className="icon">🌦</span>
          <h3>Weather</h3>
        </Link>

        <Link to="/shopping" className="card">
          <span className="icon">🛒</span>
          <h3>Shopping Cart</h3>
        </Link>

        <Link to="/profile" className="card">
          <span className="icon">👤</span>
          <h3>Profile Creator</h3>
        </Link>

        <Link to="/validate" className="card">
          <span className="icon">✅</span>
          <h3>Form Validation</h3>
        </Link>

        <Link to="/accordion" className="card">
          <span className="icon">📂</span>
          <h3>Profile Viewer</h3>
        </Link>

        <Link to="/colorpicker" className="card">
          <span className="icon">🎨</span>
          <h3>Color Picker</h3>
        </Link>

        <Link to="/movies" className="card">
          <span className="icon">🎬</span>
          <h3>Movie Search</h3>
        </Link>
      </div>
    </div>
  );
}

export default Home;
