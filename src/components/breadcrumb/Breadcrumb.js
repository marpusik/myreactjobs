import React from 'react';

import s from './Breadcrumb.module.scss';



function Breadcrumb() {
  return (

    <ul className={s.breadcrumb} >
      <li class={s.item}><a class={s.link} href="tut.by">Главная</a></li>
      <li class={s.item}><a class={s.link} href="tut.by">Гидроциклы</a></li>
      <li class={s.item}>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</li>
</ul >

  );
}

export default Breadcrumb;
