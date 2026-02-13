import Todo from "../apps/Todo/Todo";
import { Link } from "react-router-dom";

function TodoPage() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <Link to="/">⬅ Back</Link>
      <Todo />
    </div>
  );
}

export default TodoPage;


