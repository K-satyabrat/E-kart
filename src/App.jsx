import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import { Cart } from "./components/Cart";
import SearchItem from "./components/SearchItem";
import { items } from "./components/Data";
import { useState } from "react";

function App() {
  // State to manage product data and cart
  const [data, setData] = useState(items);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      {/* Navbar with cart and search functionality */}
      <Navbar cart={cart} setData={setData} />

      {/* Application routes */}
      <Routes>
        {/* Home Page: Displays product list */}
        <Route
          path="/"
          element={<Product cart={cart} setCart={setCart} items={data} />}
        />

        {/* Product Details Page: Displays details of a specific product */}
        <Route
          path="/product/:id"
          element={<ProductDetails cart={cart} setCart={setCart} />}
        />

        {/* Search Results Page: Displays filtered products based on search */}
        <Route
          path="/search/:term"
          element={<SearchItem cart={cart} setCart={setCart} />}
        />

        {/* Cart Page: Displays items in the cart */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        {/* Fallback Route: Redirects to home if no route matches */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

