import React, { useContext } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { signup } from "../../../services/users";
import { ToastContext } from "../../../context/toast";
import CustomInput from "../../../ui-components/custominput";

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

  return (
    <>
      <div>
        <Modal.Body>
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
                onChange={inputHandler}
                maxLength={20}
              />

              <CustomInput
                type="password"
                name="confirm_password"
                placeholder="Enter Confirm Password"
                className="input_text_login"
                onChange={inputHandler}
                maxLength={20}
              />
            </div>
            <div className="pt-3">
              <button className="sign_button" type="button" onClick={() => saveHandler()}>
                Set Password
              </button>
            </div>
          </div>
        </Modal.Body>
      </div>
    </>
  );
};

export default SetPassordModal;
