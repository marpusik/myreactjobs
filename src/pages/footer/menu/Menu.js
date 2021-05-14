import React from "react";

function Menu() {
    return (
        <><h3 className="menu__title">Информация</h3>
            <ul className="menu__list">
                <li className="menu__item"><a className="menu__link"
                                              href="ya.ru">О компании</a></li>
                <li className="menu__item"><a className="menu__link"
                                              href="ya.ru">Контакты</a></li>
                <li className="menu__item"><a className="menu__link"
                                              href="ya.ru">Акции</a></li>
                <li className="menu__item"><a className="menu__link"
                                              href="ya.ru">Магазины</a></li>
            </ul></>
    );
}

export default Menu;