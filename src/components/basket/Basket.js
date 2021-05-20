import React from 'react';

import basket from './../../assets/icons/BasketIcon.svg';

import s from './Basket.module.scss';




function Basket() {
  return (
    <img className={s.basket} src={basket} alt="basket"  />
  );
}

export default Basket;



























