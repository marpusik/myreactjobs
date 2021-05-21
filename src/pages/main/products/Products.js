import React from 'react';
import Card from '../../../components/card/Card'
import Title from '../../../components/title/Title';
import Menu from './menu/Menu';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper/core';

import bag from '../../../assets/images/shopItems/spare-parts/bag.png';
import airflow from '../../../assets/images/shopItems/spare-parts/airflow.png';
import brp from '../../../assets/images/shopItems/spare-parts/brp.png';
import equipment from '../../../assets/images/shopItems/spare-parts/equipment.png';
import audio from '../../../assets/images/shopItems/spare-parts/audio.png';
import echomap from '../../../assets/images/shopItems/spare-parts/echomap.png';
import key from '../../../assets/images/shopItems/spare-parts/key.png';
import suit from '../../../assets/images/shopItems/spare-parts/suit.png';


import s from './Products.module.scss';


SwiperCore.use([Navigation]);

function Products(props) {

  return (
    <div className={s.products}>
      <Title text={props.text} />
      <Menu />


      <div className={s.slider}>

        <Swiper navigation={true} slidesPerView={4} className={s.mySwiper}>
          <SwiperSlide className={s.slid}>
            <Card img={bag} title="Водонепроницаемый Рюкзак" price="9 800 &#8381;" />
          </SwiperSlide>

          <SwiperSlide className={s.slid}>
            <Card img={airflow} title="Спасательный жилет BRP Men's Airflow PFD" price="6 900 &#8381;" />
          </SwiperSlide>


          <SwiperSlide className={s.slid}>
            <Card img={brp} title="BRP Audio-Premium System" price="68 000 &#8381;" />
          </SwiperSlide>

          <SwiperSlide className={s.slid} >
            <Card img={equipment} title="Спасательное снаряжение" />
          </SwiperSlide>

          <SwiperSlide className={s.slid}>
          <Card img={audio} title="BRP Audio-портативная система" />
          </SwiperSlide>

          <SwiperSlide className={s.slid}>
          <Card img={echomap} title="Garmin Echomap Plus 62cv" price="45 800 &#8381;" />
          </SwiperSlide>


          <SwiperSlide className={s.slid}>
          <Card img={key} title="RF D.E.S.S.TM Key" />
          </SwiperSlide>

          <SwiperSlide className={s.slid}>
          <Card img={suit} title="Мужской костюм 3мм" price="7000 &#8381;" />
          </SwiperSlide>
        </Swiper>

        <div className={s.none}>
          <Card img={audio} title="BRP Audio-портативная система" />
          <Card img={echomap} title="Garmin Echomap Plus 62cv" price="45 800 &#8381;" />
          <Card img={key} title="RF D.E.S.S.TM Key" />
          <Card img={suit} title="Мужской костюм 3мм" price="7000 &#8381;" />

        </div>

      </div>



    </div>
  );
}

export default Products;
