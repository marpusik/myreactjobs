import React from 'react';
import s from './FeaturesMain.module.scss';





function FeaturesMain() {
  return (
    <>
   <table className={s.features}> 
   
   <tr><td className={s.item}>Производитель</td><td className={s.item}>Канада</td></tr> 
   <tr><td className={s.item}> Количество мест, шт: </td><td className={s.item}>3</td></tr> 
   <tr><td className={s.item}>Мощность, л.с.</td><td className={s.item}>155</td></tr> 
   <tr><td className={s.item}>Тип двигателя</td><td className={s.item}>Бензиновый</td></tr> 
   <tr><td className={s.item}>Год выпуска</td><td className={s.item}>2018</td></tr> 
   </table>
    </>
  );
}

export default FeaturesMain;
