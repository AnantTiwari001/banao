import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ParallaxBanner } from "react-scroll-parallax";
import { getTeam, setActiveNav } from "../actions";
import "../css/team.css";
import image from "./../assets/team/background.webp";
import mobileImage from "./../assets/team/mobile-background.webp";
import TeamItem from "./TeamItem";
const Team = () => {
  const scroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  const [showFirst, setshowFirst] = useState(false);
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
        scrollContent.getBoundingClientRect().top + window.pageYOffset + 100;
      window.scrollTo({ top: contentHeight, behavior: "smooth" });
    }, 2500);
    return () => clearTimeout(timeOutId);
  }, []);
  const dispatch = useDispatch();
  const teamData = useSelector((state) => state.team);
  const [width, setwidth] = useState(window.innerWidth);
  const currentNavState = useSelector((state) => state.showMobileNav);
  useEffect(() => {
    const widthChange = window.addEventListener("resize", () => {
      setwidth(window.innerWidth);
    });
    return window.removeEventListener("resize", widthChange);
  }, []);

  let teamMembers;
  if (teamData) teamMembers = teamData?.team;
  useEffect(() => {
    dispatch(getTeam());
    dispatch(setActiveNav("team"));
  }, [dispatch]);

  return (
    <div className='body main-font'>
      {currentNavState && <div className='mobile-overlay'></div>}
      <div className='mainContainer'>
        <div className='team__banner'>
          <ParallaxBanner
            layers={[
              {
                image: width > 800 ? image : mobileImage,
                speed: -85,
                scale: [1.06, 1.26],
              },
              {
                image: width > 800 ? image : mobileImage,
                speed: -60,
                scale: [1.03, 1.23],
              },
              {
                image: width > 800 ? image : mobileImage,
                speed: showFirst ? -15 : 0,
                expanded: false,
              },
            ]}
            className='banner__background'
          >
            <div className='banner__background__overlay'>
              <div className='banner__background__text'  style={{width:'100%', textAlign:'center'}}>
                
              </div>
            </div>
            <div></div>
          </ParallaxBanner>
        </div>
        <div className='team-container' id='scroll-first-section'>
          {teamMembers && (
            <>
              <div className='team-div-container'>
                <div className='team team-mobile-1'>
                  <TeamItem data={teamMembers[0]} />
                  <TeamItem data={teamMembers[1]} />
                </div>
                <div className='team'>
                  <TeamItem data={teamMembers[2]} />
                  <TeamItem data={teamMembers[3]} />
                  <TeamItem data={teamMembers[4]} />
                </div>
                <div className='team'>
                  <TeamItem data={teamMembers[5]} />
                  <TeamItem data={teamMembers[6]} />
                  <TeamItem data={teamMembers[7]} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
