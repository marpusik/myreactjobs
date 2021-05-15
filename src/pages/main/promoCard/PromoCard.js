import React from 'react';
import Price from '../../../components/price/Price';


import suzuki from './../../../assets/images/shopItems/engine/suzuki.png';

import s from './PromoCard.module.scss';




function PromoCard() {
  return (

    <div className={s.promoCard}>
      <span className="mainMark">акция</span>

      <Price text="190 000" />

      <span className="mainPriceOld">225 000 &#8381; </span>

      <img className="mainImgCard" src={suzuki} alt="" />

      <h3 className="mainTitleCard">Лодочный мотор
Suzuki DF9.9BRS</h3>

      <span className="mainValidity">
        Акция действует до <time className="mainData" datetime="2020-08-31">31.08.2020</time>
      </span>

    </div>
  );
}

export default PromoCard;
