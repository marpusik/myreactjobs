import React from 'react';

import './Heart.css';

import heart from './../../assets/icons/LikeIcon.svg'



function Heart() {
  return (
    <img className="heart" src={heart} alt=""  />
  );
}

export default Heart;


