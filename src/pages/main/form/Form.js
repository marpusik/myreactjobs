import React from 'react';


import s from './Form.module.scss';



function Form() {
  return (

    <form className={s.form}>
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
  );
}

export default Form;
