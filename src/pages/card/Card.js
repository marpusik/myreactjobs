import React from 'react';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Adress from './adress/Adress';
import CardFeatures from './cardFeatures/CardFeatures';
import CardMenu from './cardMenu/CardMenu';




import s from './Card.module.scss';
import ProductsItem from "./carditem/productsitem/ProductsItem";





function Card() {
  return (

    <div className={s.card}>
        <Breadcrumb />
        <CardFeatures />
        <CardMenu />
      <Adress />

    </div>

  );
}

export default Card;
