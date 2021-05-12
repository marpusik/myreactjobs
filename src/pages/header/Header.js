import React from "react";
import "./Header.css";
import HeaderLink from "./headerLink/HeaderLink";
import logo from "./../../assets/icons/LogoIcon.svg";
import location from "./../../assets/icons/LocationIcon.svg";
import Heart from "../../components/heart/Heart";
import Basket from "../../components/basket/Basket";
import personal from "./../../assets/icons/PersonalIcon.svg";

function Header() {
  return (
    <header className="header">
      <nav className="headerMenu">
        <ul className="headerList">
          <li className="headerItem">
            <HeaderLink 
            href="#"
            text="Магазины" 
            />
          </li>
          <li className="headerItem">
            <HeaderLink 
            href="#"
            text="Акции" 
            />
          </li>
          <li className="headerItem">
            <HeaderLink 
            href="#"
            text="Доставка и оплата" 
            />
          </li>
        </ul>
      </nav>
      <a className="headerLogo" href="##"><img className="logoImg" src={logo} alt="" /></a>
      
      
      <nav className="headerNav">
      <address className="headerAdress">
        <img src={location} alt="location"/>
        <HeaderLink 
        href="#"
        text="Москва,  ул. Науки  25" 
        style={{margin:"0"}}
        />
      </address>
        <ul className="headerIcons">
          <li className="headerIcon">
            <Heart/>
          </li>
          <li className="headerIcon">
          <img src={personal} alt=""  />
          </li>
          <li className="headerIcon">
            <Basket/>
          </li>
        </ul>
      </nav>  
      
    </header>
  );
}

export default Header;
