import React from 'react';
import Basket from '../basket/Basket';
import Heart from '../heart/Heart';
import Price from '../price/Price';
import Sale from '../sale/Sale';
import { Link } from 'react-router-dom';
import s from './Card.module.scss';



function Card({ img, title, price }) {
  return (

    <Link to="/card" >

      <div className={s.card}>
        <Sale />
        <Heart />
        <img className={s.img} src={img} alt="img" />
        <h3 className={s.title}>{title}</h3>
        <Price price={price} />
        {/* <span className={s.priceNone}>нет в наличии</span> */}
        <button className={s.btn}>
          <Basket />
        </button>
        {/* <button className={s.report}>Сообщить о поступлении</button> */}
        <div className={s.look}>посмотреть товар</div>
      </div >
      
    </Link>

  );
}

export default Card;




// function Card(props) {
//   return (

//     <div className={s.card}>
//       <Sale/>
//       <Heart />
//       <img className={s.img} src={props.img} alt="img" />
//       <h3 className={s.title}>{props.title}</h3>
//       <Price price={props.price} />
//       {/* <span className={s.priceNone}>нет в наличии</span> */}
//       <button className={s.btn}>
//         <Basket />
//       </button>
//       {/* <button className={s.report}>Сообщить о поступлении</button> */}
//       <div className={s.look}>посмотреть товар</div>

//     </div>
//   );
// }

// export default Card;





