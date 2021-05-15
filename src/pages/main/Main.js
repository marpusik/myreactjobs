import React from 'react';

import PromoCard from './promoCard/PromoCard';
import PromoSlider from './promoSlider/PromoSlider';
import Products from './products/Products';
import Form from './form/Form';
import Banner from './banner/Banner';



import s from './Main.module.scss';
import Catalog from './catalog/Catalog';





function Main() {
  return (
    <main className={s.main}>

      <div className={s.promo}>
        <PromoSlider />
        <PromoCard />
      </div>


      <div className="search">
        <Form />
      </div>

      <Catalog />

      <Products text="Популярные товары" />

      <button className={s.showBtn}>Показать еще</button>

      <Banner />

      <Products text="С этим товаром покупают" />


    </main>
  );
}

export default Main;
