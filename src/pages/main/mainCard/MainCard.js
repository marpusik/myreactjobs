import React from 'react';


import './MainCard.css';


function MainCard({ title, img }) {
  return (

    <div className="mainCard">

      <h3 className="mainCaption">{title}</h3>

      <img className="mainImg" src={img} alt="" />

    </div>
  );
}

export default MainCard;
