import React from "react";

const GooglePlay = () => {
  return (
    <>
      {/* <div className="google_img_div">
        <img src="images/mob_bg.png" width="100%"></img>
      </div> */}
      <div className="google_overlay_img"></div>
      <div className="container-fluid">
        <div className="google_pos_absolute">
          <div className="row">
            <div className="col-12 col-md-4">Picturee</div>
            <div className="col-12 col-md-8 google_text_overlay">
              <b>
                <h1>Take Us With You</h1>
              </b>
              <p className="google_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="google_description">Sed Do Eiusmod Tempor Incididunt</p>
              <div className="mt-5">
                <img src="images/playstor_app_store.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GooglePlay;
