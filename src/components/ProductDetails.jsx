import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data.jsx";
import Product from "./Product.jsx";
import { ToastContainer, toast } from "react-toastify";

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProdcuts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);
    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );
    setRelatedProdcuts(relatedProducts);
  }, [id, product.category]);

  const addTocart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);

    //react tostify
    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      <div className="container py-4">
        <div className="row g-4">
          {/* Product Image */}
          <div className="col-md-6">
            <div className="d-flex justify-content-center align-items-center h-100">
              <img 
                src={product.imgSrc} 
                alt={product.title}
                className="img-fluid"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="col-md-6">
            <div className="card h-100 border-0">
              <div className="card-body d-flex flex-column justify-content-center">
                <h2 className="card-title mb-3">{product.title}</h2>
                <p className="card-text mb-4">{product.description}</p>
                <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                  <button className="btn btn-primary">
                    {product.price} ₹
                  </button>
                  <button
                    onClick={() =>
                      addTocart(
                        product.id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )
                    }
                    className="btn btn-warning"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-5">
            <h2 className="text-center mb-4">Related Products</h2>
            <Product items={relatedProducts} cart={cart} setCart={setCart} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
