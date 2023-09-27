import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import mobileImage from "../assets/Image-6-mobile.webp";
import v1 from "../assets/media/ellipse.svg";
import "../css/media.css";
import { getMedia, setActiveNav } from "./../actions";
import image from "./../assets/media/media-update-banner.png";
import MediaDetails from "./MediaDetails";

const Media = () => {
  const [showFirst, setshowFirst] = useState(false);

  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
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
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const scrollContent = document.getElementById("scroll-first-section");
      const contentHeight =
        scrollContent.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: contentHeight, behavior: "smooth" });
    }, 2500);
    return () => clearTimeout(timeOutId);
  }, []);
  const dispatch = useDispatch();
  const mediaData = useSelector((state) => state.media);
  const currentNavState = useSelector((state) => state.showMobileNav);
  let media;
  if (mediaData) media = mediaData.media;

  useEffect(() => {
    dispatch(getMedia());
    dispatch(setActiveNav("media"));
  }, [dispatch]);
  const handleRedirect = (uri) => {
    if (uri) window.open(uri, "_self");
  };
  return (
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

              expanded: false,
            },
          ]}
          className='banner__background'
        >
          <div className='banner__background__overlay__about'>
            <div className='banner__background__text'></div>
          </div>
        </ParallaxBanner>
      </div>

      <div className='section media-container' id='scroll-first-section'>
        {media && (
          <>
            <div className='media'>
              <div className='media-relative media-banner media-banner-mobile'>
                <img loading='lazy' src={media[0]?.media_image} alt='label' />

                <div className='media-details-date'>
                  <p>{media[0]?.category.category_name}</p>
                  <img
                    loading='lazy'
                    src={v1}
                    alt='vector'
                    className='vector-image'
                  />
                  <p>{media[0]?.published_at}</p>
                </div>
                <div className='title'>
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href={media[0]?.media_redirect}
                    target='_blank'
                  >
                    <p className='p'>
                      {media[0]?.headlines.length > 90
                        ? `${media[0]?.headlines.slice(0, 80)} ...`
                        : media[0]?.headlines}
                    </p>
                  </a>
                </div>
              </div>
              <div className='media-subgrid'>
                <div className='media media-fraction'>
                  <div className='sub-media-details-container'>
                    <MediaDetails
                      image={media[1]?.media_image}
                      postedBy={media[1]?.author_name}
                      sportName={media[1]?.category.category_name}
                      date={media[1]?.published_at}
                      title={media[1]?.headlines}
                      authorImage={media[1]?.author_image}
                      redirectUri={media[1]?.media_redirect}
                    />
                  </div>
                  <div className='sub-media-details-container'>
                    <MediaDetails
                      image={media[2]?.media_image}
                      postedBy={media[2]?.author_name}
                      sportName={media[2]?.category.category_name}
                      date={media[2]?.published_at}
                      title={media[2]?.headlines}
                      authorImage={media[2]?.author_image}
                      redirectUri={media[2]?.media_redirect}
                    />
                  </div>
                </div>

                <div className='media media-fraction'>
                  <div>
                    <MediaDetails
                      image={media[3]?.media_image}
                      postedBy={media[3]?.author_name}
                      sportName={media[3]?.category.category_name}
                      date={media[3]?.published_at}
                      title={media[3]?.headlines}
                      authorImage={media[3]?.author_image}
                      redirectUri={media[3]?.media_redirect}
                    />
                  </div>
                  <div>
                    <MediaDetails
                      image={media[4]?.media_image}
                      postedBy={media[4]?.author_name}
                      sportName={media[4]?.category.category_name}
                      date={media[4]?.published_at}
                      title={media[4]?.headlines}
                      authorImage={media[4]?.author_image}
                      redirectUri={media[4]?.media_redirect}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <Link className='services-btn-text' to='/contact'>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Media;
