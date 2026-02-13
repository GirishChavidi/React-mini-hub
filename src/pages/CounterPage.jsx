import Counter from "../apps/Counter/Counter";
import { Link } from "react-router-dom";

function CounterPage() {
  return (
    <div>
      <Link to="/">⬅ Back</Link>
      <h2>Counter Application</h2>
      <Counter />
    </div>
  );
}

export default CounterPage;
