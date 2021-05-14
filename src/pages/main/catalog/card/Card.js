import React from 'react';


import s from './Card.module.scss';


function Card({ title, img }) {
  return (

    <div className={s.card}>

      <h3 className="mainCaption">{title}</h3>

      <img className="mainImg" src={img} alt="" />

    </div>
  );
}

export default Card;
