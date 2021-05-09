import React from 'react';

import './ProductsPrice.css';



function ProductsPrice(props) {
  return (
    <span className="productsPrice">{props.text} &#8381; </span>

  );
}

export default ProductsPrice;
