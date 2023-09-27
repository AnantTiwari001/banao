import React from "react";
import icon from "../assets/loan 2.svg";
import "../css/client.css";

function ClientOngoingInfo({ image, isBox, sports, title }) {
  return (
    <div className='client__on__container'>
      <div className='client__on__box__high'>
        <p className='client__on__text-1'>{title}</p>
        <img loading='lazy' src={icon} alt='company-icon' />
      </div>
      <div className='client__on__box__low'>
        <img
          loading='lazy'
          src={image}
          className={
            isBox
              ? "client__on__image-box"
              : sports
              ? "client__on__image-box-2"
              : "client__on__image"
          }
          alt='project-icon'
        />
      </div>
    </div>
  );
}

export default ClientOngoingInfo;
