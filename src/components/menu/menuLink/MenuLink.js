import React from 'react';

import s from './MenuLink.module.scss';



function MenuLink(props) {
  return (
    <a className={s.link} href="tut.by">
{props.text}
    </a>

  );
}

export default MenuLink;

