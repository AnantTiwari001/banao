import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import roblox from "../assets/about/Roblox-Logo-PNG8 1.png";
import icon3 from "../assets/about/Vector (22).png";
import parallaxImage from "../assets/about/about-middle-banner.png";
import image from "../assets/about/about-top-banner.png";
import esl from "../assets/about/esl.png";
import gbImage1 from "../assets/about/gb-image-1.png";
import gbImage2 from "../assets/about/gb-image-2.png";
import gbImage3 from "../assets/about/gb-image-3.png";
import icon1 from "../assets/about/icon (1).svg";
import icon2 from "../assets/about/icon (2).svg";
import pro from "../assets/about/pro.png";
import { getAbout, getMedia, setActiveNav } from "./../actions";
import unity from "./../assets/about/EA Sports (Gaming).png";
import pngwing from "./../assets/about/ESPN (Digital Media, Sports).png";
import inshort from "./../assets/about/Inshorts.png";
import sharechat from "./../assets/about/KukuFM (Digital Media).png";
import npasport from "./../assets/about/NBA (sports).png";
import nba from "./../assets/about/NBA-logo-png.png";
import wing from "./../assets/about/Riot_Games-Logo 1.png";
import sk from "./../assets/about/Sportskeeda (Gaming, Digital Media, Sports).png";
import d from "./../assets/about/Twitch (Digital Media, Gaming).png";
import disney from "./../assets/about/disney.png";
import dream11 from "./../assets/about/dream11.png";
import hbo from "./../assets/about/hbo.png";
import ipl from "./../assets/about/ipl.png";
import jio from "./../assets/about/jio.png";
import king from "./../assets/about/kisspng-2.png";
import king2 from "./../assets/about/kisspng1.png";
import n from "./../assets/about/n.png";
import nfl from "./../assets/about/pngwing 3.png";

import "./../css/about.css";
import "./../css/carousel.css";
import ParallexComponent from "./ParallexComponent";

