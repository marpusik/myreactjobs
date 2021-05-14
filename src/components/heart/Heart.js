import React from 'react';

import heart from './../../assets/icons/LikeIcon.svg'

import s from './Heart.module.scss';




function Heart() {
  return (
    <img className={s.heart} src={heart} alt=""  />
  );
}

export default Heart;


