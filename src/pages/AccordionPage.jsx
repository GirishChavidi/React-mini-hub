import { Link } from "react-router-dom";
import Accordion from "../apps/Accordition/Accordion";

function AccordionPage() {
  return (
    <div style={{ padding: "40px" }}>
      <Link to="/">⬅ Back to Home</Link>
      <Accordion />
    </div>
  );
}

export default AccordionPage;
