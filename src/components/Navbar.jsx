import  { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({ setData, cart }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const filterCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-Cart
          </Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="search product"
            />
          </form>
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <IoCartOutline style={{ fontSize: "1.5rem" }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

        {location.pathname == "/" && (
          <div className="nav-bar-wrapper">
            <div className="item">Filter by {"->"}</div>
            <div className="item" onClick={() => setData(items)}>
              No Filter
            </div>
            <div className="item" onClick={() => filterCategory("mobiles")}>
              Mobiles
            </div>
            <div className="item" onClick={() => filterCategory("laptops")}>
              Laptops
            </div>
            <div className="item" onClick={() => filterCategory("tablets")}>
              Tablets
            </div>
            <div onClick={() => filterPrice(29999)} className="item">
              {">="}19999
            </div>
            <div onClick={() => filterPrice(49999)} className="item">
              {">="}29999
            </div>
            <div onClick={() => filterPrice(69999)} className="item">
              {">="}69999
            </div>
            <div onClick={() => filterPrice(89999)} className="item">
              {">="}89999
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
