import React from "react";
import Modal from "react-modal";
import styles from "./modal.module.css";

function ProductModal(props) {
  const { product, closeModal } = props;
  return (
    <Modal
      isOpen={product}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className={styles.overlay}
    >
      <span className="close" onClick={closeModal}>
        &times;
      </span>
      <div className="product-info">
        <img src={product.imageUrl} alt={product.title} />
        <p>{product.title}</p>
        <p>
          {product.desc} ${product.price}
        </p>
      </div>
    </Modal>
  );
}

export default ProductModal;
