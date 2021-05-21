import React from "react";
import { Link } from 'react-router-dom';
import s from "./Header.module.scss";
import HeaderLink from "./headerLink/HeaderLink";
import logo from "./../../assets/icons/LogoIcon.svg";
import location from "./../../assets/icons/LocationIcon.svg";
import Heart from "../../components/heart/Heart";
import personal from "./../../assets/icons/PersonalIcon.svg";
import Menu from "./menu/Menu";
import { ReactComponent as Basket } from './../../assets/icons/BasketIcon.svg';


function Header() {
  return (
    <>
    <header className={s.header}>
      <nav className={s.menu}>
        <ul className={s.menuList}>
          <li className={s.menuItem}>
            <HeaderLink
            href="#"
            text="Магазины"
            />
          </li>
          <li className={s.menuItem}>
            <HeaderLink
            href="#"
            text="Акции"
            />
          </li>
          <li className={s.menuItem}>
            <HeaderLink
            href="#"
            text="Доставка и оплата"
            />
          </li>
        </ul>
      </nav>

      <Link to="/" className={s.logo} ><img className="logoImg" src={logo} alt="" /></Link>

      <nav className={s.social}>
      <address className={s.adress}>
        <img src={location} alt="location"/>
        <HeaderLink
        href="#"
        text="Москва,  ул. Науки  25"
        style={{margin:"0"}}
        />
      </address>
      <nav className={s.socialIcons}>
        <ul className={s.socialList}>
          <li className={s.socialItem}>
            <Heart/>
          </li>
          <li className={s.socialItem}>
          <img src={personal} alt=""  />
          </li>
          <li className={s.socialItem}>
            <Basket fill="#2F3035"/>
          </li>
        </ul>
      </nav>
      </nav>
    </header>
    <Menu/>
   </>
  );
}

export default Header;
