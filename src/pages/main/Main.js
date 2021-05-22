import React from 'react';

import PromoCard from './promoCard/PromoCard';
import PromoSlider from './promoSlider/PromoSlider';
import Products from './products/Products';
import Form from './form/Form';
import Banner from './banner/Banner';
import Catalog from './catalog/Catalog';

import bag from '../../assets/images/shopItems/spare-parts/bag.png';
import airflow from '../../assets/images/shopItems/spare-parts/airflow.png';
import brp from '../../assets/images/shopItems/spare-parts/brp.png';
import equipment from '../../assets/images/shopItems/spare-parts/equipment.png';

import audio from '../../assets/images/shopItems/spare-parts/audio.png';
import echomap from '../../assets/images/shopItems/spare-parts/echomap.png';
import key from '../../assets/images/shopItems/spare-parts/key.png';
import suit from '../../assets/images/shopItems/spare-parts/suit.png';




import s from './Main.module.scss';


function Main() {

  const data1 = {
    title: "Водонепроницаемый Рюкзак",
    price: "9 800",
    img: bag,
    link: "/1"
  }

  const data2 = {
    title: "Спасательный жилет BRP Men's Airflow PFD",
    price: "6 900",
    img: airflow,
    link: "/2"
  }
  const data3 = {
    title: "BRP Audio-Premium System",
    price: "68 000",
    img: brp,
    link: "/3"
  }

  const data4 = {
    title: "Спасательное снаряжение",
    price: null,
    img: equipment,
    link: "/4"
  }

  const data5 = {
    title: "BRP Audio-портативная система",
    price: null,
    img: audio,
    link: "/5"
  }

  const data6 = {
    title: "Garmin Echomap Plus 62cv",
    price: "45 800",
    img: echomap,
    link: "/6"
  }

  const data7 = {
    title: "RF D.E.S.S.TM Key",
    price: null,
    img: key,
    link: "/7"
  }

  const data8 = {
    title: "Мужской костюм 3мм",
    price: "7 000",
    img: suit,
    link: "/8"
  }





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

      <Products text="Популярные товары" data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6} data7={data7} data8={data8}/>



      <button className={s.showBtn}>Показать еще</button>

      <Banner />

      <Products text="С этим товаром покупают"  data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6} data7={data7} data8={data8}/>


    </main>
  );
}

export default Main;
