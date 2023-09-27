import { Linear, TimelineMax, TweenMax } from "gsap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ParallaxBanner } from "react-scroll-parallax";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import {
  default as image,
  default as mobileImage,
} from "../assets/our-projects-background.png";
import x_icon from "../assets/team/x-icon-black.svg";
import "../css/client.css";
import { getAbout, getWorks, setActiveNav } from "./../actions";
import ClientInfo from "./ClientInfo";

function Clients() {
  const [ourWorks, setourWorks] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showFirst, setshowFirst] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    const widthChange = window.addEventListener("resize", () => {
     
      setwidth(window.innerWidth);
    });
    return window.removeEventListener("resize", widthChange);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!showFirst) setshowFirst(true);
    });
    return window.removeEventListener("scroll", () => {
      if (!showFirst) setshowFirst(true);
    });
  }, []);
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
  function parallax() {
    var parallaxController = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: "onEnter", duration: "200%" },
    });

    document.querySelectorAll(".parallax-image").forEach((item) => {
      var trig = item.parentNode,
        parallax = item.getAttribute("data-parallax"),
        speed = parallax * 100 + "%";

      new ScrollMagic.Scene({ triggerElement: trig })
        .setTween(item, { y: speed, ease: Linear.easeNone })
        .addTo(parallaxController);
    });
  }

  const scrollContent = document.querySelector(".scroll-content");
  const scroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const scrollContent = document.getElementById("scroll-first-section");
      scrollContent.scrollIntoView();
    }, 2500);
    return () => clearTimeout(timeOutId);
  }, []);

  const dispatch = useDispatch();
  const aboutData = useSelector((state) => state.about);
  const works = useSelector((state) => state.works);
  const currentNavState = useSelector((state) => state.showMobileNav);
  // console.log(ourWorks);
  //console.log(aboutData?)
  useEffect(() => {
    dispatch(getAbout());
    dispatch(getWorks());
    dispatch(setActiveNav("project"));
    parallax();
  }, [dispatch]);
  useEffect(() => {
    if (works) setourWorks(works["our_work_pages"]);
  }, [works]);
  return (
    <div className='body main-font'>
      {currentNavState && <div className='mobile-overlay'></div>}
      <div className='client__banner'>
        <ParallaxBanner
          layers={[
            {
              image: width > 800 ? image : mobileImage,
              speed: -65,
              expanded: false,
              scale: [1.06, 1.26],
            },
            {
              image: width > 800 ? image : mobileImage,
              speed: -20,
              expanded: false,
              scale: [1.03, 1.23],
            },
            {
              image: width > 800 ? image : mobileImage,
              speed: showFirst ? -10 : 0,
              expanded: false,
            },
          ]}
          className='banner__background'
        >
          <div className='banner__background__overlay__about'>
            <div className='banner__background__text'>
             
            </div>
          </div>
          <div></div>
        </ParallaxBanner>
      </div>
      <div style={{ marginTop: "0px" }} id='scroll-first-section'>
        {showDetails && (
          <div className='class-details-container'>
            <div className='client-details'>
              <div style={{ position: "relative" }}>
                <img
                  loading='lazy'
                  src={x_icon}
                  alt='x-icon'
                  className='x-icon-client'
                  onClick={() => setShowDetails(false)}
                />

                <p>Hello client</p>
              </div>
            </div>
          </div>
        )}
        <div className='client-box-container top-padding'>
          {ourWorks.map((data) => {
            return (
              <ClientInfo
                key={data.id}
                id={data.id}
                setShowDetails={setShowDetails}
                image1={data.logo1}
                image2={data.logo2_1}
                image3={data.logo2_2}
                image4={data.logo2_3}
                text={data.text1}
                countryLogo1={data.country1}
                countryLogo2={data.country2}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Clients;
