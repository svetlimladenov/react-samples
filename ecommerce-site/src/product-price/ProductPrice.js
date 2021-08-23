import React from "react";

const ProductPrice = ({ price }) => (
  <p className="product-price">
    Price:
    <span>
      {price.value}

      {price.currencySymbol}
    </span>
  </p>
);

export default ProductPrice;
