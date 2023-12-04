import React, { useContext } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { signup } from "../../../services/users";
import { ToastContext } from "../../../context/toast";
import CustomInput from "../../../ui-components/custominput";

import * as Yup from "yup";
import { useFormik } from "formik";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("New Password is required")
    .min(6, "Password must be at least 6 characters"),

  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SetPassordModal = (props) => {
  const { onHide, data } = props;

  // Context
  const toast = useContext(ToastContext);

  const [user, setUser] = useState({
    password: "",
    confirm_password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handlers
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: { password: "", confirm_password: "" },
    onSubmit: async (value) => {
      let dto = {
        ...data,
        password: value.password,
      };
      try {
        const resp = await signup(dto);
        if (resp.data.status) {
          toast.showMessage("Success", "User has been created successfully.", "success");
          onHide();
        } else {
          toast.showMessage("Error", resp.data.message, "error");
        }
      } catch (error) {
        console.log(error);
        toast.showMessage(
          "Error",
          "Sorry, we are unable to process your request at this time.",
          "error"
        );
      }
    },
  });

  const saveHandler = async () => {
    let dto = {
      ...data,
      password: user.password,
    };
    try {
      const resp = await signup(dto);
      if (resp.data.status) {
        toast.showMessage("Success", "User has been created successfully.", "success");
        onHide();
      } else {
        toast.showMessage("Error", resp.data.message, "error");
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

  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };

  return (
    <>
      <div>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <div className="text-center">
              <p>
                <span style={{ textDecoration: "underline", marginLeft: "5px" }}>Set Password</span>
              </p>
            </div>

            <div className="pt-3">
              <div className="form-group">
                <div className="custom_position">
                  <CustomInput
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Password"
                    className="input_text_login"
                    // onChange={inputHandler}
                    onChange={formik.handleChange}
                    maxLength={20}
                  />
                  {getFormErrorMessage("password")}
                  <button type="button" onClick={togglePasswordVisibility} className="new_pass">
                    {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                  </button>
                </div>

                <div className="custom_position">
                  <CustomInput
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirm_password"
                    placeholder="Enter Confirm Password"
                    className="input_text_login"
                    // onChange={inputHandler}
                    onChange={formik.handleChange}
                    maxLength={20}
                  />
                  {getFormErrorMessage("confirm_password")}
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="confirm_pass"
                  >
                    {showConfirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
                  </button>
                </div>
              </div>
              <div className="pt-3">
                <button className="sign_button" type="submit">
                  {/* <button className="sign_button" type="submit" onClick={() => saveHandler()}> */}
                  Set Password
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </div>
    </>
  );
};

export default SetPassordModal;
