import React from 'react';
import { Link } from 'react-router-dom';

import s from './Card.module.scss';


function Card({ title, img, link }) {
  return (

    <Link to={`/card${link}`}>

    <div className={s.card}>

      <div className={s.wrapContent}>
        <h3 className={s.caption}>{title}</h3>
        <span className={s.more} >Подробнее 	&gt;</span>
      </div>
      <img className={s.img} src={img} alt="card" />

    </div>

    </Link>
  );
}

export default Card;
