import React from "react";

const CheckOut = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            {/*  */}
            <div className="checkout_header">
              <h1>
                <b>Checkout Details</b>
              </h1>
            </div>
            <div className="checkout_p">
              <p>Already Have An Account? Log In</p>
            </div>
            {/*  */}
            <div className="form-group">
              <label>
                <b>Contact Information</b>
              </label>
              <div>
                <input
                  type="text"
                  className="single_unit_input"
                  placeholder="Email Address"
                />
              </div>
            </div>
            {/* radio Button */}
            <div className="form-group">
              <div className="text-left">
                <input type="radio" className="radio_button" />
                <span className="radio_span">
                  Email me with news and offers
                </span>
              </div>
            </div>
            <div className="form-group">
              <label>
                <b>Shipping Information</b>
              </label>
              <div>
                <select className="single_unit_input">
                  <option value="0">Shipping Information</option>
                  <option value="1">Shipping Information</option>
                  <option value="2">Shipping Information</option>
                </select>
              </div>
            </div>
            <div className="inline_select_unit">
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="single_unit_input"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="single_unit_input"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div>
                <input
                  type="text"
                  className="single_unit_input"
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="form-group">
              <div>
                <input
                  type="text"
                  className="single_unit_input"
                  placeholder="Apartment, Suite, Etc. (Optional)"
                />
              </div>
            </div>
            <div className="inline_select_unit">
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="single_unit_input"
                    placeholder="City"
                  />
                </div>
              </div>

              <div className="form-group">
                <div>
                  <select className="single_unit_input">
                    <option value="0">State</option>
                    <option value="1">State 1</option>
                    <option value="2">State 2</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="single_unit_input"
                    placeholder="ZIP Code"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div>
                <input
                  type="number"
                  className="single_unit_input"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="add_prop_button">
              <button className="addprop_btn" type="button">
                Checkout Now
              </button>
            </div>
            <div className="pt-2 pb-2">
              <hr className="hr_clas"></hr>
              <span className="or_clas">OR</span>
              <hr className="hr_clas"></hr>
            </div>
          </div>
          {/*  */}
          <div className="col-12 col-md-6">
            <div className="packgr_card p-0 mt-3">
              <div className="subs_header">
                <h1>Subscription Summary</h1>
              </div>
              <div className="header_display checkout_header_displ">
                <div>
                  <h3>
                    <b>Platinum</b>
                  </h3>
                  <p>Starting at</p>
                </div>
                <div>
                  <h1>
                    <b>
                      £420/<small className="euro_div">month</small>
                    </b>
                  </h1>
                </div>
              </div>
              <hr></hr>

              {/* body section */}

              <div className="pt-3 checkout_p_padding">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </li>
                </ul>
              </div>
              <hr></hr>
              <div className="continuebutton_div">
                <button className="continue_btn" type="button">
                  Continue
                </button>
              </div>

              {/* body section */}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default CheckOut;
