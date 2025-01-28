import { Link } from "react-router-dom";

export const Cart = ({ setCart, cart, data }) => {
  return (
    <>
      {/* Main container for the cart */}
      <div className="container my-3" style={{ width: "54%" }}>
        {/* Display message if the cart is empty */}
        {cart.length === 0 ? (
          <div className="text-center">
            <h1>Cart is Empty</h1>
            <Link to={"/"} className="btn btn-warning">
              Continue Shopping...
            </Link>
          </div>
        ) : (
          // Display the list of products in the cart
          cart.map((product) => (
            <div
              key={product.productId}
              className="card mb-3 my-5"
              style={{ width: "700px" }}
            >
              <div className="row g-0">
                {/* Product image */}
                <div className="col-md-4">
                  <img
                    src={product.imgSrc}
                    className="img-fluid rounded-start"
                    alt="Product"
                  />
                </div>

                {/* Product details */}
                <div className="col-md-8">
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>

                    {/* Display product price */}
                    <button className="btn btn-primary mx-3">
                      {product.price} ₹
                    </button>

                    {/* Buy Now button */}
                    <button className="btn btn-warning">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Display checkout and clear cart buttons when the cart is not empty */}
      {cart.length !== 0 && (
        <div
          className="container text-center my-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="btn btn-warning mx-5">CheckOut</button>
          <button onClick={() => setCart([])} className="btn btn-danger">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};
