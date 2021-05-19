import React from 'react';

import  s from './CardLink.module.scss';



function CardLink(props) {
  return (
    <a className={s.cardLink} href="tut.by">
{props.text}
    </a>

  );
}

export default CardLink;

