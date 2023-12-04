import React from "react";
import "./manage.css";
import Footer from "../../components/Footer/footer";
import Contrary from "./managecomponents/contrary";
import Variations from "./managecomponents/variations";
import CreateAccount from "./managecomponents/createaccount";

const manage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {/* <div className="col-md-2"></div> */}
            <div className="col-md-6">
              <h1 className="manage_heaader_text">
                <b>
                  There Are Many Variations<br></br> Of Lorem Ipsum
                </b>
              </h1>
              <p className="manage_heaader_ptext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <h5>
                <b>Enter Your Email To Get Started!</b>
              </h5>
              <div className="manage_main_div">
                <input type="text" className="manage_input" placeholder="Enter A Location" />
                <button className="manage_getstarted">Get Started</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="manage_header_img">
                <img src="images/img_bibi.png" alt="Manage img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-3">
        <Contrary />
      </section>
      <section className="pt-5 pb-3">
        <Variations />
      </section>
      <section className="pt-5">
        <CreateAccount />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default manage;
