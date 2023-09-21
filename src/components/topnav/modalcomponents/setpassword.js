import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { signup } from "../../../services/users";

const SetPassordModal = (props) => {
  const { onHide, data } = props;
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
    console.log({ name, value });
  };

  const saveHandler = async () => {
    let dto = {
      ...data,
      password: user.password,
    };
    console.log({ dto });
    try {
      const resp = await signup(dto);
      console.log({ resp });
      if (resp) {
        onHide();
      }
    } catch (error) {
      console.log(error);
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
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="input_text_login"
                onChange={inputHandler}
              />

              <input
                type="confirm_password"
                name="confirm_password"
                placeholder="Enter Confirm Password"
                className="input_text_login"
                onChange={inputHandler}
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
