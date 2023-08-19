import React from "react";

const CreateAccount = () => {
  return (
    <>
      <div className="create_overlay_img">
        <section className="create_pos">
          <div className="container">
            <div className="row">
              {/* <div className="col-md-2"></div> */}
              <div className="col-md-6">
                <h2 className="create_text_h1">
                  <b>If You Are Going To Use</b>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="pt-2">
                  <button className="create_account_btn">Get Started</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="manage_header_img">
                  <img src="images/createimg.png" alt="Manage img" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateAccount;
