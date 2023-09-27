import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setNav } from "../actions";
import logo from "./../assets/logo.svg";
import "./../css/header.css";

const Header = () => {
  const container = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerDirection: 1,
        staggerChildren: 0.08,
        stiffness: 10,
        duration: 0.5,
        bounce: 0,
        damping: 100,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0 },
    transition: {
      stiffness: 0,
      duration: 1,
      bounce: 0,
      type: "spring",
    },
  };
  const [showNav, setShowNav] = useState(false);
  const [isChanging, setisChanging] = useState(false);
  const [firstRender, setfirstRender] = useState(false);
  const activeNav = useSelector((state) => state.activeNav);
  // console.log(activeNav);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!firstRender) {
      setfirstRender(true);
      return;
    }
    setisChanging(true);
    let timeOutid = setTimeout(() => {
      setisChanging(false);
    }, 300);
    return () => clearTimeout(timeOutid);
  }, [showNav]);

  return (
    <div className='header-caontainer main-font'>
      <div className='header'>
        <div>
          <Link to='/'>
            <img loading="lazy" src={logo} alt='logo' className='header-image' />
          </Link>
        </div>
        <ul className='header-nav'>
          <li className={
                  activeNav === "home"
                    ? "active-nav custom-home-height"
                    : "custom-home-height"
                }>
            <Link to='/'>
                Home
            </Link>
          </li>
          <li><div className="header-border"></div></li>
          <li className={
                  activeNav === "about"
                    ? "header-shadow"
                    : " header-shadow"
                }>
            <Link to='/about'>
              
                About Us
              
            </Link>
          </li>
          <li><div className="header-border"></div></li>
          <li className={
                  activeNav === "project"
                    ? "active-nav "
                    : ""
                }>
            <Link to='/projects'>
               Our Projects
              
            </Link>
          </li>
          <li><div className="header-border"></div></li>
          <li className={
                  activeNav === "services"
                    ? "active-nav "
                    : ""
                }>
            
            <Link to='/services'>
              
                Services
              
            </Link>
          </li>
          <li><div className="header-border"></div></li>
          <li className={
                  activeNav === "team"
                    ? "active-nav "
                    : ""
                }>
            <Link to='/teams'>
              
                Our Team
             
            </Link>
          </li>
          <li><div className="header-border"></div></li>
          <li className={
                  activeNav === "media"
                    ? "active-nav "
                    : ""
                }>
            <Link to='/media'>
              
                A&W In the Media
             
            </Link>
          </li>
        </ul>
        
            <Link to='/contact' className='header-btn'>
              Contact Us
            </Link>
         
        <div className='hamburger-icon'>
          <Hamburger
            toggled={showNav}
            direction={showNav ? "right" : "left"}
            onToggle={(toggled) => {
             
              setShowNav(!showNav);
              dispatch(setNav(!showNav));
            }}
            rounded
            className='hamburger'
          />
        </div>
      </div>
      {showNav && (
        <div className='mobile-nav'>
          <motion.ul
            variants={container}
            initial='hidden'
            animate='show'
            className='mobile-header-nav'
          >
            <motion.li
              variants={item}
              onClick={() => {
                setShowNav(false);
                dispatch(setNav(false));
              }}
            >
              <Link to='/'>
                <p
                  className={
                    activeNav === "home"
                      ? "mobile-links active"
                      : "mobile-links"
                  }
                >
                  Home
                </p>
              </Link>
            </motion.li>
            <motion.li
              variants={item}
              onClick={() => {
                setShowNav(false);
                dispatch(setNav(false));
              }}
            >
              <Link to='/about'>
                <p
                  className={
                    activeNav === "about"
                      ? "mobile-links active"
                      : "mobile-links"
                  }
                >
                  About Us
                </p>
              </Link>
            </motion.li>
            <motion.li
              variants={item}
              onClick={() => {
                setShowNav(false);
                dispatch(setNav(false));
              }}
            >
              <Link to='/projects'>
                <p
                  className={
                    activeNav === "project"
                      ? "mobile-links active"
                      : "mobile-links"
                  }
                >
                  Our Projects
                </p>
              </Link>
            </motion.li>
            <motion.li
              variants={item}
              onClick={() => {
                setShowNav(false);
                dispatch(setNav(false));
              }}
            >
             
              <Link to='/services'>
                <p
                  className={
                    activeNav === "services"
                      ? "mobile-links active"
                      : "mobile-links"
                  }
                >
                  Services
                </p>
              </Link>
            </motion.li>
            <motion.li
              variants={item}
              onClick={() => {
                setShowNav(false);
                dispatch(setNav(false));
              }}
            >
              <Link to='/teams'>
                <p
                  className={
                    activeNav === "team"
                      ? "mobile-links active"
                      : "mobile-links"
                  }
                >
                  Our Team
                </p>
              </Link>
            </motion.li>
            <motion.li
              variants={item}
              onClick={() => {
                setShowNav(false);
                dispatch(setNav(false));
              }}
            >
              <Link to='/media'>
                <p
                  className={
                    activeNav === "media"
                      ? "mobile-links active"
                      : "mobile-links"
                  }
                >
                  A&W in the media
                </p>
              </Link>
            </motion.li>
          </motion.ul>
          
        </div>
      )}
    </div>
  );
};
export default Header;
