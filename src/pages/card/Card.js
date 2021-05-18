import React from 'react';
import Adress from './adress/Adress';



import s from './Card.module.scss';
import CardMenu from './cardMenu/CardMenu';





function Card() {
  return (

    <div className={s.card}>


      <CardMenu />
      <Adress />

    </div>

  );
}

export default Card;
