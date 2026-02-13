import { Link } from "react-router-dom";
import ColorPicker from "../apps/ColorPicker/ColorPicker";

function ColorPickerPage() {
  return (
    <div style={{ padding: "40px" }}>
      <Link to="/">⬅ Back to Home</Link>
      <ColorPicker />
    </div>
  );
}

export default ColorPickerPage;
