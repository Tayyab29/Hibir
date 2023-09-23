import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./modal.css";
import { signup } from "../../../services/users";
import SetPassordModal from "./setpassword";
// import { Link } from "react-router-dom";

const SignupModal = (props) => {
  const { setUser, user, setShowPassword, onHide } = props;
  const [show, setShow] = useState(false);

  // Handlers
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log({ name, value });
  };

  const saveHandler = async () => {
    setShowPassword(true);
    onHide();

    // try {
    //   const resp = await signup(user);
    //   console.log({ resp });
    //   if (resp) {
    //     onHide();
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_GOOGLE_URL}auth/google/callback`, "_self");
  };

  return (
    <>
      <div>
        <Modal.Body>
          <div className="text-center">
            <h3>
              <b>Create An Account</b>
            </h3>
            <p>
              Or,
              <span style={{ textDecoration: "underline", marginLeft: "5px" }}>
                Sign Into Your Account
              </span>
            </p>
          </div>

          <div className="pt-3">
            <div className="form-group">
              <div className="signle_line_input">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="input_text_signup_first"
                  onChange={inputHandler}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input_text_signup"
                  onChange={inputHandler}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input_text_login"
                onChange={inputHandler}
              />

              <div className="pt-2">
                <input type="checkbox" />
                <span>Agree to Terms & Condition</span>
              </div>
            </div>
            <div className="pt-3">
              <button className="sign_button" type="button" onClick={saveHandler}>
                Sign Up
              </button>
            </div>
            <div className="pt-2 pb-2">
              <hr className="hr_clas"></hr>
              <span className="or_clas">Or</span>
              <hr className="hr_clas"></hr>
            </div>
            <div className="pt-3">
              <button className="google_social_button" type="button" onClick={googleAuth}>
                Continue With Google
              </button>
            </div>
            <div className="pt-3">
              <button className="fb_social_button" type="button">
                Continue With Facebook
              </button>
            </div>
            <div className="pt-3">
              <button className="apple_social_button" type="button">
                Continue With Apple
              </button>
            </div>
            <div className="text-center pt-3">
              <p style={{ color: "#757575" }}>
                By registring, I accept the Hibir.com Terms of Use.
              </p>
            </div>
          </div>
        </Modal.Body>
      </div>
    </>
  );
};

export default SignupModal;
