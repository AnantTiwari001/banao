import "../css/parallex.css";
import imgage from '../assets/Image 3 (About Us page).jpeg'
import { useEffect, useState } from "react";

const ParallexComponent = ({img, children, further}) => {// futher - 1 is furthest stay still on scroll, 0 is closest scroll with other contents
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    // Add event listener to track scroll position
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="banner" onClick={()=>console.log(scrollPosition)} >
        <img src={img} style={{ width:'100%', height:'88vh', objectFit:'cover', translate:`0 ${scrollPosition * further}px`, scale:'1.1'}}  />
        <div className="content">
            {/* <h3>Hello World</h3> */}
            {children}
        </div>
    </div>
  );
};

export default ParallexComponent;