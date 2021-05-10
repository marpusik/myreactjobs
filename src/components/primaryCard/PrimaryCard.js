import React from 'react';
import Heart from '../heart/Heart';
import Price from '../price/Price';

import './PrimaryCard.css';



function PrimaryCard(props) {
  return (

    <div className="primaryCard">
      <Heart/>
      <img className="primaryImg" src={props.img} alt=""  />
      <h3 className="primaryCardtitle">{props.title}</h3>
      <Price price={props.price}/>
      <button className="primaryBtn">

      </button>

    </div>
  );
}

export default PrimaryCard;
