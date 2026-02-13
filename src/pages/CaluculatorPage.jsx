import Calculator from "../apps/Caluculator/Caluculator";
import { Link } from "react-router-dom";

function CalculatorPage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <Link to="/">⬅ Back</Link>
      <Calculator />
    </div>
  );
}

export default CalculatorPage;
