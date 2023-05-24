import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "../styles/Banner.css";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
function Banner() {
  return (<>
   <div className="banner">
      <h1 style={{fontWeight:"bold", margin:"2vh",fontSize:"2rem"}}>Historic Valencia awaits you ... HERE.</h1>
      <div className="mainbox">
        <div className="box1">
          
          <StarIcon />
          <h6>. 4.85 </h6>
          <h6> .41reviews</h6>
          <SportsHandballIcon>super host</SportsHandballIcon>
          <h6> .València, Comunidad Valenciana, Spain</h6>
        </div>
        <div className="box2">
          <button>
            share <IosShareIcon />
          </button>
          <button>
            save <FavoriteBorderIcon />
          </button>
        </div>
      </div>
      
    </div>

      <div className="Images-container">
        <div className="big-img">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/0eb18b3d-9bca-4e1c-bb84-15101b07832b.jpeg?im_w=960" alt="bg"/>
        </div>
        <div className="small-img">
             <img src="https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/25c9d6ce-8ee6-43dd-b396-04fcdb348ca3.jpeg?im_w=1200" alt="1"/>
             <img src="https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/32ad0798-91c7-4e4c-a0d7-29d2e439b17d.jpeg?im_w=1200" alt="2"/>
             <img src="https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/8d05d373-a593-4ff7-8276-7c76d56d1346.jpeg?im_w=720" alt="3"/>
             <img src="https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/56c5e0da-faa3-4b7c-9951-95b605fc8473.jpeg?im_w=1200" alt="4"/>
        </div>
      </div>
   
  
  </>
  );
}

export default Banner;
