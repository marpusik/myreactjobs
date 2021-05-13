import React from "react";

function Secondmenu() {
    return (
        <><h3 className="secondmenu__title">Интернет-магазин</h3>
            <ul className="secondmenu__list">
                <li className="secondmenu__item"><a className="secondmenu__link"
                                              href="">Доставка и самовывоз</a></li>
                <li className="secondmenu__item"><a className="secondmenu__link"
                                              href="">Оплата</a></li>
                <li className="secondmenu__item"><a className="secondmenu__link"
                                              href="">Возврат-обмен</a></li>
                <li className="secondmenu__item"><a className="secondmenu__link"
                                              href="">Новости</a></li>
            </ul></>
    );
}

export default Secondmenu;