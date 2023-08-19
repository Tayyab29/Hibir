import React from "react";
import { BsSend, BsTelephone } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_main">
      <div className="news_letter_div">
        <div className="wdth_60">
          <div className="row">
            <div className="col-md-5">
              <h2>
                <b>Newsletter</b>
              </h2>
              <p className="newsletter_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
            </div>
            <div className="col-md-7">
              <div className="main_input_div">
                <div className="display_input_button">
                  <input
                    type="text"
                    placeholder="Your Email Address"
                    className="footer_input"
                  />
                  <button className="subscribe_btn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row footer_text_container">
        <div className="col-md-1"></div>
        <div className="col-12 col-md-4 mr-5">
          <img src="images/footer.png" alt="footer img" />
          <p className="footer_text_color pt-4">
            Ut ut neque pellentesque massa dignissim auctor sed non orci. Aenean
            porttitor, dui iaculis ornare pellentesque, elit nisi consequat
            ipsum, gravida pellentesque lacus ipsum ac nisi.
          </p>
        </div>

        <div className="col-md-2">
          <h5 className="footer_text_color pb-3">Links</h5>
          <p className="footer_text_color lh-1">Home</p>
          <p className="footer_text_color lh-1">About Us</p>
          <p className="footer_text_color lh-1">Advertise</p>
          <p className="footer_text_color lh-1">Contact Us</p>
        </div>
        <div className="col-md-2">
          <h5 className="footer_text_color">Follow Us</h5>
          <div className="d-flex">
            <div className="img_div_icon">
              <img src="images/facebook.png" alt="Facebook" width="7px" />
            </div>
            <p className="footer_text_color ml-1">HibirBet</p>
          </div>
          <div className="d-flex">
            <div className="img_div_icon_twitter">
              <img src="images/twitter.png" alt="Facebook" width="12px" />
            </div>
            <p className="footer_text_color ml-1">HibirBet</p>
          </div>
          <div className="d-flex">
            <div className="img_div_icon">
              <img src="images/linkden.png" alt="Facebook" width="9px" />
            </div>
            <p className="footer_text_color ml-1">HibirBet</p>
          </div>
        </div>
        <div className="col-md-2">
          <h5 className="footer_text_color">Get In Touch</h5>
          <div className="d-flex">
            <div className="img_div_icon_twitter">
              <BsTelephone color="#1EB560" />
            </div>
            <p className="footer_text_color">111-222-3334</p>
          </div>
          <div className="d-flex">
            <div className="img_div_icon_twitter">
              <BsSend color="#1EB560" />
            </div>
            <p className="footer_text_color">Info@Hibir.com</p>
          </div>
          <div className="d-flex">
            <div className="img_div_icon_twitter">
              <BiMap color="#1EB560" />
            </div>
            <p className="footer_text_color">111-222-3334</p>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="copyright_div">
        <p className="copyright_text">
          Copyright © 2023 Hibir. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
