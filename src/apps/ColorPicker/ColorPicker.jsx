import { useState } from "react";
import "./ColorPicker.css";

function ColorPicker() {
  const [color, setColor] = useState("#667eea");

  return (
    <div className="color-wrapper">
      <div className="color-card">
        <h2>Color Picker</h2>

        <div
          className="color-preview"
          style={{ backgroundColor: color }}
        ></div>

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <p className="color-code">{color}</p>
      </div>
    </div>
  );
}

export default ColorPicker;
