import React from 'react';

import s from './HeaderLink.module.scss';



function HeaderLink(props) {
  return (
    <a className={s.link} href={props.href} style={props.style}>
{props.text}
    </a>

  );
}

export default HeaderLink;

