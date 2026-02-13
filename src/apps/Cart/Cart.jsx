import { useState } from "react";
import "./Cart.css"; // Make sure this file exists

export default function Cart() {
  const [online, setOnline] = useState(true);

  const products = [
    { id: 1, name: "Laptop", price: 55000, emoji: "💻" },
    { id: 2, name: "Phone", price: 18000, emoji: "📱" },
    { id: 3, name: "Watch", price: 2500, emoji: "⌚" },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((i) => i.productId === product.id);
      if (found) {
        return prev.map((i) =>
          i.productId === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [{ productId: product.id, qty: 1 }, ...prev];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((i) => i.productId !== productId));
  };

  const changeQty = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.productId === productId ? { ...i, qty: i.qty + delta } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const cartWithDetails = cart.map((i) => ({
    ...i,
    product: products.find((p) => p.id === i.productId),
  }));

  const total = cartWithDetails.reduce(
    (s, it) => s + (it.product?.price || 0) * it.qty,
    0
  );

  return (
    <div className="app-wrap">
      <div className="shell">
        <header className="shop-head">
          <div className="brand">
            <div className="logo">🛍️</div>
            <div>
              <h1>HappyShop</h1>
              <p>Bright toys & gadgets</p>
            </div>
          </div>

          <button
            className="btn btn-ghost"
            onClick={() => setOnline((p) => !p)}
          >
            {online ? "Online" : "Offline"}
          </button>
        </header>

        <main className="grid">
          {/* PRODUCTS */}
          <section className="products-wrap">
            <h2>Products</h2>

            <div className="products">
              {products.map((product) => (
                <div key={product.id} className="card">
                  <div className="product-emoji">
                    {product.emoji}
                  </div>

                  <div className="meta">
                    <div className="pname">{product.name}</div>
                    <div className="price">
                      ₹{product.price.toLocaleString()}
                    </div>
                  </div>

                  <button
                    className="btn btn-add"
                    onClick={() => addToCart(product)}
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* CART */}
          <aside className="cart">
            <h2>Cart</h2>

            {cartWithDetails.length === 0 ? (
              <p className="empty-note">
                Your cart is empty.
              </p>
            ) : (
              <>
                {cartWithDetails.map((item) => (
                  <div key={item.productId} className="cart-item">
                    <div>{item.product?.emoji}</div>

                    <div>
                      <div>{item.product?.name}</div>
                      <div>
                        ₹{item.product?.price.toLocaleString()}
                      </div>
                    </div>

                    <div className="qtywrap">
                      <button
                        className="qtybtn"
                        onClick={() =>
                          changeQty(item.productId, -1)
                        }
                      >
                        -
                      </button>

                      <span>{item.qty}</span>

                      <button
                        className="qtybtn"
                        onClick={() =>
                          changeQty(item.productId, 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="btn btn-ghost"
                      onClick={() =>
                        removeFromCart(item.productId)
                      }
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className="total">
                  <strong>Total:</strong>
                  <span>
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                <div className="cart-actions">
                  <button className="btn btn-add">
                    Checkout
                  </button>

                  <button
                    className="btn btn-ghost"
                    onClick={() => setCart([])}
                  >
                    Clear
                  </button>
                </div>
              </>
            )}
          </aside>
        </main>

        <footer className="footer">
          <small>HappyShop v1.0</small>
        </footer>
      </div>
    </div>
  );
}
