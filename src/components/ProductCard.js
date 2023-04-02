import React from 'react';

const ProductCard = ({ product, handleOpen, setSelectedProduct }) => {
  const { title, thumbnail, description } = product;
  return (
    <div
      className="card"
      onClick={() => {
        setSelectedProduct(product);
        handleOpen();
      }}
    >
      <div className="image-container">
        <img alt="propduct" className="card-image" src={thumbnail} />
      </div>
      <p className="title">{title}</p>
      <span className="description">{description}</span>
    </div>
  );
};

export default ProductCard;
