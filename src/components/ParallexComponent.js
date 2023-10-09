import "../css/parallex.css";
import imgage from '../assets/Image 3 (About Us page).jpeg'

const ParallexComponent = ({img, children}) => {
  return (
    <div className="banner" >
        <img src={img} style={{ width:'100%', height:'100%', objectFit:'cover'}}  />
        <div className="content">
            {/* <h3>Hello World</h3> */}
            {children}
        </div>
    </div>
  );
};

export default ParallexComponent;
