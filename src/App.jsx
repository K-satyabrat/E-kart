import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import { Cart } from "./components/Cart";
import SearchItem from "./components/SearchItem";
import { items } from "./components/Data";
import { useState } from "react";

function App() {
  const [data, setData] = useState(items);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar cart={cart} setData={setData} />
      <Routes>
        <Route
          path="/"
          element={<Product cart={cart} setCart={setCart} items={data} />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails cart={cart} setCart={setCart} />}
        />

        <Route
          path="/search/:term"
          element={<SearchItem cart={cart} setCart={setCart} />}
        />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
