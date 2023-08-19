import React from "react";
import "./home.css";
import Property from "./homecomponents/propert";
import AboutUs from "./homecomponents/aboutUs";
import GooglePlay from "./homecomponents/playStore";
import Footer from "./Footer/footer";

const home = () => {
  return (
    <>
      <section>
        <div className="overlay_img"></div>
        <div className="container-fluid">
          <div className="pos_absolute">
            <div className="text_overlay">
              <h1>
                There Are Many Variations <br></br> Of Lorem Ipsum
              </h1>
            </div>
            <div className="wdth_55">
              <div className="flex_div">
                <select className="select_style">
                  <option value="0" selected>
                    Enter A Property Type
                  </option>
                  <option value="1">property 1</option>
                  <option value="2">property 2</option>
                </select>
                <input type="text" placeholder="Enter A Location" className="input_style" />
                <button className="search_btn">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-3">
        <Property />
      </section>
      <section className="pt-3 pb-3">
        <AboutUs />
      </section>
      <section className="pt-5 pb-3 mob_pos">
        <GooglePlay />
      </section>
      <footer className="pt-5">
        <Footer />
      </footer>
    </>
  );
};

export default home;
