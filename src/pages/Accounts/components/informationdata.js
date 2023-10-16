import React from "react";
import { useSelector } from "react-redux";
import { loginState } from "../../../redux/login";
import CustomInput from "../../../ui-components/custominput";
// import "../accounts.css"

const InformationData = (props) => {
  const {
    setUserDetails,
    userDetails,
    isDisabled = false,
    setShow,
    setShowPassword,
    setShowPopup,
  } = props;

  const { user } = useSelector(loginState);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  return (
    <>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b> Personal Information</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div className="row">
                <div className="col-12 col-md-4 ">
                  <div className="form-group">
                    <label>
                      <b>First Name </b>
                    </label>
                    <div>
                      <CustomInput
                        className="myaccount_input"
                        placeholder="Enter first name"
                        type="text"
                        name="firstName"
                        value={userDetails.firstName}
                        onChange={inputHandler}
                        maxLength={25}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 ">
                  <div className="form-group">
                    <label>
                      <b>Last Name </b>
                    </label>
                    <div>
                      <CustomInput
                        className="myaccount_input"
                        placeholder="Smith"
                        type="text"
                        name="lastName"
                        value={userDetails.lastName}
                        onChange={inputHandler}
                        maxLength={25}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 ">
                  <div className="form-group">
                    <label>
                      <b>Phone</b>
                    </label>
                    <div>
                      <CustomInput
                        className="myaccount_input"
                        type="number"
                        placeholder="Phone No"
                        name="phoneNo"
                        value={userDetails.phoneNo}
                        onChange={inputHandler} 
                        maxLength={14}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <div className="form-group">
                    <label>
                      <b>Country</b>
                    </label>
                    <div>
                      <select
                        className="myaccount_input"
                        name="country"
                        value={userDetails.country}
                        onChange={inputHandler}
                      >
                        <option value="">Select</option>
                        <option value="pk">Pakistan</option>
                        <option value="ind">India</option>
                        <option value="eng">England</option>
                      </select>
                    </div>
                    <div>
                      <CustomInput
                        className="myaccount_input"
                        placeholder="Enter"
                        type="text"
                        name="addressMain"
                        value={userDetails.addressMain}
                        onChange={inputHandler}
                        maxLength={150}
                      />
                    </div>
                    <div>
                      <CustomInput
                        className="myaccount_input"
                        placeholder="Smith"
                        type="text"
                        name="address"
                        value={userDetails.address}
                        onChange={inputHandler}
                        maxLength={150}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 ">
                  <div className="form-group">
                    <label>
                      <b>City</b>
                    </label>
                    <div>
                      <CustomInput
                        className="myaccount_input"
                        type="text"
                        placeholder="Enter"
                        name="city"
                        value={userDetails.city}
                        onChange={inputHandler}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="form-group">
                    <label>
                      <b>State</b>
                    </label>
                    <div>
                      <select
                        className="myaccount_input"
                        name="state"
                        value={userDetails.state}
                        onChange={inputHandler}
                      >
                        <option value="">Select</option>
                        <option value="pj">Punjab</option>
                        <option value="si">Sindh</option>
                        <option value="kpk">Kpk</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 ">
                  <div className="form-group">
                    <label>
                      <b>Zip</b>
                    </label>
                    <div>
                      <CustomInput
                        className="myaccount_input"
                        type="text"
                        placeholder="Enter"
                        name="zip"
                        value={userDetails.zip}
                        onChange={inputHandler}
                        maxLength={5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <b> Facebook, Google & Apple Connect</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>
                You may disconnect your Hibir.com account from facebook, Google or Apple by clicking
                on the disconnect button below{" "}
              </p>

              <div className="row">
                <div className="col-md-6">
                  <div className="pt-3">
                    <button
                      className="google_social_button"
                      type="button"
                      onClick={() => (user?.isGoogle ? setShowPopup(true) : null)}
                    >
                      {user?.isGoogle ? "Dis" : "C"}ontinue With Google
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pt-3">
                    <button className="fb_social_button" type="button">
                      {user?.isFacebook ? "Dis" : "C"}ontinue With Facebook
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pt-3">
                    <button className="apple_social_button" type="button">
                      {user?.isApple ? "Dis" : "C"}ontinue With Apple
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <b> Login & Security</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>User ID: {userDetails?._id}</p>
              <div className="row">
                <div className="col-12 col-md-6">
                  <label>
                    <b>Update Email</b>
                  </label>
                  <div className="myaccount_loginsecurity">
                    <CustomInput
                      type="email"
                      className="accountpassupdate_input"
                      placeholder="johnsmith@gmail.com"
                      disabled={true}
                      value={userDetails.email}
                    />
                    <button
                      className="updatepassbtn"
                      onClick={() => (isDisabled ? null : setShow(true))}
                    >
                      Update
                    </button>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <label>
                    <b>Update Your Password</b>
                  </label>
                  <div className="myaccount_loginsecurity">
                    <CustomInput
                      type="password"
                      className="accountpassupdate_input"
                      placeholder="********"
                    />
                    <button
                      className="updatepassbtn"
                      onClick={() => (isDisabled ? null : setShowPassword(true))}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingfour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <b> Account Data</b>
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingfour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div className="row">
                <div className="col-12">
                  <h6 className="account_deactivate_class">
                    <b>Deactivate My Account </b>
                  </h6>
                  <p className="account_deactivate_class">
                    By deactivate your account, you will no longer be able to access your account or
                    sign in to Hibir.com{" "}
                  </p>
                </div>
                <div className="col-12">
                  <button className="deactive_account_btn" type="button">
                    Deactivate Account
                  </button>
                </div>
                <hr></hr>
                <div className="col-12">
                  <h6 className="account_deactivate_class">
                    <b>Personal Data </b>
                  </h6>
                  <p className="account_deactivate_class">
                    At Hibir.com, protecting your privacy is important to us. You can use these
                    tools to view data you provided to our site. If you are a California resident
                    you have certain additional rights:{" "}
                    <a className="account_click_rights" href="#accounts">
                      Click here{" "}
                    </a>{" "}
                    to view these rights
                  </p>
                </div>

                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationData;