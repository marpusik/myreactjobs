import React from 'react';
import PrimaryCard from '../primaryCard/PrimaryCard';
import ProductsTitle from '../products/productsTitle/ProductsTitle';
import img1 from './../../assets/images/pages/BoatsCatalog.png';

import './Products.css';



function Products() {



  return (
    <div className="products">
      <ProductsTitle text="Популярные товары" />
      <ProductsTitle text="С этим товаром покупают" />
      <nav className="productsMenu">
        <a className="productsLink" href="tut.by">запчасти</a>
        <a className="productsLink" href="tut.by">моторы</a>
        <a className="productsLink" href="tut.by">шины </a>
        <a className="productsLink" href="tut.by">электроника</a>
        <a className="productsLink" href="tut.by">инструменты</a>
        <a className="productsLink" href="tut.by">аксессуары </a>
      </nav>
      <div className="productsCard">
        <PrimaryCard img={img1} title="Водонепроницаемый Рюкзак" price="9800"/>
        <PrimaryCard  />
        <PrimaryCard  />
      </div>



    </div>
  );
}

export default Products;
