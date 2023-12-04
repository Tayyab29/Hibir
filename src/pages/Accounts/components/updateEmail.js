import React, { useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { updateUser } from "../../../services/users";
import { useDispatch, useSelector } from "react-redux";
import { loginState, setUser } from "../../../redux/login";
import { ToastContext } from "../../../context/toast";
import CustomInput from "../../../ui-components/custominput";

import { useFormik } from "formik";
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
});

const UpdateEmail = (props) => {
  // Context
  const toast = useContext(ToastContext);
  const { onHide } = props;
  const { user } = useSelector(loginState);

  const dispatch = useDispatch();

  // Handlers
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: "",
    },
    onSubmit: async (data) => {
      try {
        const resp = await updateUser(data);
        if (resp.data.status) {
          dispatch(setUser(resp?.data.user));
          onHide();
          toast.showMessage("Success", "Email has been updated successfully!.", "success");
        } else {
          toast.showMessage(
            "Error",
            "Sorry, we are unable to process your request at this time.",
            "error"
          );
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

  useEffect(() => {
    if (user) {
      formik.setFieldValue("_id", user?._id);
      formik.setFieldValue("email", user?.email);
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
                <span style={{ textDecoration: "underline", marginLeft: "5px" }}>Update Email</span>
              </p>
            </div>

            <div className="pt-3">
              <div className="form-group">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="input_text_login"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  maxLength={40}
                />
                {getFormErrorMessage("email")}
              </div>
              <div className="pt-3">
                {/* <button className="sign_button" type="button" onClick={formik.handleSubmit}> */}
                <button className="sign_button" type="submit">
                  Update
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </div>
    </>
  );
};

export default UpdateEmail;
