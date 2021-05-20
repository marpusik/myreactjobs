import React from 'react';
import { Link } from 'react-router-dom';

import s from './Card.module.scss';


function Card({ title, img }) {
  return (

    <div className={s.card}>

      <div className={s.wrapContent}>
        <h3 className={s.caption}>{title}</h3>
        <Link to="/catalog" className={s.more} >Подробнее 	&gt;</Link>
      </div>
      <img className={s.img} src={img} alt="card" />

    </div>
  );
}

export default Card;
