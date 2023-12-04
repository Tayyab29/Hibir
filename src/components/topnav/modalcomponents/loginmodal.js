import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
// import { Link } from "react-router-dom";
import { googleLogin, login } from "../../../services/users";
import { useGoogleLogin } from "@react-oauth/google";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import "./modal.css";
import { ToastContext } from "../../../context/toast";
import CustomInput from "../../../ui-components/custominput";
import { useFormik } from "formik";
import { classNames } from "primereact/utils";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address")
    .test("valid-email", "Invalid email address", (value) => {
      if (!value) return false; // Fail if the value is empty
      const atSymbolCount = (value.match(/@/g) || []).length;
      const dotSymbolCount = (value.match(/\./g) || []).length;
      return atSymbolCount === 1 && dotSymbolCount === 1;
    }),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const LoginModal = ({ onHide, setShowForgotModal, setShowSignup, setIsDeactivate }) => {
  // Context
  const toast = useContext(ToastContext);
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: { email: "", password: "" },
    onSubmit: async (data) => {
      try {
        let resp = await login(data);
        if (resp.data.status) {
          if (resp.data.account) {
            toast.showMessage("Success", "User has been login successfully.", "success");
            localStorage.setItem("accessToken", resp.data.access_token);
            localStorage.setItem("Id", resp.data.user._id);
            onHide();
            window.location.reload();
          } else {
            onHide();
            setIsDeactivate(true);
          }
        } else {
          // Handle login failure
          toast.showMessage("Error", "Invalid user credentials", "error");
        }
      } catch (error) {
        toast.showMessage(
          "Error",
          "Sorry, we are unable to process your request at this time.",
          "error"
        );
      }
    },
  });
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validate: (data) => {
  //     let errors = {};
  //     if (!data.email) {
  //       errors.email = "Email is required.";
  //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
  //       errors.email = "Invalid email address. E.g. example@email.com";
  //     }

  //     if (!data.password) {
  //       errors.password = "Password is required.";
  //     }
  //     return errors;
  //   },
  //   onSubmit: async (data) => {
  //     try {
  //       let resp = await login(data);
  //       if (resp.data.status) {
  //         toast.showMessage("Success", "User has been login successfully.", "success");
  //         localStorage.setItem("accessToken", resp.data.access_token);
  //         localStorage.setItem("Id", resp.data.user._id);
  //         onHide();

  //         window.location.reload();
  //       } else {
  //         // Handle login failure
  //         toast.showMessage("Error", "Invalid email & password", "error");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       toast.showMessage(
  //         "Error",
  //         "Sorry, we are unable to process your request at this time.",
  //         "error"
  //       );
  //     }
  //   },
  // });

  // const inputHandler = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };

  const saveHandler = async () => {
    // try {
    //   let resp = await login(user);
    //   if (resp.data.status) {
    //     toast.showMessage("Success", "User has been login successfully.", "success");
    //     localStorage.setItem("accessToken", resp.data.access_token);
    //     localStorage.setItem("Id", resp.data.user._id);
    //     onHide();
    //     window.location.reload();
    //   } else {
    //     // Handle login failure
    //     toast.showMessage("Error", "Invalid email & password", "error");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.showMessage(
    //     "Error",
    //     "Sorry, we are unable to process your request at this time.",
    //     "error"
    //   );
    // }
  };

  const googleHandler = useGoogleLogin({
    onSuccess: (CodeResponse) => responseGoogle(CodeResponse),
  });

  const responseGoogle = async (response) => {
    if (response && response.access_token) {
      try {
        const resp = await googleLogin({ token: response.access_token });
        if (resp.data.status) {
          if (resp.data.account) {
            localStorage.setItem("accessToken", resp.data.access_token);
            localStorage.setItem("Id", resp.data.user._id);
            onHide();
            window.location.reload();
          } else {
            onHide();
            setIsDeactivate(true);
          }
        } else {
          // Handle Google login failure
        }
      } catch (error) {
        console.error("Error signing in:", error);
      }
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };
  return (
    <div>
      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
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
              <CustomInput
                type="email"
                name="email"
                placeholder="Email Address"
                className="input_text_login"
                // onChange={inputHandler}
                maxLength={40}
                onChange={formik.handleChange}
                autoFocus
              />
              {getFormErrorMessage("email")}

              {/* <CustomInput
              type="password"
              name="password"
              placeholder="Password"
              className="input_text_login"
              onChange={inputHandler}
              maxLength={20}
            /> */}
              <div className="custom_position">
                <CustomInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter New Password"
                  className="input_text_login"
                  maxLength={20}
                  onChange={formik.handleChange}
                  // onChange={inputHandler}
                />

                <button type="button" onClick={togglePasswordVisibility} className="new_pass">
                  {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </button>
                {getFormErrorMessage("password")}
              </div>

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
              <button className="sign_button" type="submit" onClick={() => saveHandler()}>
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
        </form>
      </Modal.Body>
    </div>
  );
};

export default LoginModal;
