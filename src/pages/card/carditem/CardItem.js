import s from './CardItem.module.scss'
import Sale from "../../../components/sale/Sale";
import Price from "../../../components/price/Price";

export function CardItem({ img, title, price }) {
    return (
        <div className={s.card}>
            <Sale/>
            <img className={s.img} src={img} alt="img" />
            <img className={s.img2} src={img} alt="img2" />
            <Price price={price} />
            <h3 className={s.title}>{title}Нашли дешевле? Снизим цену!</h3>
        </div>
    );
}