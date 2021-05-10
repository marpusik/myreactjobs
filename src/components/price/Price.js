import React from 'react';

import './Price.css';



function Price(props) {
  return (
    <span className="price">{props.price} &#8381; </span>

  );
}

export default Price;
