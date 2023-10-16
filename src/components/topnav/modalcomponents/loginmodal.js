import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { googleLogin, login } from "../../../services/users";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

import "./modal.css";
import { ToastContext } from "../../../context/toast";

const LoginModal = ({ onHide, setShowForgotModal, setShowSignup }) => {
  // Context
  const toast = useContext(ToastContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const saveHandler = async () => {
    try {
      let resp = await login(user);
      if (resp.data.status) {
        toast.showMessage("Success", "User has been login successfully.", "success");
        localStorage.setItem("accessToken", resp.data.access_token);
        localStorage.setItem("Id", resp.data.user._id);
        onHide();

        window.location.reload();
      } else {
        // Handle login failure
        toast.showMessage("Error", "Invalid email & password", "error");
      }
    } catch (error) {
      console.log(error);
      toast.showMessage(
        "Error",
        "Sorry, we are unable to process your request at this time.",
        "error"
      );
    }
  };

  const googleHandler = useGoogleLogin({
    onSuccess: (CodeResponse) => responseGoogle(CodeResponse),
  });

  const responseGoogle = async (response) => {
    if (response && response.access_token) {
      try {
        const resp = await googleLogin({ token: response.access_token });
        if (resp.data.status) {
          localStorage.setItem("accessToken", resp.data.access_token);
          localStorage.setItem("Id", resp.data.user._id);
          onHide();
          window.location.reload();
        } else {
          // Handle Google login failure
        }
      } catch (error) {
        console.error("Error signing in:", error);
      }
    }
  };

  return (
    <div>
      <Modal.Body>
        <div className="text-center">
          <h3>
            <b>Sign Into Your Account</b>
          </h3>
          <p>
            Or,
            <span
              className="create-account-text"
              onClick={() => {
                setShowSignup(true);
                onHide();
              }}
            >
              Create An Account
            </span>
          </p>
        </div>

        <div className="pt-3">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input_text_login"
              onChange={inputHandler}
              max="40"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input_text_login"
              onChange={inputHandler}
            />

            <div className="pt-2 forgot_text">
              <div
                className="forgot_text"
                onClick={() => {
                  setShowForgotModal(true);
                  onHide();
                }}
              >
                Forgot your password?
              </div>
            </div>
          </div>
          <div className="pt-3">
            <button className="sign_button" type="button" onClick={() => saveHandler()}>
              Sign In
            </button>
          </div>
          <div className="pt-2 pb-2">
            <hr className="hr_clas"></hr>
            <span className="or_clas">Or</span>
            <hr className="hr_clas"></hr>
          </div>
          <div className="pt-3">
            {/* <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}> */}
            <button className="google_social_button" type="button" onClick={googleHandler}>
              Continue With Google
            </button>
            {/* </GoogleOAuthProvider> */}
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
              By signing in, I accept the
              <span style={{ textDecoration: "underline", margin: "0" }}>Terms of Use.</span>
            </p>
          </div>
        </div>
      </Modal.Body>
    </div>
  );
};

export default LoginModal;
