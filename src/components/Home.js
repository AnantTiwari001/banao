import { Linear, TimelineMax, TweenMax } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollMagic from "scrollmagic";
import "../css/newcarousel.css";
import { getAbout, getServices, setActiveNav } from "./../actions";
import Preload from "./Preload";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import image2 from "../assets/home/icon1 (2).png";
import image1 from "../assets/home/icon2 (2).png";
import image3 from "../assets/home/icon3 (2).png";
import "../css/client.css";

import avatar from "../assets/home/Ellipse 29.png";

import quote from "../assets/home/quote.png";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import contactImage from "../assets/home/contact-image.png";
import "../css/home.css";
import useImagePreloader from "../hooks/useImagePreloader";

import { ParallaxBanner } from "react-scroll-parallax";
import mobileImage from "../assets/Image1-mobile.webp";
import image from "../assets/home-page-update-banner.png";
import clientLogo5 from "../assets/home/8. Rooter.png";
import clientLogo4 from "../assets/home/Adani.svg";
import clientLogo3 from "../assets/home/CVC Capital Partners.svg";
import clientLogo1 from "../assets/home/Dream 11.svg";
import clientLogo6 from "../assets/home/Gujarat Titans.svg";
import clientLogo7 from "../assets/home/KukuFM.svg";
import clientLogo2 from "../assets/home/Nazara.svg";
import clientLogo8 from "../assets/home/sportz.png";
import HomeDescItem from "./HomeDescItem";
const preloadSrcList = [image, mobileImage];

