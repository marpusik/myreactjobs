import React from 'react';
import ProductsCard from '../productsCard/ProductsCard';
import ProductsTitle from './../productsTitle/ProductsTitle';

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
        <ProductsCard />
      </div>



    </div>
  );
}

export default Products;
