import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import twitter from "../assets/twitter.svg"
import insta from "../assets/instagram.svg"
import fb from "../assets/fb.svg"
import { setActiveNav } from "../actions";
import "./../css/footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className='footer main-font'>
      <div className='footer-nav-container'>
        <ul className='footer-nav'>
          <li>
            <Link to='/about' onClick={() => dispatch(setActiveNav("about"))}>
              <p>About Us</p>{" "}
            </Link>
          </li>
          <li>
            <p onClick={() => navigate("/privacy")}>Privacy Policy</p>
          </li>
          <li>
            <p>Terms of services</p>
          </li>
          <li>
            <Link
              to='/contact'
              onClick={() => {
                // console.log("set")
                dispatch(setActiveNav("null"));
              }}
            >
              <p>Contact Us</p>
            </Link>
          </li>
        </ul>
        <ul className='footer-nav socials'>
          <li>
            <Link to='/'>
              <img src={twitter} alt=""/>
            </Link>
          </li>
          <li>
          <Link to='/'>
              <img src={insta} alt=""/>
            </Link>
          </li>
          <li>
          <Link to='/'>
              <img src={fb} alt=""/>
            </Link>
          </li>
          
        </ul>
      </div>
      <div className='footer-text-1'>
        © 2023 A&W Capital-Sports and Media Advisory
      </div>
      <div className='footer-text-2'> All rights reserved.</div>
    </div>
  );
};
export default Footer;
