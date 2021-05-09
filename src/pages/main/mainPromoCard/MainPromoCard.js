import React from 'react';
import ProductsPrice from '../../../components/productsPrice/ProductsPrice';


import './MainPromoCard.css';



function MainPromoCard() {
  return (

    <div className="mainPromoCard">
      <span className="mainMark">акция</span>

      <ProductsPrice text="190 000" />

      <span className="mainPriceOld">225 000 &#8381; </span>

      <img className="mainImgCard" src="" alt="" />

      <h3 className="mainTitleCard">Лодочный мотор
Suzuki DF9.9BRS</h3>

      <span className="mainValidity">
        Акция действует до <time className="mainData" datetime="2020-08-31">31.08.2020</time>
      </span>

    </div>
  );
}

export default MainPromoCard;
