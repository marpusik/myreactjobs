import React from 'react';
import s from './FeaturesMain.module.scss';





function FeaturesMain() {
  return (
    <>
   <table className={s.features}> 
   
   <tr><td>Производитель</td><td>Канада</td></tr> 
   <tr><td>Количество мест, шт: </td><td>3</td></tr> 
   <tr><td>Мощность, л.с.</td><td>155</td></tr> 
   <tr><td>Тип двигателя</td><td>Бензиновый</td></tr> 
   <tr><td>Год выпуска</td><td>2018</td></tr> 
   </table>
    </>
  );
}

export default FeaturesMain;
