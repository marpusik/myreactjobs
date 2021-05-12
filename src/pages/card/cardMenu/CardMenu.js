import React from 'react';
import CardLink from './cardLink/CardLink';

import './CardMenu.css';


function CardMenu() {
  return (
    <nav className="cardMenu">
      <ul className="cardList">

        <li className="cardItem">
          <CardLink text="О товаре"/>
        </li>
        <li className="cardItem">
          <CardLink text="Характеристики"/>
        </li>
        <li className="cardItem">
          <CardLink text="Отзывы"/>
        </li>
        <li className="cardItem">
          <CardLink text="Самовывоз"/>
        </li>
        <li className="cardItem">
          <CardLink text="Доставка"/>
        </li>
        <li className="cardItem">
          <CardLink text="Сервис"/>
        </li>
        <li className="cardItem">
          <CardLink text="Гарантия"/>
        </li>


      </ul>


    </nav>
  );
}

export default CardMenu;
