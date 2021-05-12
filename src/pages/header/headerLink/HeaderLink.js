import React from 'react';

import './HeaderLink.css';



function HeaderLink(props) {
  return (
    <a className="headerLink" href={props.href} style={props.style}>
{props.text}
    </a>

  );
}

export default HeaderLink;

