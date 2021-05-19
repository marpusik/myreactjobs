import React from 'react';
import Adress from './adress/Adress';



import s from './Card.module.scss';
import CardFeatures from './cardFeatures/CardFeatures';
import CardMenu from './cardMenu/CardMenu';





function Card() {
  return (

    <div className={s.card}>

      <CardFeatures/>
      <CardMenu />
      <Adress />

    </div>

  );
}

export default Card;
