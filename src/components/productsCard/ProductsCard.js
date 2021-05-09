import React from 'react';
import ProductsPrice from '../productsPrice/ProductsPrice';

import './ProductsCard.css';



function ProductsCard() {
  return (

    <div className="productsCard">
      <img className="productsImg" src="" alt=""  />
      <h3 className="productsCardtitle">Водонепроницаемый Рюкзак</h3>
      <ProductsPrice text="9800"/>
      <button className="productsBtn">

      </button>

    </div>
  );
}

export default ProductsCard;
