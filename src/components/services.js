import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import { getServices, setActiveNav } from "../actions";
import mobileImage from "./../assets/Image-5-mobile.webp";
import image from "./../assets/service-banner-image.png";
import "./../css/services.css";

const Services = () => {
  const scroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  const [showFirst, setshowFirst] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const scrollContent = document.getElementById("scroll-first-section");
      const contentHeight =
        scrollContent.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: contentHeight, behavior: "smooth" });
    }, 2500);
    return () => clearTimeout(timeOutId);
  }, []);
  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      if (!showFirst) setshowFirst(true);
    });
    return window.removeEventListener("scroll", scrollEvent);
  }, []);
  useEffect(() => {
    const widthChange = window.addEventListener("resize", () => {
      setwidth(window.innerWidth);
    });
    return window.removeEventListener("resize", widthChange);
  }, []);
  const dispatch = useDispatch();
  const servicesData = useSelector((state) => state.services);
  const currentNavState = useSelector((state) => state.showMobileNav);

  useEffect(() => {
    dispatch(getServices());
    dispatch(setActiveNav("services"));
  }, [dispatch]);
  const data = [
    {
      heading: "M&A Advisory",
      description: "A work that intermediaries do in mergers and acquisitions",
      feature:
        " Discovering opportunities, providing strategic advice and managing all phases of the M&A process within the sports, gaming, media and entertainment industries. We have a strong track record of success in aiding partners achieve their strategic goals, minimizing risk and ensuring acomprehensive service.",
    },
    {
      heading: "M&A Advisory",
      description: "A work that intermediaries do in mergers and acquisitions",
      feature:
        " Discovering opportunities, providing strategic advice and managing all phases of the M&A process within the sports, gaming, media and entertainment industries. We have a strong track record of success in aiding partners achieve their strategic goals, minimizing risk and ensuring acomprehensive service.",
    },
    {
      heading: "M&A Advisory",
      description: "A work that intermediaries do in mergers and acquisitions",
      feature:
        " Discovering opportunities, providing strategic advice and managing all phases of the M&A process within the sports, gaming, media and entertainment industries. We have a strong track record of success in aiding partners achieve their strategic goals, minimizing risk and ensuring acomprehensive service.",
    },
    {
      heading: "M&A Advisory",
      description: "A work that intermediaries do in mergers and acquisitions",
      feature:
        " Discovering opportunities, providing strategic advice and managing all phases of the M&A process within the sports, gaming, media and entertainment industries. We have a strong track record of success in aiding partners achieve their strategic goals, minimizing risk and ensuring acomprehensive service.",
    },
    {
      heading: "M&A Advisory",
      description: "A work that intermediaries do in mergers and acquisitions",
      feature:
        " Discovering opportunities, providing strategic advice and managing all phases of the M&A process within the sports, gaming, media and entertainment industries. We have a strong track record of success in aiding partners achieve their strategic goals, minimizing risk and ensuring acomprehensive service.",
    },
    {
      heading: "M&A Advisory",
      description: "A work that intermediaries do in mergers and acquisitions",
      feature:
        " Discovering opportunities, providing strategic advice and managing all phases of the M&A process within the sports, gaming, media and entertainment industries. We have a strong track record of success in aiding partners achieve their strategic goals, minimizing risk and ensuring acomprehensive service.",
    },
  ];

  return (
    <div className='body main-font'>
      {currentNavState && <div className='mobile-overlay'></div>}
      <div className='services'>
        <div className='services__banner'>
          <ParallaxBanner
            layers={[
              {
                image: width > 800 ? image : mobileImage,
                speed: -65,
                scale: [1.06, 1.26],
                expanded: false,
              },
              {
                image: width > 800 ? image : mobileImage,
                speed: -30,
                scale: [1.03, 1.23],
                expanded: false,
              },
              {
                image: width > 800 ? image : mobileImage,
                speed: showFirst ? -15 : 0,
                // scale: [-0.1, 1.01],
                expanded: false,
              },
            ]}
            className='banner__background'
          >
            <div className='banner__background__overlay'>
              <div className='banner__background__text'></div>
            </div>
            <div></div>
          </ParallaxBanner>
        </div>
        <div className='section service-section' id='scroll-first-section'>
          <div className='service-container'>
            {servicesData?.services?.map((item) => (
              <div className='service' key={`item-${item.id}`}>
                <div className='service-item'>
                  <div className='service-heading'>{item.heading}</div>
                  <img
                    loading='lazy'
                    src={item.icon}
                    alt='item-icon'
                    className='item-icon'
                  />
                </div>
                <>
                  <div className='mobile-services-header'>
                    <div>Description</div>
                  </div>
                  <div
                    className={`service-content service-description-${item.id}`}
                  >
                    {item.description}
                  </div>
                </>
                <>
                  <div className='mobile-services-header'>
                    <div>Elaborated Features</div>
                  </div>
                  <div className='service-content'>
                    <div className='service-content-ul'>
                      <ul>
                        {item?.feature.split(",").map((data) => {
                          return <li>{data}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </>
              </div>
            ))}
          </div>
          <Link className='services-btn-text' to='/contact'>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Services;
