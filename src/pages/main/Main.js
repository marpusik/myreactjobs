import React from 'react';
import './Main.css';
import Breadcrumb from './../../components/breadcrumb/Breadcrumb';
import MainPromoCard from './mainPromoCard/MainPromoCard';
import slider from './../../assets/images/pages/slider.jpg';
import MainCard from './mainCard/MainCard';
import atv from './../../assets/images/pages/atvsCatalogBaner.png'
import pwc from './../../assets/images/pages/pwcsCatalog.png'
import boat from './../../assets/images/pages/boatsCatalog.png'
import snow from './../../assets/images/pages/snowmobilesCatalog.png'
import utv from './../../assets/images/pages/utvsCatalogBaner.png'
import engine from './../../assets/images/pages/enginesCatalog.png'
import Products from '../../components/products/products';


function Main() {
  return (
    <main className="main">
      <Breadcrumb />


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

            <input id="radio1" type="radio" name="search" value="Поиск по номеру" />
            <label for="radio1">Поиск по номеру</label>

            <input id="radio2" type="radio" name="search" value="Поиск по марке" checked />
            <label for="radio2">Поиск по марке</label>


            <input id="radio3" type="radio" name="search" value="Поиск по названию товара" />
            <label for="radio3">Поиск по названию товара</label>

          </div>

          <input className="mainInput" type="text" placeholder="Введите марку" />
          <button className="mainSearchBtn">ИСКАТЬ</button>

        </form>

        <div className="mainCatalog">
          <MainCard title="Квадроциклы" img={atv} />
          <MainCard title="Гидроциклы" img={pwc} />
          <MainCard title="Катера" img={boat} />
          <MainCard title="Снегоходы" img={snow} />
          <MainCard title="Вездеходы" img={utv} />
          <MainCard title="Двигатели" img={engine} />
        </div>

      </div>


      <Products text="Популярные товары" />

      <button className="mainShowBtn">Показать еще</button>


      <div className="banner">
        <div className="bannerImgs">
          <img className="bannerAtv" src={atv} alt="" />
          <img className="bannerUtv" src={utv} alt="" />
        </div>
        <h3 className="bannerTitle">CКИДКИ на все запчасти до 70%</h3>
        <button className="bannerBtn">Посмотреть все</button>
      </div>

      <Products text="С этим товаром покупают" />



    </main>
  );
}

export default Main;
