import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2>Counter App</h2>

        <div className="count-display">{count}</div>

        <div className="button-group">
          <button onClick={() => setCount(count - 1)} className="btn minus">
            −
          </button>

          <button onClick={() => setCount(0)} className="btn reset">
            Reset
          </button>

          <button onClick={() => setCount(count + 1)} className="btn plus">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
