import { Link } from "react-router-dom";
import { items } from "./Data";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const Product = ({ items, cart, setCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  //add to cart function
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {currentItems.map((product) => (
            <div key={product.id} className="col">
              <div className="card h-100">
                <Link
                  to={`/product/${product.id}`}
                  className="d-flex justify-content-center align-items-center p-3"
                  style={{ minHeight: "200px" }}
                >
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt={product.title}
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                  />
                </Link>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text flex-grow-1">{product.description}</p>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
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
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-4" aria-label="Product pagination">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              
              {[...Array(totalPages)].map((_, index) => (
                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default Product;
