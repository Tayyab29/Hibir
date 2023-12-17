import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { loginState, setUser } from "../../../redux/login";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../services/users";
import { ToastContext } from "../../../context/toast";
import CustomInput from "../../../ui-components/custominput";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("New Password is required")
    .min(6, "Password must be at least 6 characters"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  // ),
  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const UpdatePassword = (props) => {
  // Context
  const toast = useContext(ToastContext);

  const { onHide } = props;
  const { user } = useSelector(loginState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();

  // Handlers
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      password: "",
      confirm_password: "",
    },
    onSubmit: async (data) => {
      let dto = {
        password: data.password,
        _id: data._id,
      };
      try {
        const resp = await updateUser(dto);
        if (resp.data.status) {
          dispatch(setUser(resp?.data.user));
          onHide();
          toast.showMessage("Success", "Password has been updated successfully!.", "success");
        } else {
          toast.showMessage(
            "Error",
            "Sorry, we are unable to process your request at this time.",
            "error"
          );
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    if (user) {
      formik.setFieldValue("_id", user?._id);
    }
  }, [user]);

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
                <span style={{ textDecoration: "underline", marginLeft: "5px" }}>
                  Update Password
                </span>
              </p>
            </div>

            <div className="pt-3">
              <div className="form-group">
                <div className="custom_position">
                  <CustomInput
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter New Password"
                    className="input_text_login"
                    maxLength={20}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {getFormErrorMessage("password")}

                  <button type="button" onClick={togglePasswordVisibility} className="new_pass">
                    {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                  </button>
                </div>

                <div className="confirm_pos">
                  <CustomInput
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirm_password"
                    placeholder="Enter Confirm New Password"
                    className="input_text_login"
                    maxLength={20}
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
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
                <button className="sign_button" type="button" onClick={formik.handleSubmit}>
                  Update Password
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </div>
    </>
  );
};

export default UpdatePassword;