const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollContent, setshowScrollContent] = useState(true);
  const [showFirst, setshowFirst] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);
  const [bannerData, setBannerData]= useState({
    type: "",
    h1text: "",
    h2text: "",
    image: ""
})

  /** <!-- Our Global presence data dev.nur--> */
  const [globalData] = useState([
    {
      id: 1,
      title: "London, UK",
      desc: "Driving Success, The British Way.",
      image: gbImage1,
    },
    {
      id: 2,
      title: "Mumbai, India",
      desc: "Empowering Growth in India's Financial Hub",
      image: gbImage2,
    },
    {
      id: 3,
      title: "New York, USA",
      desc: "Unlocking Opportunities on Wall Street.",
      image: gbImage3,
    },
  ]);

  useEffect(() => {
    // banner Api
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://admin.awcapitalltd.com/api/bannerimages/AboutUs/", requestOptions)
      .then(response => response.text())
      .then(result => setBannerData(JSON.parse(result).data[0]))
      .catch(error => console.log('error', error));


    const widthChange = window.addEventListener("resize", () => {
      // console.log(window.innerWidth);
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
  const innerHeight = window.innerHeight;


  useEffect(()=>{
    const timeOut = setTimeout(() => {
      window.scrollTo(0,850)
    }, 1800);
    return ()=> clearTimeout(timeOut)
  },[])
  // console.log(window.innerHeight, window.scrollY);

  // useEffect(() => {
  //   const timeOutId = setTimeout(() => {
  //     const scrollContent = document.getElementById("scroll-first-section");
  //     scrollContent.scrollIntoView();
  //   }, 2500);
  //   return () => clearTimeout(timeOutId);
  // }, []);
  useEffect(() => {
    let time;
    if (showScrollContent === false) {
      time = setTimeout(() => {
        setshowScrollContent(true);
      }, 2500);
    }
    return () => {
      clearTimeout(time);
    };
  }, [showScrollContent]);

  function hover() {
    let circle_mobile_1 = document.querySelector(".circle-mobile-1");
    let circle_mobile_2 = document.querySelector(".circle-mobile-2");
    let circle_mobile_3 = document.querySelector(".circle-mobile-3");
    circle_mobile_1.addEventListener("mouseover", () => {
      document.querySelectorAll(".circle-1-item").forEach((items) => {
        items.style.transform = "scale(1.06, 1.06)";
        items.style.transition = "ease 200ms";
      });
    });
    circle_mobile_1.addEventListener("mouseout", () => {
      document.querySelectorAll(".circle-1-item").forEach((items) => {
        items.style.transform = "scale(1, 1)";
      });
    });
    circle_mobile_2.addEventListener("mouseover", () => {
      document.querySelectorAll(".circle-2-item").forEach((items) => {
        items.style.transform = "scale(1.06, 1.06)";
        items.style.transition = "ease 200ms";
      });
    });
    circle_mobile_2.addEventListener("mouseout", () => {
      document.querySelectorAll(".circle-2-item").forEach((items) => {
        items.style.transform = "scale(1, 1)";
      });
    });
    circle_mobile_3.addEventListener("mouseover", () => {
      document.querySelectorAll(".circle-3-item").forEach((items) => {
        items.style.transform = "scale(1.06, 1.06)";
        items.style.transition = "ease 200ms";
      });
    });
    circle_mobile_3.addEventListener("mouseout", () => {
      document.querySelectorAll(".circle-3-item").forEach((items) => {
        items.style.transform = "scale(1, 1)";
      });
    });
  }
  function hoverDesktop() {
    let circle_1 = document.querySelector(".circle-1-desk");
    let circle_2 = document.querySelector(".circle-2-desk");
    let circle_3 = document.querySelector(".circle-3-desk");
    circle_1.addEventListener("mouseover", () => {
      // console.log("hoverred");
      document.querySelectorAll(".circle-1-item-desk").forEach((items) => {
        items.style.transform = "scale(1.08, 1.08)";
        items.style.transition = "ease 200ms";
      });
    });
    circle_1.addEventListener("mouseout", () => {
      document.querySelectorAll(".circle-1-item-desk").forEach((items) => {
        items.style.transform = "scale(1, 1)";
      });
    });
    circle_2.addEventListener("mouseover", () => {
      // console.log("hovered");
      document.querySelectorAll(".circle-2-item-desk").forEach((items) => {
        items.style.transform = "scale(1.08, 1.08)";
        items.style.transition = "ease 200ms";
      });
    });
    circle_2.addEventListener("mouseout", () => {
      document.querySelectorAll(".circle-2-item-desk").forEach((items) => {
        items.style.transform = "scale(1, 1)";
      });
    });
    circle_3.addEventListener("mouseover", () => {
      document.querySelectorAll(".circle-3-item-desk").forEach((items) => {
        items.style.transform = "scale(1.06, 1.06)";
        items.style.transition = "ease 200ms";
      });
    });
    circle_3.addEventListener("mouseout", () => {
      document.querySelectorAll(".circle-3-item-desk").forEach((items) => {
        items.style.transform = "scale(1, 1)";
      });
    });
  }

  const dispatch = useDispatch();
  const aboutData = useSelector((state) => state.about);
  const mediaData = useSelector((state) => state.media);
  let sortedMediaData;
  if (mediaData) {
    // sortedMediaData = mediaData?.media.slice(1).sort((data1, data2) => {
    //   let date1 = new Date(data1["published_at"]);
    //   let date2 = new Date(data2["published_at"]);
    //   return date1 - date2;
    // });
    sortedMediaData = mediaData?.media;
  }
  const currentNavState = useSelector((state) => state.showMobileNav);

  useEffect(() => {
    dispatch(getAbout());
    dispatch(getMedia());
    dispatch(setActiveNav("about"));
    hover();
    hoverDesktop();
  }, [dispatch]);

  return (
    <div
      className="body main-font"
      style={{ width: "100%", overflow: "hidden" }}
    >
      {currentNavState && <div className="mobile-overlay"></div>}
      <div className="about__banner">
        <ParallexComponent img={bannerData.image} further={0.3} >
          <div className="banner__background__overlay__about">
            <div className="banner__background__text" id="text">
              <div className="banner-title">
                {width > 800 ? (
                  aboutData?.banner[0]?.banner_title
                ) : (
                  <>
                    {aboutData?.banner[0]?.banner_title
                      .split(" ")
                      .slice(0, 2)
                      .join(" ")}{" "}
                    <br />{" "}
                    {aboutData?.banner[0]?.banner_title
                      .split(" ")
                      .slice(2, 4)
                      .join(" ")}{" "}
                  </>
                )}
              </div>
              <div className="about-banner-content-subheading">
                <h4>{bannerData.h2text}</h4>
              </div>
            </div>
          </div>
          <div></div>
        </ParallexComponent>
      </div>

      <div
        className="about-section about__parallax-section"
        id="scroll-first-section"
      >
        <div className="about__parallax-content">
          {/* <div style={{ width: "140px" }} className='overview'>
            Overview
          </div> */}
          <div className="about__carousel__container">
            <Carousel interval={3000} pause={false}>
              <Carousel.Item>
                <Carousel.Caption>
                  <h3 className="carousel-caption-header">2016</h3>
                  <p className="carousel-caption-text">Founded in</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <h3 className="carousel-caption-header">3</h3>
                  <p className="carousel-caption-text">Sectors of focus</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <h3 className="carousel-caption-header">8</h3>
                  <p className="carousel-caption-text">Member team</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <h3 className="carousel-caption-header">HQ</h3>
                  <p className="carousel-caption-text">London</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <h3 className="special-carousel-caption-header">
                    India office
                  </h3>
                  <p className="carousel-caption-text">Mumbai</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className="carousel-text-description">
              <div>
                <img loading="lazy" src={icon2} alt="sports-icon" /> Sports
              </div>
              <div>
                {" "}
                <img loading="lazy" src={icon3} alt="sports-icon" />
                Gaming
              </div>
              <div>
                {" "}
                <img loading="lazy" src={icon1} alt="sports-icon" />
                Digital Media
              </div>
            </div>
          </div>
          <Parallax
            translateY={[5, -5, 10]}
            className="parallax-text-container"
          >
            <div className="parallax-content-text">
              <div className="parallax-content-text-header">
                {aboutData?.about[0]?.title}
              </div>
              <div className="parallax-content-text-content">
                <p style={{fontFamily:'Arial', letterSpacing:'0.25px'}}>{aboutData?.about[0]?.content_1}</p>
                {aboutData?.about[0]?.content_2}
              </div>
            </div>
          </Parallax>
        </div>
        <div className="parallax-image">
          <ParallaxBanner
            layers={[
              {
                image: parallaxImage,
                speed: -45,
                scale: [1.06, 1.26],
              },
              {
                image: parallaxImage,
                speed: -35,
                scale: [1.03, 1.23],
              },
              {
                image: parallaxImage,
                speed: -5,
                scale: [1.01, 1.2],
                expanded: width > 600 ? false : true,
                // expanded: false,
              },
            ]}
            className="parallax__background"
          >
            <div className="parallax-image-overlay"></div>
          </ParallaxBanner>
        </div>
      </div>

      <div className="section about-grid">
        <div
          className="circle-box-mobile"
          id="mobile-circle"
          style={{ position: "relative" }}
        >
          <img
            loading="lazy"
            src={sk}
            className="sk-main-mobile circle-2-item circle-1-item circle-3-item"
            id="main-icon3"
            alt="sk"
          />
          <img
            loading="lazy"
            className="pngwing-main-mobile circle-1-item circle-3-item"
            src={pngwing}
            alt="pngwing"
            id="main-icon2"
          />
          <img
            loading="lazy"
            src={d}
            className="d-main-mobile circle-2-item circle-3-item"
            id="main-icon1"
            style={{scale:0.1}}
            alt="d"
          />
          <img
            loading="lazy"
            src={dream11}
            className="dream-main-mobile circle-1-item circle-2-item"
            alt="dream11"
          />
          <div className="circle-text text-sports mobile-text1">Sports</div>
          <div className="circle-text text-gaming mobile-text1">Gaming</div>
          <div className="circle-text circle-text-digital-mobile mobile-text1">
            Digital Media
          </div>
          <div className="circle circle-1 circle-mobile-1">
            {/* <img loading='lazy' src={ipl} className='ipl-mobile' alt='ipl' />
            <img loading='lazy' src={nba} className='nba-mobile' alt='nba' /> */}
            <img
              loading="lazy"
              src={ipl}
              style={{
                width: "70px",
                position: "absolute",
                left: 22,
                top: 37,
              }}
              className="mobile-circle-image"
              alt="circle-1-image"
            />
            <img
              loading="lazy"
              src={npasport}
              className="mobile-circle-image"
              style={{
                width: "20px",
                position: "absolute",
                left: 97,
                top: 12,
              }}
              alt="circle-1-image"
            />
            <img
              loading="lazy"
              src={nfl}
              className="mobile-circle-image"
              style={{
                width: "30px",
                position: "absolute",
                left: 77,
                top: 65,
              }}
              alt="circle-1-image"
            />
            <img
              loading="lazy"
              src={king}
              className="mobile-circle-image"
              style={{
                width: "50px",
                position: "absolute",
                left: 28,
                top: 132,
              }}
              alt="circle-1-image"
            />
            <img
              loading="lazy"
              src={king2}
              className="mobile-circle-image"
              style={{
                width: "50px",
                position: "absolute",
                left: 8,
                top: 78,
              }}
              alt="circle-1-image"
            />
            <img
              loading="lazy"
              src={pro}
              className="mobile-circle-image"
              style={{
                width: "60px",
                position: "absolute",
                left: 51,
                top: 106,
              }}
              alt="circle-1-image"
            />
          </div>
          <div className="circle circle-2 circle-mobile-2">
            {/* <img
              loading='lazy'
              src={wing}
              className='wing mobile-wing'
              alt='wing-img'
            />
            <img loading='lazy' src={unity} className='unity-mobile' alt='unity' /> */}
            <img
              loading="lazy"
              className="mobile-circle-image wing"
              style={{
                width: "90px",
                position: "absolute",
                top: 38,
                left: 115,
              }}
              src={wing}
              // className='wing'
              alt=""
            />
            <img
              loading="lazy"
              style={{
                width: "40px",
                position: "absolute",
                top: 76,
                left: 102,
              }}
              className="mobile-circle-image wing"
              src={esl}
              // className='wing'
              alt=""
            />
            <img
              loading="lazy"
              style={{
                width: "70px",
                position: "absolute",
                top: 147,
                left: 129,
              }}
              className="mobile-circle-image"
              src={roblox}
              alt=""
            />
            <img
              loading="lazy"
              style={{
                width: "55px",
                position: "absolute",
                top: 97,
                left: 143,
              }}
              className="mobile-circle-image"
              src={n}
              alt=""
            />
            <img
              loading="lazy"
              style={{
                width: "50px",
                position: "absolute",
                top: 13,
                right: 69,
              }}
              src={unity}
              className="mobile-circle-image unity"
              // className='unity'
              alt=""
            />
          </div>
          <div
            className="circle circle-3 circle-mobile-3"
            style={{ position: "absolute", top: "32%", left: "24%" }}
          >
            {/* <img loading='lazy'src={disney} alt='disney' className='mobile-disney'/>
            <img loading='lazy' src={sharechat} className='sharechat mobile-sharechat' alt='sharechat'/> */}
            <img loading="lazy" src={disney} alt="disney" className="disney" style={{
              bottom:62,
              right:6
            }} />
            <img
              loading="lazy"
              src={sharechat}
              style={{
                width: "40px",
                position: "absolute",
                bottom: 21,
                right: 117,
              }}
              className="mobile-circle-image"
              alt=""
            />
            <img
              loading="lazy"
              src={hbo}
              className="mobile-circle-image"
              style={{
                width: "50px",
                position: "absolute",
                bottom: 30,
                left: 107,
              }}
              alt=""
            />
            <img
              loading="lazy"
              className="mobile-circle-image"
              style={{
                width: "45px",
                position: "absolute",
                bottom: 62,
                left: 20,
              }}
              src={jio}
              alt=""
            />
            <img
              loading="lazy"
              className="mobile-circle-image"
              style={{
                width: "35px",
                position: "absolute",
                bottom: 83,
                left: 84,
              }}
              src={inshort}
              alt=""
            />
          </div>
        </div>
        <div className="circle-box">
          <img
            loading="lazy"
            src={sk}
            style={{ width: "60px", marginLeft: 10, marginBottom: 10 }}
            className="sk-main circle-2-item-desk circle-1-item-desk circle-3-item-desk"
            alt=""
          />
          <img
            loading="lazy"
            className="pngwing-main circle-1-item-desk circle-3-item-desk"
            style={{ width: "60px", marginLeft: 10 }}
            src={pngwing}
            alt=""
          />
          <img
            loading="lazy"
            src={d}
            style={{ width: "50px", marginLeft: 10, marginBottom: 10 }}
            className="d-main circle-2-item-desk circle-3-item-desk"
            alt=""
          />
          <img
            loading="lazy"
            style={{ width: "100px" }}
            src={dream11}
            className="dream-main circle-1-item-desk circle-2-item-desk"
            alt=""
          />
          <div className="circle-text text-sports-desk">Sports</div>
          <div className="circle-text text-gaming-desk">Gaming</div>
          <div className="circle-text text-digital-media-desk">
            Digital Media
          </div>
          <div className="circle circle-1 circle-1-desk">
            <img
              loading="lazy"
              src={ipl}
              style={{ width: "70px", position: "absolute", left: 50, top: 50 }}
              alt="circle-1-image"
            />
            <img
              loading="lazy"
              src={npasport}
              style={{
                width: "20px",
                position: "absolute",
                left: 148,
                top: 30,
              }}
              alt="circle-1-image"
            />
            <img
              loading="lazy"
              src={nfl}
              style={{
                width: "30px",
                position: "absolute",
                left: 108,
                top: 100,
              }}
              alt="circle-1-image"
            />
            <img
              loading="lazy"
              src={king}
              style={{
                width: "50px",
                position: "absolute",
                left: 40,
                top: 200,
              }}
              alt="circle-1-image"
            />
            <img
              loading="lazy"
              src={king2}
              style={{
                width: "50px",
                position: "absolute",
                left: 17,
                top: 119,
              }}
              alt="circle-1-image"
            />
            <img
              loading="lazy"
              src={pro}
              style={{
                width: "60px",
                position: "absolute",
                left: 79,
                top: 157,
              }}
              alt="circle-1-image"
            />
          </div>
          <div className="circle circle-2 circle-2-desk">
            <img
              loading="lazy"
              style={{
                width: "90px",
                position: "absolute",
                top: 60,
                left: 181,
              }}
              src={wing}
              className="wing"
              alt=""
            />
            <img
              loading="lazy"
              style={{
                width: "40px",
                position: "absolute",
                top: 108,
                left: 140,
              }}
              src={esl}
              className="wing"
              alt=""
            />
            <img
              loading="lazy"
              style={{
                width: "70px",
                position: "absolute",
                top: 210,
                left: 200,
              }}
              src={roblox}
              alt=""
            />
            <img
              loading="lazy"
              style={{
                width: "55px",
                position: "absolute",
                top: 145,
                left: 213,
              }}
              src={n}
              alt=""
            />
            <img
              loading="lazy"
              style={{
                width: "50px",
                position: "absolute",
                top: 17,
                right: 120,
              }}
              src={unity}
              className="unity"
              alt=""
            />
          </div>
          <div
            className="circle circle-3 circle-3-desk"
            style={{ position: "relative" }}
          >
            <img loading="lazy" src={disney} alt="disney" className="disney" />
            <img
              loading="lazy"
              src={sharechat}
              style={{
                width: "40px",
                position: "absolute",
                bottom: 23,
                right: 101,
              }}
              alt=""
            />
            <img
              loading="lazy"
              src={hbo}
              style={{
                width: "50px",
                position: "absolute",
                bottom: 40,
                left: 78,
              }}
              alt=""
            />
            <img
              loading="lazy"
              style={{
                width: "45px",
                position: "absolute",
                bottom: 86,
                left: 32,
              }}
              src={jio}
              alt=""
            />
            <img
              loading="lazy"
              style={{
                width: "35px",
                position: "absolute",
                bottom: 118,
                left: 127,
              }}
              src={inshort}
              alt=""
            />
          </div>
        </div>
        {/* <div className='about-grid-description'>
          <div className='heading-main'>Our Focus Area</div>
          <ul className='about-grid-description-list'>
            <li>
              <img loading="lazy" src={tick} alt='' className='tick-icon' />
              <span className='description-text'>
                Sector Specialization: Sports, Gaming and, Digital Media
              </span>
            </li>
            <li>
              <img loading="lazy" src={tick} alt='' className='tick-icon' />
              <span className='description-text'>Proprietory deal making</span>
            </li>
            <li>
              <img loading="lazy" src={tick} alt='' className='tick-icon' />
              <span className='description-text'>
                Covering the entire deal spectrum: Early to Late stage
              </span>
            </li>
          </ul>
        </div> */}
      </div>
      {/* <!-- Our Global presence dev.nur --> */}
      <div className="our-global-presence-parent">
        <div className="sports" style={{color:'#00236a'}}>Our Global presence</div>
        <div className="our-global-card">
          {globalData?.map((data) => (
            <div key={data.id} className="our-global-card-item">
              <img loading="lazy" src={data.image} alt="global-image" />
              <h4>{data.title}</h4>
              <p>{data.desc}</p>
            </div>
          ))}
          <div className="global-image-overlay">
            <h1 style={{color:'#00236a'}}>Coming Soon</h1>
          </div>
        </div>
      </div>
      {/* <!-- Our Global presence --> */}
    </div>
  );
};
export default About;
