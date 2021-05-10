import React from 'react';

import './Basket.css';

import basket from './../../assets/icons/BasketIcon.svg'



function Basket() {
  return (
    <img className="basket" src={basket} alt=""  />
  );
}

export default Basket;


