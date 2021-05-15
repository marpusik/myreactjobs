import React from 'react';

import s from './Price.module.scss';



function Price(props) {
  return (
    <span className={s.price}>{props.price} &#8381; </span>

  );
}

export default Price;
