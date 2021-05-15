import React from 'react';

import './CardLink.css';



function CardLink(props) {
  return (
    <a className="cardLink" href="tut.by">
{props.text}
    </a>

  );
}

export default CardLink;

