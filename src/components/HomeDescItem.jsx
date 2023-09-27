import React from "react";
import "../css/home.css";

function HomeDescItem({ image, title, description }) {
  return (
    <div className='home-desc-item'>
      <img loading='lazy' src={image} alt='icons' />
      <div className='home-desc-item-text'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default HomeDescItem;
