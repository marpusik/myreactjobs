import React from 'react';

import atv from './../../../assets/images/pages/atv.png'
import utv from './../../../assets/images/pages/utv.png'

import s from './Banner.module.scss';



function Banner() {
  return (

    <div className={s.banner}>
      <div className="bannerImgs">
        <img className="bannerAtv" src={atv} alt="" />
        <img className="bannerUtv" src={utv} alt="" />
      </div>
      <h3 className="bannerTitle">CКИДКИ на все запчасти до 70%</h3>
      <button className="bannerBtn">Посмотреть все</button>
    </div>
  );
}

export default Banner;
