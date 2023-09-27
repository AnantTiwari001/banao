import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import image from "../assets/about/about-bg.png";
import "../css/App.css";

function TestParallax() {
  return (
    <ParallaxBanner
      layers={[
        {
          image: image,
          speed: -5,
        },
        {
          image: image,
          speed: -25,
        },
        {
          image: image,
          speed: -15,
        },
      ]}
      className="banner__background"
    >
      <div className="banner__background__overlay">
        <h1 className="banner__background__text">Hello World</h1>
      </div>
    </ParallaxBanner>
  );
}

export default TestParallax;
