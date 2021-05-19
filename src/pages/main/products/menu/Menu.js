import React from 'react';

import s from './Menu.module.scss';



function Menu() {
  return (
    <nav className={s.menu}>
        <a className={s.link} href="tut.by">запчасти</a>
        <a className={s.link} href="tut.by">моторы</a>
        <a className={s.link} href="tut.by">шины </a>
        <a className={s.link} href="tut.by">электроника</a>
        <a className={s.link} href="tut.by">инструменты</a>
        <a className={s.link} href="tut.by">аксессуары </a>
      </nav>
  )

}

export default Menu;

