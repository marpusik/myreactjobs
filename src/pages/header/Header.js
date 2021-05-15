import React from "react";
import s from "./Header.module.scss";
import HeaderLink from "./headerLink/HeaderLink";
import logo from "./../../assets/icons/LogoIcon.svg";
import location from "./../../assets/icons/LocationIcon.svg";
import Heart from "../../components/heart/Heart";
import Basket from "../../components/basket/Basket";
import personal from "./../../assets/icons/PersonalIcon.svg";
import Menu from "./menu/Menu";

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
      <a className={s.logo} href="##"><img className="logoImg" src={logo} alt="" /></a>
      
      
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
            <Basket/>
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
