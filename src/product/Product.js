import React from "react";
import PropTypes from "prop-types";
import ProductPrice from "../product-price/ProductPrice";

const Product = ({ product }) => {
  return (
    <div className="product-title">
      <img src={product.image} alt={product.title} className="product-image" />
      <div>
        <span className="product-brand">{product.brand}</span>
        <span className="product-title">{product.title}</span>
        <ProductPrice price={product.price} />
      </div>
    </div>
  );
};

Product.defaultProps = {
  product: {
    image:
      "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/801e88f5897a411a9e77a8ba0101c79a_9366/nmd_r1-shoes.jpg",
    title: "Default",
    brand: "Default Brand",
    price: {
      value: 0,
      currencySymbol: "def"
    }
  }
};

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string
  })
};

export default Product;
