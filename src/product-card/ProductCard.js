import React from "react";
import "./style.css";

import PropTypes from "prop-types";
import ProductPrice from "../product-price/ProductPrice";

const ProductCard = (props) => {
  const { image, title, brand, price, id } = props;

  return (
    <div className="product-title">
      <img src={image} alt={title} className="product-image" />
      <div>
        <span className="product-brand">{brand}</span>
        <span className="product-title">{title}</span>
        <ProductPrice price={price} />
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
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

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string
  })
};

export default ProductCard;
