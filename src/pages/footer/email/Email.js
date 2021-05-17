import s from './Email.module.scss'

function Email() {
    return (
        <div className={s.email}>
            <p className="email__text">Подпишитесь на нашу рассылку
            и узнавайте о акция быстрее</p>
            <input className="email__form" type="url" name="sait" placeholder="Введите ваш e-mail:"/>
            <input className="email__btn" type="submit" value="Отправить"/>
        </div>
    );
}

export default Email;