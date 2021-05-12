import React from 'react';
import PrimaryCard from '../primaryCard/PrimaryCard';
import ProductsTitle from '../products/productsTitle/ProductsTitle';
import bag from './../../assets/images/shopItems/spare-parts/bag.png';
import airflow from './../../assets/images/shopItems/spare-parts/airflow.png';
import brp from './../../assets/images/shopItems/spare-parts/brp.png';
import equipment from './../../assets/images/shopItems/spare-parts/equipment.png';
import audio from './../../assets/images/shopItems/spare-parts/audio.png';
import echomap from './../../assets/images/shopItems/spare-parts/echomap.png';
import key from './../../assets/images/shopItems/spare-parts/key.png';
import suit from './../../assets/images/shopItems/spare-parts/suit.png';


import './Products.css';



function Products(props) {

  return (
    <div className="products">
      <ProductsTitle text={props.text} />
      <nav className="productsMenu">
        <a className="productsLink" href="tut.by">запчасти</a>
        <a className="productsLink" href="tut.by">моторы</a>
        <a className="productsLink" href="tut.by">шины </a>
        <a className="productsLink" href="tut.by">электроника</a>
        <a className="productsLink" href="tut.by">инструменты</a>
        <a className="productsLink" href="tut.by">аксессуары </a>
      </nav>
      <div className="productsCards">
        <PrimaryCard img={bag} title="Водонепроницаемый Рюкзак" price="9 800" />
        <PrimaryCard img={airflow} title="Спасательный жилет BRP Men's Airflow PFD" price="6 900" />
        <PrimaryCard img={brp} title="BRP Audio-Premium System" price="68 000" />
        <PrimaryCard img={equipment} title="Спасательное снаряжение" />

        <div className="none">
        <PrimaryCard img={audio} title="BRP Audio-портативная система" />
        <PrimaryCard img={echomap} title="Garmin Echomap Plus 62cv" price="45 800"/>
        <PrimaryCard img={key} title="RF D.E.S.S.TM Key" />
        <PrimaryCard img={suit} title="Мужской костюм 3мм" price="7000" />
        </div>


      </div>



    </div>
  );
}

export default Products;
