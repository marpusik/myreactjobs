import React from 'react';

import './MenuLink.css';



function MenuLink(props) {
  return (
    <a className="menuLink" href="tut.by">
{props.text}
    </a>

  );
}

export default MenuLink;

