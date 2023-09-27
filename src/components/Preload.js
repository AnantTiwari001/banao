import React from "react";
import preloadGif from "../assets/preload-gif.gif";
import "../css/preload.css";

function Preload() {
  return (
    <body className='preload__container'>
      <div className='preload__main'>
        <h1>Loading ...</h1>
        <img loading='lazy' src={preloadGif} alt='loader' />
      </div>
    </body>
  );
}

export default Preload;
