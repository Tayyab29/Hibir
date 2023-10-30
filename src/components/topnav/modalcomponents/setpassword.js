import React, { useContext } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { signup } from "../../../services/users";
import { ToastContext } from "../../../context/toast";
import CustomInput from "../../../ui-components/custominput";

import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .min(6, "Confirm Password must be at least 6 characters"),
});

const SetPassordModal = (props) => {
  const { onHide, data } = props;

  // Context
  const toast = useContext(ToastContext);

  const [user, setUser] = useState({
    password: "",
    confirm_password: "",
  });
  // Handlers
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
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
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="input_text_login"
                  // onChange={inputHandler}
                  onChange={formik.handleChange}
                  maxLength={20}
                />
                {getFormErrorMessage("password")}

                <CustomInput
                  type="password"
                  name="confirm_password"
                  placeholder="Enter Confirm Password"
                  className="input_text_login"
                  // onChange={inputHandler}
                  onChange={formik.handleChange}
                  maxLength={20}
                />
                {getFormErrorMessage("confirm_password")}
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
