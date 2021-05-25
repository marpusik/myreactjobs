import React from 'react';
import Btn from './btn/Btn';


import s from './Form.module.scss';



function Form() {

  const active = true;
  return (
    <form className={s.form}>

      <div className={s.radioBtns}>
        <Btn text="Поиск по номеру"  value="Поиск по номеру" label="Поиск по номеру"/>
        <Btn active={active} text="Поиск по марке" value="Поиск по марке" label="Поиск по марке"/>
        <Btn text="Поиск по названию товара" value="Поиск по названию товара" label="Поиск по названию товара"/>
      </div>


      <div className={s.wrapInput}>
        <input className={s.input} type="text" placeholder="Введите марку" />
        <button className={s.searchBtn}>ИСКАТЬ</button>
      </div>

    </form>
  );
}

export default Form;
