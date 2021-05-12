import React from 'react';


import './Main.css';
import MainPromoCard from './mainPromoCard/MainPromoCard';
import slider from './../../assets/images/pages/slider.jpg';
import MainCard from './mainCard/MainCard';

import atv from './../../assets/images/pages/ATVsCatalogBaner.png'
import pwc from './../../assets/images/pages/PWCsCatalog.png'
import boat from './../../assets/images/pages/BoatsCatalog.png'
import snow from './../../assets/images/pages/SnowmobilesCatalog.png'
import utv from './../../assets/images/pages/UTVsCatalogBaner.png'
import engine from './../../assets/images/pages/EnginesCatalog.png'
import Products from '../../components/products/Products';


function Main() {
  return (
    <main className="main">



      <div className="mainPromo">

        <div className="mainBanner">
          <img className="mainImg" src={slider} alt="" />
          <h2 className="mainPromoTitle">Почувствуй скорость и экстрим</h2>
          <button className="left"></button>
          <button className="right"></button>
        </div>

        <MainPromoCard />

      </div>

      <div className="mainSearch">
        <form className="mainForm">
          <div className="mainRadioBtns">

          <input id="radio1" type="radio" name="search" value="Поиск по номеру"/>
          <label for="radio1">Поиск по номеру</label>

          <input id="radio2" type="radio" name="search" value="Поиск по марке" checked/>
          <label for="radio2">Поиск по марке</label>


          <input id="radio3" type="radio" name="search" value="Поиск по названию товара"/>
          <label for="radio3">Поиск по названию товара</label>

          </div>

          <input className="mainInput" type="text" placeholder="Введите марку"/>
          <button className="mainSearchBtn">ИСКАТЬ</button>

        </form>

        <div className="mainCatalog">
          <MainCard title="Квадроциклы" img={atv}/>
          <MainCard title="Гидроциклы" img={pwc}/>
          <MainCard title="Катера" img={boat}/>
          <MainCard title="Снегоходы" img={snow}/>
          <MainCard title="Вездеходы" img={utv}/>
          <MainCard title="Двигатели" img={engine}/>
        </div>

        </div>


        <Products text="Популярные товары"/>

        {/* <ProductsTitle text="С этим товаром покупают" /> */}




    </main>
  );
}

export default Main;
