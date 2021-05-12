import React from 'react';
import Basket from '../basket/Basket';
import Heart from '../heart/Heart';
import Price from '../price/Price';
import Sale from '../sale/Sale';

import './PrimaryCard.css';



function PrimaryCard({ img, title, price }) {
  return (

    <div className="primaryCard">
      <Sale/>
      <Heart />
      <img className="primaryImg" src={img} alt="" />
      <h3 className="primaryCardtitle">{title}</h3>
      <Price price={price} />
      <span className="primaryPriceNone">нет в наличии</span>
      <button className="primaryBtn">
        <Basket />
      </button>
      <button className="primaryReport">Сообщить о поступлении</button>
      <div className="primaryLook">посмотреть товар</div>

    </div>
  );
}

export default PrimaryCard;



