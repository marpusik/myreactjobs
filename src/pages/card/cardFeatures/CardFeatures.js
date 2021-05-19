import React from 'react';
import ProductCode from '../../../components/productCode/ProductCode';
import Title from '../../../components/title/Title';
import s from './CardFeatures.module.scss';


import './CardFeatures.module.scss';
import Heart from '../../../components/heart/Heart';
import BarChart from '../../../components/barChart/BarChart';
import RatingPage from '../../../components/rating/Rating';
import FeaturesMain from './featuresMain/FeaturesMain';



function CardFeatures() {
  return (
    <>
    <Title
    text="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic"
    />
    <ProductCode
    code="366666-2"
    />
    <div className={s.rating}>
      <Heart/>
      <BarChart/>
      <RatingPage/>
    </div>
    <FeaturesMain/>
    </>
  );
}

export default CardFeatures;
