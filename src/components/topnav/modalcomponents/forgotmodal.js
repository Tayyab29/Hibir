import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import CustomInput from "../../../ui-components/custominput";
import "./modal.css";
import { forgetPassword, valideUserEmail } from "../../../services/users";
import { useContext } from "react";
import { ToastContext } from "../../../context/toast";

import * as Yup from "yup";
import { useFormik } from "formik";

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
    .required("New Password is required")
    .min(6, "Password must be at least 6 characters"),

  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const ForgotModal = (props) => {
  const { onHide } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [restData, setResetData] = useState({
    email: "",
    password: "",
  });

  // Context
  const toast = useContext(ToastContext);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const emailHander = async () => {
    try {
      const payload = {
        email: formik.values.email,
      };
      const resp = await valideUserEmail(payload);
      if (resp?.data?.status) {
        setIsDisabled(false);
        toast.showMessage("Success", "Set your password.", "success");
      } else {
        toast.showMessage("Error", "User not found", "error");
      }
    } catch (error) {
      toast.showMessage(
        "Error",
        "Sorry, we are unable to process your request at this time.",
        "error"
      );
    }
  };

  // const changePassword = async () => {
  //   try {
  //     const payload = {
  //       email: restData.email,
  //       password: restData.password,
  //     };
  //     const resp = await forgetPassword(payload);
  //     if (resp?.data?.status) {
  //       onHide();
  //       toast.showMessage("Success", "Password change successfullys.", "success");
  //     } else {
  //       toast.showMessage("Error", "Passowrd colud not be update", "error");
  //     }
  //   } catch (error) {
  //     toast.showMessage(
  //       "Error",
  //       "Sorry, we are unable to process your request at this time.",
  //       "error"
  //     );
  //   }
  // };

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: async (data) => {
      try {
        const payload = {
          email: data.email,
          password: data.password,
        };
        const resp = await forgetPassword(payload);
        if (resp?.data?.status) {
          onHide();
          toast.showMessage("Success", "Password change successfully.", "success");
        } else {
          toast.showMessage("Error", "Password colud not be updated", "error");
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

  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };

  return (
    <div>
      <Modal.Body>
        <div className="text-center">
          <p>
            <span style={{ textDecoration: "underline", marginLeft: "5px" }}>Forget Password?</span>
          </p>
        </div>

        <div className="pt-3">
          <div className="form-group">
            <div className="custom_position">
              <CustomInput
                type="email"
                name="email"
                placeholder="Enter Email"
                className="input_text_login"
                value={formik.values.email}
                onChange={formik.handleChange}
                disabled={!isDisabled}
                maxLength={40}
              />
              {getFormErrorMessage("email")}

              <button type="button" className="validate_email" onClick={emailHander}>
                validate email
              </button>
            </div>
          </div>
          <div className="form-group">
            <div className="custom_position">
              <div className="eye_pos_rel">
                <CustomInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter New Password"
                  className={isDisabled ? "input_text_login-disabled" : "input_text_login"}
                  disabled={isDisabled}
                  maxLength={20}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {getFormErrorMessage("password")}

                <button
                  onClick={() => (isDisabled ? null : togglePasswordVisibility())}
                  className={isDisabled ? "new_pass-disabled" : "new_pass"}
                >
                  {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </button>
              </div>
            </div>

            <div className="confirm_pos">
              <CustomInput
                type={showConfirmPassword ? "text" : "password"}
                name="confirm_password"
                placeholder="Enter Confirm New Password"
                className={isDisabled ? "input_text_login-disabled" : "input_text_login"}
                disabled={isDisabled}
                maxLength={20}
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
              />
              {getFormErrorMessage("confirm_password")}

              <button
                onClick={() => (isDisabled ? null : toggleConfirmPasswordVisibility())}
                className={isDisabled ? "confirm_pass-disabled" : "confirm_pass"}
              >
                {showConfirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
              </button>
            </div>
          </div>
          <div className="pt-3">
            <button
              className={isDisabled ? "sign_button_not" : "sign_button"}
              type="button"
              onClick={() => (isDisabled ? null : formik.handleSubmit())}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal.Body>
    </div>
  );
};

export default ForgotModal;
