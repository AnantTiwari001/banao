import React from "react";
import "../css/client.css";
function ClientInfo({
  id,

  image1,
  image2,
  image3,
  image4,
  text,
  countryLogo1,
  countryLogo2,
}) {
  return (
    <div className='client-box'>
      <div className='client-box-upper'>
        <img
          loading='lazy'
          src={`https://admin.awcapitalltd.com/${image1}`}
          alt='adidas'
          className='image'
        />
        <div className='logo'>
          <img
            loading='lazy'
            src={`https://admin.awcapitalltd.com/${countryLogo1}`}
            alt='logo'
          />
        </div>
      </div>
      <div className='text'>
        <p>{text}</p>
      </div>
      <div className='client-box-lower'>
        <div>
          <img
            loading='lazy'
            src={`https://admin.awcapitalltd.com/${image2}`}
            alt='adidas'
            className={
              image2 && image3 && image4
                ? "three_images"
                : image2 && image3
                ? `two_images_${id}-first`
                : "image"
            }
          />
        </div>

        {image3 && (
          <div>
            <img
              loading='lazy'
              src={`https://admin.awcapitalltd.com/${image3}`}
              alt='adidas'
              className={
                image2 && image3 && image4
                  ? "three_images"
                  : image2 && image3
                  ? `two_images_${id}-second`
                  : "image"
              }
            />
          </div>
        )}
        {image4 && (
          <div>
            <img
              loading='lazy'
              src={`https://admin.awcapitalltd.com/${image4}`}
              alt='adidas'
              className={
                image2 && image3 && image4
                  ? "three_images"
                  : image2 && image3
                  ? `two_images_${id}`
                  : "image"
              }
            />
          </div>
        )}
        <div className='logo'>
          <img
            loading='lazy'
            src={`https://admin.awcapitalltd.com/${countryLogo2}`}
            alt='logo'
          />
        </div>
      </div>
    </div>
  );
}

export default ClientInfo;
