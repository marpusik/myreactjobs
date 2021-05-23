import React from 'react';


import s from './Btn.module.scss';



function Btn(props) {

  const activeClass = props.active ? s.active : "";

  return (

    <label  className={`${s.label} ${activeClass}`}  > {props.label}

      <input className={s.btn} type="radio" name="search" value={props.value} />

    </label>


  );
}

export default Btn;
