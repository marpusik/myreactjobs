import React from 'react';
import slider from './../../../assets/images/pages/slider.jpg';



import s from './PromoSlider.module.scss';



function PromoSlider() {
  return (

    <div className={s.promoSlider}>

      <img className={s.img} src={slider} alt="" />
      <h2 className={s.title}>Почувствуй скорость и экстрим</h2>
      <button className={s.left}></button>
      <button className={s.right}></button>


    </div>
  );
}

export default PromoSlider;
