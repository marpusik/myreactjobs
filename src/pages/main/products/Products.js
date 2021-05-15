import React from 'react';
import Card from '../card/Card';
import Title from '../title/Title';
import Menu from './menu/Menu';

import bag from '../../../assets/images/shopItems/spare-parts/bag.png';
import airflow from '../../../assets/images/shopItems/spare-parts/airflow.png';
import brp from '../../../assets/images/shopItems/spare-parts/brp.png';
import equipment from '../../../assets/images/shopItems/spare-parts/equipment.png';
import audio from '../../../assets/images/shopItems/spare-parts/audio.png';
import echomap from '../../../assets/images/shopItems/spare-parts/echomap.png';
import key from '../../../assets/images/shopItems/spare-parts/key.png';
import suit from '../../../assets/images/shopItems/spare-parts/suit.png';


import s from './Products.module.scss';




function Products(props) {

  return (
    <div className={s.products}>
      <Title text={props.text} />
      <Menu/>


      <div className={s.slider}>
        <Card img={bag} title="Водонепроницаемый Рюкзак" price="9 800" />
        <Card img={airflow} title="Спасательный жилет BRP Men's Airflow PFD" price="6 900" />
        <Card img={brp} title="BRP Audio-Premium System" price="68 000" />
        <Card img={equipment} title="Спасательное снаряжение" />


        <div className={s.none}>
          <Card img={audio} title="BRP Audio-портативная система" />
          <Card img={echomap} title="Garmin Echomap Plus 62cv" price="45 800" />
          <Card img={key} title="RF D.E.S.S.TM Key" />
          <Card img={suit} title="Мужской костюм 3мм" price="7000" />

        </div>

      </div>



    </div>
  );
}

export default Products;
