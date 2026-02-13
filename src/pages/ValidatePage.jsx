import ValidateApp from "../apps/Validate/ValidateApp";
import { Link } from "react-router-dom";

function ValidatePage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <Link to="/">⬅ Back</Link>
      <ValidateApp />
    </div>
  );
}

export default ValidatePage;
