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
      
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h2 className="card-title">{product.title}</h2>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">
            {product.price}
            {" ₹"}
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
      <h1 className="text-center">Related Products</h1>
      <Product items={relatedProducts} cart={cart} setCart={setCart} />
    </>
  );
};

export default ProductDetails;
