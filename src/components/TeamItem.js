import React, { useEffect, useState } from "react";
import placeholder from "../assets/team/image (3).png";
import x_icon from "../assets/team/x-icon.svg";
import "../css/team.css";

const TeamItem = ({ data }) => {
  const [showDetails, setShowDetails] = useState({
    show: false,
    name: "",
    profile: "",
    profile_image: "",
    profile_image_mb: "",
    description_1: "",
    description_2: "",
    description_3: "",
    lnkdlin_url: "",
  });
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    const widthChange = window.addEventListener("resize", () => {
      // console.log(window.innerWidth);
      setwidth(window.innerWidth);
    });
    return window.removeEventListener("resize", widthChange);
  }, []);
  const closeDetails = () => {
    setShowDetails((prevData) => {
      return { ...prevData, show: false };
    });
  };
  const showTeamDetails = (data) => {
    //console.log(image);
    setShowDetails((prevData) => {
      return {
        ...prevData,
        show: true,
        name: data.name,
        position: data.profile,
        image: data.profile_image,
        description_1: data.description_1,
        description_2: data.description_2,
        description_3: data.description_3,
        lnkdlin_url: data.lnkdlin_url,
      };
    });
  };
  return (
    <>
      {showDetails?.show && (
        <>
          <div className='team-details-container'>
            <div className='team-details'>
              <img
                loading='lazy'
                src={x_icon}
                alt='x-icon'
                className='team-x-icon'
                onClick={() => setShowDetails(false)}
              />
              <div className='team-details-text'>
                <div className='team-details-name'>{showDetails.name}</div>
                <p className='team-details-text-role'>{showDetails.position}</p>
                <p className='team-details-text-description'>
                  {showDetails.description_1}
                </p>
                <p className='team-details-text-description-1'>
                  {showDetails.description_2}
                </p>
                <p className='team-details-text-description-1'>
                  {showDetails.description_3}
                </p>
                <a href={showDetails.lnkdlin_url}>LinkedIn</a>
              </div>
              <div className='team-details-image'>
                <img
                  loading='lazy'
                  src={showDetails.image}
                  alt='avatar'
                  className='image'
                />
              </div>
            </div>
          </div>
          <div className='mobile-team-details-container'>
            <div className='team-details'>
              <img
                loading='lazy'
                src={x_icon}
                alt='x-icon'
                className='team-x-icon'
                onClick={() => setShowDetails(false)}
              />
              <div className='team-details-image'>
                <img
                  loading='lazy'
                  src={showDetails.image}
                  alt='avatar'
                  className='image'
                />
              </div>
              <div className='team-details-text'>
                <div className='team-details-name'>{showDetails.name}</div>
                <p className='team-details-text-role'>{showDetails.position}</p>
                <p className='team-details-text-description'>
                  {showDetails.description_1} <br /> <br />{" "}
                  {showDetails.description_2}
                </p>
                <p className='team-details-text-description-1'>
                  {showDetails.description_3}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      <div className='team-item'>
        <div className='team-item-img-container'>
          <img
            loading='lazy'
            src={
              width > 600
                ? data?.profile_image
                : placeholder
                ? data.profile_image_mb
                : placeholder
            }
            alt={data?.name}
            className='team-item-img'
            onClick={() => showTeamDetails(data)}
          />
          <div className='team-item-hover'></div>
        </div>
        <div className='team-item-infomation'>
          <p className='team-item-name'>{data?.name}</p>
          <p className='team-item-position'>{data?.profile}</p>
          <img
            loading='lazy'
            src={require("../assets/team/Vector (10).png")}
            alt='vector'
            className='team-item-vector'
            onClick={() => window.open(data?.lnkdlin_url)}
          />
        </div>
      </div>
    </>
  );
};

export default TeamItem;
