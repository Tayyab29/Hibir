import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import "./modal.css";
import { googleSignup } from "../../../services/users";
import { useGoogleLogin } from "@react-oauth/google";
import { ToastContext } from "../../../context/toast";
import CustomInput from "../../../ui-components/custominput";
import { useFormik } from "formik";
// import { Link } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address")
    .test("valid-email", "Invalid email address", (value) => {
      if (!value) return false; // Fail if the value is empty
      const atSymbolCount = (value.match(/@/g) || []).length;
      const dotSymbolCount = (value.match(/\./g) || []).length;
      return atSymbolCount === 1 && dotSymbolCount === 1;
    }),
  isCheck: Yup.boolean().test(
    "isChecked",
    "Terms agreement is required",
    (value) => value === true
  ),
});

const SignupModal = (props) => {
  const { setUserData, userData, setShowPassword, onHide, setShow } = props;

  // Context
  const toast = useContext(ToastContext);

  // Handlers
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: { email: "", firstName: "", lastName: "", isCheck: false },
    onSubmit: async (data) => {
      setUserData({
        ...userData,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
      });
      setShowPassword(true);
      onHide();
    },
  });

  const googleHandler = useGoogleLogin({
    onSuccess: (CodeResponse) => responseGoogle(CodeResponse),
  });

  const responseGoogle = async (response) => {
    if (response && response.access_token) {
      try {
        const resp = await googleSignup({ token: response.access_token });
        if (resp.data.status) {
          localStorage.setItem("accessToken", resp.data.access_token);
          localStorage.setItem("Id", resp.data.user._id);
          onHide();
          toast.showMessage("Success", "User has been created successfully.", "success");
        } else {
          // Handle Google login failure
          // onHide();
          toast.showMessage(
            "Error",
            "Sorry, we are unable to process your request at this time.",
            "error"
          );
        }
      } catch (error) {
        console.error("Error signing in:", error);
        toast.showMessage(
          "Error",
          "Sorry, we are unable to process your request at this time.",
          "error"
        );
      }
    }
  };

  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };

  console.log({ first: formik.values });

  return (
    <>
      <div>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <div className="text-center">
              <h3>
                <b>Create An Account</b>
              </h3>
              <p>
                Or,
                <span
                  className="create-account-text"
                  onClick={() => {
                    setShow(true);
                    onHide();
                  }}
                >
                  Sign Into Your Account
                </span>
              </p>
            </div>

            <div className="pt-3">
              <div className="form-group">
                <div className="signle_line_input">
                  <div className="text_sign_wrapper">
                    <CustomInput
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="input_text_signup_first"
                      // onChange={inputHandler}
                      onChange={formik.handleChange}
                      maxLength={25}
                    />
                    {getFormErrorMessage("firstName")}
                  </div>

                  <div className="text_sign_wrapper">
                    <CustomInput
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="input_text_signup"
                      // onChange={inputHandler}
                      onChange={formik.handleChange}
                      maxLength={25}
                    />
                    {getFormErrorMessage("lastName")}
                  </div>
                </div>

                <>
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="input_text_login"
                    // onChange={inputHandler}
                    onChange={formik.handleChange}
                    maxLength={40}
                  />
                  {getFormErrorMessage("email")}
                </>

                <div className="pt-2">
                  <input
                    type="checkbox"
                    checked={formik.values.isCheck}
                    value={formik.values.isCheck}
                    name="isCheck"
                    onChange={formik.handleChange}
                  />

                  <span>Agree to Terms & Condition</span>
                </div>
                {getFormErrorMessage("isCheck")}
              </div>
              <div className="pt-3">
                <button className="sign_button" type="submit" onClick={() => formik.handleSubmit()}>
                  {/* <button className="sign_button" type="button" onClick={saveHandler}> */}
                  Sign Up
                </button>
              </div>
              <div className="pt-2 pb-2">
                <hr className="hr_clas"></hr>
                <span className="or_clas">Or</span>
                <hr className="hr_clas"></hr>
              </div>
              <div className="pt-3">
                <button className="google_social_button" type="button" onClick={googleHandler}>
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
          </form>
        </Modal.Body>
      </div>
    </>
  );
};

export default SignupModal;