function Home() {
  const sliderRef = useRef(null);
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
  const [showFirst, setshowFirst] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [currentAnimation, setCurrentAnimation] = useState("change");
  const [aboutToChange, setaboutToChange] = useState(false);
  var settings = {
    dots: width > 600 ? false : true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: width > 1300 ? 3 : width > 900 ? 2 : 1,
    centerMode: width > 900,
    centerPadding: "60px",

    arrows: false,
    pauseOnHover: false,
    //className: "carousel-inner-div",
    beforeChange: () => {
      return setaboutToChange(true);
    },
    afterChange: () => {
      setaboutToChange(false);
    },
    useCss: false,
    initialSlide: 1,
  };
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

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const scrollContent = document.getElementById("scroll-first-section");
      scrollContent.scrollIntoView();
    }, 2500);
    return () => clearTimeout(timeOutId);
  }, [imagesPreloaded]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!showFirst) setshowFirst(true);
    });
    return window.removeEventListener("scroll", () => {
      if (!showFirst) setshowFirst(true);
    });
  }, []);
  useEffect(() => {
    const widthChange = window.addEventListener("resize", () => {
      // console.log(window.innerWidth);
      setWidth(window.innerWidth);
    });
    return window.removeEventListener("resize", widthChange);
  }, []);

  function hover() {
    let el = document.querySelectorAll(".circle");
    if (el)
      el.forEach((i, index) => {
        i.addEventListener("mouseover", function () {
          document.querySelector(".sk-main").style.display = "none";
          if (index == 1)
            document.querySelector(".pngwing-main").style.display = "block";
          else document.querySelector(".pngwing-main").style.display = "none";
          if (index == 0)
            document.querySelector(".d-main").style.display = "block";
          else document.querySelector(".d-main").style.display = "none";
          if (index == 2)
            document.querySelector(".dream-main").style.display = "block";
          else document.querySelector(".dream-main").style.display = "none";
        });
        i.addEventListener("mouseout", function () {
          document.querySelector(".dream-main").style.display = "block";
          document.querySelector(".sk-main").style.display = "block";
          document.querySelector(".pngwing-main").style.display = "block";
          document.querySelector(".d-main").style.display = "block";
        });
      });
  }

  const dispatch = useDispatch();
  const aboutData = useSelector((state) => state.about);

  const { services } = useSelector((state) => state.services);

  const currentNavState = useSelector((state) => state.showMobileNav);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    dispatch(getAbout());
    dispatch(setActiveNav("home"));
    parallax();
    hover();
  }, [dispatch]);

  useEffect(() => {
    dispatch(getServices());
    dispatch(setActiveNav("home"));
    parallax();
    hover();
  }, [dispatch]);

  return (
    <>
      {!imagesPreloaded ? (
        <Preload />
      ) : (
        <div className='body main-font'>
          {currentNavState && <div className='mobile-overlay'></div>}
          <div className='about__banner'>
            <ParallaxBanner
              layers={[
                {
                  image: width > 800 ? image : mobileImage,
                  speed: -85,
                  scale: [1.06, 1.26],
                  expanded: false,
                },
                {
                  image: width > 800 ? image : mobileImage,
                  speed: -60,
                  scale: [1.03, 1.23],
                  expanded: false,
                },
                {
                  image: width > 800 ? image : mobileImage,
                  speed: showFirst ? -10 : 0,
                  // scale: [1.01, 1.01],
                  expanded: false,
                },
              ]}
              className='banner__background'
            >
              <div className={width < 800 ? "banner__background__overlay" : ""}>
                <div className='banner__background__text'>
                  <div className='home-banner-title'>A&W CAPITAL</div>
                  <div className='home-banner-content'>
                    A Global Boutique Investment Bank
                  </div>

                  <div className='home-banner-sub-content'>
                    <span>London</span>
                    <span style={{ margin: '0 15px' }}>|</span>
                    <span>Mumbai</span>
                  </div>

                  <Link to='/about' className='home-banner-about-button'>
                    About Us
                  </Link>
                </div>
              </div>
            </ParallaxBanner>
          </div>

          {/* <!-- Our Home Services Section Here dev.nur--> */}
          <section className='home-services-content'>
            {/* <!-- services header --> */}
            <div className='section-heading'>Our Services</div>
            {/* <!-- services header --> */}

            {/* <!-- services content --> */}
            <div className='home-services-content-item-container'>
              {services?.map((data) => (
                <div key={data.id} className='home-services-content-item'>
                  {data.heading === 'Capital Raising' ? (<div className='heading' style={{ width: '80%' }}>{data.heading}</div>) : (<div className='heading'>{data.heading}</div>)
                  }
                  <img loading='lazy' src={data.icon} alt='services_icon' />
                </div>
              ))}
            </div>
            {/* <!-- services content --> */}
          </section>
          {/* <!-- Our Home Services Section Ends Here --> */}

          {/* <!-- Our Home Coverage Area Here --> */}

          <section>
            <div className='section-heading'>Our Coverage</div>
            <div className='home-desc' id='scroll-first-section'>
              <HomeDescItem
                image={image1}
                title='Sports'
                description='Proprietary deal making across leading sports properties globally '
              />
              <HomeDescItem
                image={image3}
                title='Gaming'
                description='Deep industry coverage with a pole position in the Indian market'
              />
              <HomeDescItem
                image={image2}
                title='Digital Media'
                description='Sector expertise with a focus on global media strategics '
              />
            </div>
          </section>
          {/* <!-- Our Home Coverage Area Ends Here --> */}
          <section className='home-client'>
            <div className='section-heading'>Our Clientele</div>
            <div className='home-client-item'>
              <img src={clientLogo3} alt='adidas' />

              <img src={clientLogo2} alt='adidas' />

              <img src={clientLogo4} alt='adidas' />

              <img src={clientLogo1} alt='adidas' />
              <img src={clientLogo5} alt='adidas' />

              <img src={clientLogo6} alt='adidas' />

              <img src={clientLogo8} alt='adidas' />

              <img src={clientLogo7} alt='adidas' />
            </div>
          </section>
          <div className='home-carousel'>
            <div className='carousel-heading'>
              <div className='section-heading'>Testimonials</div>
            </div>

            <div className='carousel-slick-container'>
              <div className='home-carousel-item-center'></div>
              <Slider
                {...settings}
                className='carousel-slick'
                ref={(ref) => (sliderRef.current = ref)}
              >
                <div>
                  <div
                    className={
                      aboutToChange
                        ? `home-carousel-item ${currentAnimation}`
                        : "home-carousel-item"
                    }
                  >
                    <div className='home-carousel-image'>
                      <img loading='lazy' src={quote} alt='quote' />
                      <img loading='lazy' src={quote} alt='quote' />
                    </div>
                    <div className='home-carousel-text'>
                      <p>
                        Matthew and the A&W team have worked with us both in
                        India and international markets. Their knowledge,
                        experience, insight and contacts are unrivalled and
                        invaluable.
                      </p>
                    </div>
                    <div className='home-carousel-footer'>
                      <img loading='lazy' src={avatar} alt='avatar' />
                      <div className='home-carousel-footer-text'>
                        <p className='home-carousel-footer-text-main'>
                          Hemchandra Javeri
                        </p>
                        <p className='home-carousel-footer-text-sub'>
                          CEO at Zeven
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className={
                      aboutToChange
                        ? `home-carousel-item ${currentAnimation}`
                        : "home-carousel-item"
                    }
                  >
                    <div className='home-carousel-image'>
                      <img loading='lazy' src={quote} alt='quote' />
                      <img loading='lazy' src={quote} alt='quote' />
                    </div>
                    <div className='home-carousel-text'>
                      <p>
                        Matthew and the A&W team are our gateway into Europe and
                        they also know and understand the Indian sport and media
                        landscape as well as anyone
                      </p>
                    </div>
                    <div className='home-carousel-footer'>
                      <img loading='lazy' src={avatar} alt='avatar' />
                      <div className='home-carousel-footer-text'>
                        <p className='home-carousel-footer-text-main'>
                          Bunty Sajdeh
                        </p>
                        <p className='home-carousel-footer-text-sub'>
                          CEO at CornerStone
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className={
                      aboutToChange
                        ? `home-carousel-item ${currentAnimation}`
                        : "home-carousel-item"
                    }
                  >
                    <div className='home-carousel-image'>
                      <img loading='lazy' src={quote} alt='quote' />
                      <img loading='lazy' src={quote} alt='quote' />
                    </div>
                    <div className='home-carousel-text'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </p>
                    </div>
                    <div className='home-carousel-footer'>
                      <img loading='lazy' src={avatar} alt='avatar' />
                      <div className='home-carousel-footer-text'>
                        <p className='home-carousel-footer-text-main'>
                          Kate Grey
                        </p>
                        <p className='home-carousel-footer-text-sub'>
                          CEO at Abcxyz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className={
                      aboutToChange
                        ? `home-carousel-item ${currentAnimation}`
                        : "home-carousel-item"
                    }
                  >
                    <div className='home-carousel-image'>
                      <img loading='lazy' src={quote} alt='quote' />
                      <img loading='lazy' src={quote} alt='quote' />
                    </div>
                    <div className='home-carousel-text'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </p>
                    </div>
                    <div className='home-carousel-footer'>
                      <img loading='lazy' src={avatar} alt='avatar' />
                      <div className='home-carousel-footer-text'>
                        <p className='home-carousel-footer-text-main'>
                          Kate Grey
                        </p>
                        <p className='home-carousel-footer-text-sub'>
                          CEO at Abcxyz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className={
                      aboutToChange
                        ? `home-carousel-item ${currentAnimation}`
                        : "home-carousel-item"
                    }
                  >
                    <div className='home-carousel-image'>
                      <img loading='lazy' src={quote} alt='quote' />
                      <img loading='lazy' src={quote} alt='quote' />
                    </div>
                    <div className='home-carousel-text'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </p>
                    </div>
                    <div className='home-carousel-footer'>
                      <img loading='lazy' src={avatar} alt='avatar' />
                      <div className='home-carousel-footer-text'>
                        <p className='home-carousel-footer-text-main'>
                          Kate Grey
                        </p>
                        <p className='home-carousel-footer-text-sub'>
                          CEO at Abcxyz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
              <div className='carousel-controls'>
                <div className='carousel-controls-child' onClick={() => { }}>
                  <FaChevronLeft
                    className='chevron-icon'
                    size={25}
                    onClick={() => {
                      setCurrentAnimation("reverse");
                      sliderRef.current.slickPrev();
                    }}
                  />
                </div>
                <div className='carousel-controls-child' onClick={() => { }}>
                  <FaChevronRight
                    className='chevron-icon'
                    size={25}
                    onClick={() => {
                      setCurrentAnimation("change");
                      sliderRef.current.slickNext();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <section className='home-client-contact'>
            <div className='home-client-contact-details'>
              <div className='section-heading-contact-us'>Contact Us</div>
              <h1
                style={{ textTransform: "uppercase" }}
                className='desktop-client-contact-header'
              >
                Contact Our Support Team
              </h1>

              <p>Need to get in touch with our team? We’re all ears.</p>
              <div className='mobile-header-btn'>
                <Link to='/contact' className='header-btn '>
                  Write to us
                </Link>
              </div>
            </div>
            <div className='home-clientcontact-image'>
              <img loading='lazy' src={contactImage} alt='contactimage' />
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Home;
