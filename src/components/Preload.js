import React from "react";
import preloadGif from "../assets/preload-gif.gif";
import "../css/preload.css";

function Preload() {
  return (
    <body className='preload__container'>
      <img loading='lazy' src={preloadGif} alt='loader' style={{position:'absolute', top:'-9%', left:'44%', scale:'0.8'}} />
      <div style={{height:'100vh', }}>
        <div style={{height:'85px', padding:'0 50px', display:'flex', justifyContent:'space-between', alignItems:'center', }}>
          <div style={{width:'241px', height:'53px'}} className="skeleton">
          </div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flex:1, margin:'0 145px'}} >
            <div className="skeleton skeleton-text" style={{ marginRight:'10px', height:'25px'}} ></div>
            <div className="skeleton skeleton-text" style={{ marginRight:'10px', height:'25px'}} ></div>
            <div className="skeleton skeleton-text" style={{ marginRight:'10px', height:'25px'}} ></div>
          </div>
          <div style={{width:'97px', height:'24px'}} className="skeleton"></div>
        </div>
        <div className="bannerS">
        </div>
        <div style={{padding:'30px 50px'}}>
          <div className="skeleton skeleton-text" style={{width:'140px', height:'23px'}}></div>
          <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', padding:'30px 0'}}>
            <div style={{height:'225px', width:'200px'}} className="skeleton" ></div>
            <div style={{height:'225px', width:'200px'}} className="skeleton" ></div>
            <div style={{height:'225px', width:'200px'}} className="skeleton" ></div>
            <div style={{height:'225px', width:'200px'}} className="skeleton" ></div>
            <div style={{height:'225px', width:'200px'}} className="skeleton" ></div>
          </div>
        </div>
        <div style={{padding:'30px 50px'}}>
          <div className="skeleton skeleton-text" style={{width:'140px', height:'23px'}}></div>
          <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', padding:'30px 0'}}>
            <div style={{height:'100px', width:'350px', borderRadius:'5px'}} className="skeleton" ></div>
            <div style={{height:'100px', width:'350px', borderRadius:'5px'}} className="skeleton" ></div>
            <div style={{height:'100px', width:'350px', borderRadius:'5px'}} className="skeleton" ></div>
          </div>
        </div>
        <div style={{width:'100%', height:'80px', borderRadius:0, opacity:1, backgroundColor:'black'}} className="skeleton">

        </div>
        {/* <div style={{height:'60px'}} ></div> */}
      </div>
      {/* <div className='preload__main'>
        <h1>Loading ...</h1>
        <img loading='lazy' src={preloadGif} alt='loader' />
      </div> */}
    </body>
  );
}

export default Preload;
