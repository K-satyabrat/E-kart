import { Link } from "react-router-dom";

export const Cart = ({ setCart, cart, data }) => {
  return (
    <>
      {/* Main container for the cart */}
      <div className="cart-container">
        {/* Display message if the cart is empty */}
        {cart.length === 0 ? (
          <div className="text-center py-5">
            <h1 className="mb-4">Cart is Empty</h1>
            <Link to={"/"} className="btn btn-warning">
              Continue Shopping...
            </Link>
          </div>
        ) : (
          // Display the list of products in the cart
          cart.map((product) => (
            <div
              key={product.id}
              className="card cart-card"
            >
              <div className="row g-0">
                {/* Product image */}
                <div className="col-md-4 col-sm-12">
                  <img
                    src={product.imgSrc}
                    className="img-fluid rounded-start p-2"
                    alt="Product"
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                  />
                </div>

                {/* Product details */}
                <div className="col-md-8 col-sm-12">
                  <div className="card-body text-center text-md-start">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>

                    {/* Display product price */}
                    <button className="btn btn-primary mx-2 mb-2">
                      {product.price} ₹
                    </button>

                    {/* Buy Now button */}
                    <button className="btn btn-warning mb-2">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Display checkout and clear cart buttons when the cart is not empty */}
      {cart.length !== 0 && (
        <div className="container text-center my-4">
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <button className="btn btn-warning">CheckOut</button>
            <button onClick={() => setCart([])} className="btn btn-danger">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};
