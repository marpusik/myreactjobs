import React from 'react';


// import { Link } from 'react-router-dom';


import s from './Burger.module.scss';




function Burger() {


  return (
    <button className={s.burger}>
      <span className={s.burgerLine}> </span>
    </button>

  );
}

export default Burger;

