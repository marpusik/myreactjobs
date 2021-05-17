import s from './Menu.module.scss';

function Menu() {
    return (
        <div className={s.menu}>
        <h3 className="menu__title">Информация</h3>
            <ul className="menu__list">
                <li className="menu__item"><a className="menu__link"
                                              href="ya.ru">О компании</a></li>
                <li className="menu__item"><a className="menu__link"
                                              href="ya.ru">Контакты</a></li>
                <li className="menu__item"><a className="menu__link"
                                              href="ya.ru">Акции</a></li>
                <li className="menu__item"><a className="menu__link"
<<<<<<< HEAD
                                              href="">Магазины</a></li>
            </ul>
            </div>
=======
                                              href="ya.ru">Магазины</a></li>
            </ul></>
>>>>>>> main
    );
}

export default Menu;