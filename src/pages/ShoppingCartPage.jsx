import { Link } from "react-router-dom";
import Cart from "../apps/Cart/Cart"

function ShoppingCartPage() {
  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back to Home</Link>
      <Cart />
    </div>
  );
}

export default ShoppingCartPage;
 