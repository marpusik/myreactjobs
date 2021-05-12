import React from 'react';
import MenuLink from './menuLink/MenuLink';

import './Menu.css';


function Menu() {
  return (
    <nav className="menu">
      <ul className="menuList">


        <li className="menuItem">
          <MenuLink text="Квадроциклы"/>
        </li>
        <li className="menuItem">
          <MenuLink text="Катера"/>
        </li>
        <li className="menuItem">
          <MenuLink text="Гидроциклы"/>
        </li>
        <li className="menuItem">
          <MenuLink text="Лодки"/>
        </li>
        <li className="menuItem">
          <MenuLink text="Вездеходы"/>
        </li>
        <li className="menuItem">
          <MenuLink text="Снегоходы"/>
        </li>
        <li className="menuItem">
          <MenuLink text="Двигатели"/>
        </li>
        <li className="menuItem">
          <MenuLink text="Запчасти"/>
        </li>


      </ul>


    </nav>
  );
}

export default Menu;
