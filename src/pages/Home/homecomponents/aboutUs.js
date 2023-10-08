import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="text-center">
        <h1>
          <b>About Us</b>
        </h1>
        <div className="">
          <p className="img_plain_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Tempor
          </p>
          <p className="img_plain_text">Incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="about_img_div">
          <img className="over_lay_bg" src="images/aboutUs.png" alt="about us"></img>
          <div className="play_icon">
            <img src="images/Vector.png" className="play_img"  alt="about us"/>
            <p className="watch_now_text">WATCH NOW</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
