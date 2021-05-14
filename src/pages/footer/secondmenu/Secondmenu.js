import React from "react";

function Secondmenu() {
    return (
        <><h3 className="secondmenu__title">Интернет-магазин</h3>
            <ul className="secondmenu__list">
                <li className="secondmenu__item"><a className="secondmenu__link"
                                              href="ya.ru">Доставка и самовывоз</a></li>
                <li className="secondmenu__item"><a className="secondmenu__link"
                                              href="ya.ru">Оплата</a></li>
                <li className="secondmenu__item"><a className="secondmenu__link"
                                              href="ya.ru">Возврат-обмен</a></li>
                <li className="secondmenu__item"><a className="secondmenu__link"
                                              href="ya.ru">Новости</a></li>
            </ul></>
    );
}

export default Secondmenu;