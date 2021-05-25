import React from 'react';

import Card from '../../../components/card/Card'
import Title from './title/Title';
import Menu from './menu/Menu';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {ReactComponent as SampleNextArrow} from "../../../assets/icons/Vector.svg"
import {ReactComponent as SamplePrevArrow} from "../../../assets/icons/prev.svg"

import s from './Products.module.scss';



function Products(props) {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (


    <div className={s.products}>
      <Title text={props.text} />
      <Menu />

      <Slider {...settings} className={s.slider}>
        <Card img={props.data1.img} title={props.data1.title} price={props.data1.price} link={props.data1.link} className={s.margin}/>
        <Card img={props.data2.img} title={props.data2.title} price={props.data2.price} link={props.data2.link} className={s.margin}/>
        <Card img={props.data3.img} title={props.data3.title} price={props.data3.price} link={props.data3.link} className={s.margin}/>
        <Card img={props.data4.img} title={props.data4.title} price={props.data4.price} link={props.data4.link} className={s.margin}/>
        <Card img={props.data5.img} title={props.data5.title} price={props.data5.price} link={props.data5.link} className={s.margin}/>
        <Card img={props.data6.img} title={props.data6.title} price={props.data6.price} link={props.data6.link} className={s.margin}/>
        <Card img={props.data7.img} title={props.data7.title} price={props.data7.price} link={props.data7.link} className={s.margin}/>
        <Card img={props.data8.img} title={props.data8.title} price={props.data8.price} link={props.data8.link} className={s.margin}/>
      </Slider>


    </div>
  );
}

export default Products;
