import React from "react";
import v1 from "../assets/media/ellipse.svg";
import "../css/media.css";

function MediaDetails({
  image,
  sportName,
  date,
  title,

  redirectUri,
  fromAbout,
}) {
  const handleRedirect = (uri) => {
    if (uri) window.open(uri, "_self");
  };
  return (
    <div>
      <img
        loading='lazy'
        src={image}
        alt='label'
        className={
          !fromAbout ? "image-details-image" : "image-details-image-about"
        }
      />
      <div className={!fromAbout ? "date-media" : "date"}>
        <p>{sportName}</p>
        <img loading='lazy' src={v1} alt='vector' className='vector-image' />
        <p>{date}</p>
      </div>
      <div className={!fromAbout ? "title" : "about-media-title"}>
        <a
          href={redirectUri}
          target='_blank'
          style={{ textDecoration: "none", color: "#000" }}
        >
          {" "}
          <p>{title.length > 35 ? `${title.slice(0, 30)} ...` : title}</p>
        </a>
      </div>
      <div className='details'></div>
    </div>
  );
}

export default MediaDetails;
