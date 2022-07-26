import React, { useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "./ProductModal";
import Bounce from "react-reveal/Bounce";
import NoResult from "./NoResult";

function Products(props) {
  const [product, setProduct] = useState("");
  const openModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(false);
  };
  return (
    <Bounce left cascade>
      <div className="products">
        {props.products.map((product) => (
          <div className="product-item" key={product.id}>
            <a href="#" onClick={() => openModal(product)}>
              <img src={product.imageUrl} alt={product.title} />
            </a>
            <div className="info">
              <p>{product.title}</p>
              <span>${product.price}</span>
            </div>
            <div className="button">
              <button onClick={() => props.addTOCart(product)}>
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
        <ProductModal product={product} closeModal={closeModal} />
      </div>
    </Bounce>
  );
}

export default Products;
