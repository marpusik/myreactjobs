import React from 'react';
import PrimaryCard from '../primaryCard/PrimaryCard';
import ProductsTitle from '../products/productsTitle/ProductsTitle';
import bag from './../../assets/images/shopItems/spare-parts/bag.png';
import airflow from './../../assets/images/shopItems/spare-parts/airflow.png';
import brp from './../../assets/images/shopItems/spare-parts/brp.png';
import equipment from './../../assets/images/shopItems/spare-parts/equipment.png';


import './Products.css';



function Products(props) {

  return (
    <div className="products">
      <ProductsTitle text={props.text}/>
      <nav className="productsMenu">
        <a className="productsLink" href="tut.by">запчасти</a>
        <a className="productsLink" href="tut.by">моторы</a>
        <a className="productsLink" href="tut.by">шины </a>
        <a className="productsLink" href="tut.by">электроника</a>
        <a className="productsLink" href="tut.by">инструменты</a>
        <a className="productsLink" href="tut.by">аксессуары </a>
      </nav>
      <div className="productsCards">
        <PrimaryCard img={bag} title="Водонепроницаемый Рюкзак" price="9 800"/>
        <PrimaryCard img={airflow} title="Спасательный жилет BRP Men's Airflow PFD
" price="6 900"/>
        <PrimaryCard img={brp} title="BRP Audio-Premium System" price="68 000"/>
        <PrimaryCard img={equipment} title="Спасательное
снаряжение" />

      </div>



    </div>
  );
}

export default Products;
