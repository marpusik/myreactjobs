import React from 'react';

import './ProductsTitle.css';



function ProductsTitle(props) {
  return (
    <h2 className="productsTitle">
{props.text}
    </h2>

  );
}

export default ProductsTitle;
