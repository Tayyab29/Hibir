import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginState } from "../../../redux/login";
const CheckOut = () => {
  const history = useHistory();
  const { user } = useSelector(loginState);

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
                  value={user?.email}
                  disabled
                />
              </div>
            </div>
            {/* radio Button */}
            <div className="form-group">
              <div className="text-left">
                <input type="radio" className="radio_button" />
                <span className="radio_span">Email me with news and offers</span>
              </div>
            </div>

            <div className="inline_select_unit">
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="single_unit_input"
                    placeholder="First Name"
                    value={user?.firstName}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="single_unit_input"
                    placeholder="Last Name"
                    value={user?.lastName}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>
                <b>Country</b>
              </label>
              <div>
                <select className="single_unit_input" value={user?.country} disabled>
                  <option value="">Select</option>
                  <option value="pk">Pakistan</option>
                  <option value="ind">India</option>
                  <option value="eng">England</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div>
                <input
                  type="text"
                  className="single_unit_input"
                  placeholder="Address"
                  value={user?.address}
                  disabled
                />
              </div>
            </div>
            <div className="form-group">
              <div>
                <input
                  type="text"
                  className="single_unit_input"
                  placeholder="Apartment, Suite, Etc. (Optional)"
                  value={user?.addressMain}
                  disabled
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
                    value={user?.city}
                    disabled
                  />
                </div>
              </div>

              <div className="form-group">
                <div>
                  <select className="single_unit_input" value={user?.state} disabled>
                    <option value="">Select</option>
                    <option value="pj">Punjab</option>
                    <option value="si">Sindh</option>
                    <option value="kpk">Kpk</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="single_unit_input"
                    placeholder="ZIP Code"
                    value={user?.zip}
                    disabled
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
                  value={user?.phoneNo}
                  disabled
                />
              </div>
            </div>
            <div className="add_prop_button">
              <button
                className="addprop_btn"
                type="button"
                onClick={() => history.push("./checkoutmodal")}
              >
                Checkout Now
              </button>
            </div>
            <div className="pt-2 pb-2">
              <hr className="hr_class"></hr>
              <span className="or_class">OR</span>
              <hr className="hr_class"></hr>
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
                    <b>Diamond</b>
                  </h3>
                  {/* <p>Starting at</p> */}
                </div>
                <div>
                  <h3>
                    <b>£820/Month</b>
                  </h3>
                </div>
              </div>
              <hr></hr>

              {/* body section */}

              <div className="pt-3 checkout_p_padding check_out_ul">
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form, by injected humour, or randomised words
                  which don't look even slightly believable.
                </p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore
                  </li>
                </ul>
              </div>
              <hr></hr>
              <div className="service_bottom_style">
                <h6>
                  <b>Service Charges</b>
                </h6>
                <h6>
                  <b> £20</b>
                </h6>
              </div>
              <hr></hr>
              <div className="service_bottom_style">
                <h6>
                  <b>Tax</b>
                </h6>
                <h6>
                  <b> £1%</b>
                </h6>
              </div>
              <hr></hr>
              <div className="service_bottom_style mb-3">
                <h6>
                  <b>Total Ammount</b>
                </h6>
                <h6>
                  <b> £909</b>
                </h6>
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
