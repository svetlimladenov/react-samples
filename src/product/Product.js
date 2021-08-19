import React from "react";
import ProductPrice from "../product-price/ProductPrice";

const Product = ({ product, Price }) => {
  return (
    <div className="product-title">
      <img src={product.image} alt={product.title} className="product-image" />
      <div>
        <span className="product-brand">{product.brand}</span>
        <span className="product-title">{product.title}</span>
        <ProductPrice price={product.price} />
        <Price price={product.price} />
      </div>
    </div>
  );
};

export default Product;
