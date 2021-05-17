import React from 'react';


import s from './Card.module.scss';


function Card({ title, img }) {
  return (

    <div className={s.card}>

      <div className={s.wrapContent}>
        <h3 className={s.caption}>{title}</h3>
        <a className={s.more} href="tut.by" >Подробнее 	&gt; </a>
      </div>
      <img className={s.img} src={img} alt="card" />

    </div>
  );
}

export default Card;
