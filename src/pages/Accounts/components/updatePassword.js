import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { loginState, setUser } from "../../../redux/login";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../services/users";
import { ToastContext } from "../../../context/toast";

const UpdatePassword = (props) => {
  // Context
  const toast = useContext(ToastContext);

  const { onHide } = props;
  const { user } = useSelector(loginState);

  const [userData, setUserData] = useState({
    _id: "",
    password: "",
    confirm_password: "",
  });

  const dispatch = useDispatch();

  // Handlers
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const saveHandler = async () => {
    let dto = {
      password: userData.password,
      _id: user._id,
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
  };

  useEffect(() => {
    setUserData({
      ...userData,
      _id: user?._id,
    });
  }, [user]);

  return (
    <>
      <div>
        <Modal.Body>
          <div className="text-center">
            <p>
              <span style={{ textDecoration: "underline", marginLeft: "5px" }}>
                Update Password
              </span>
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
                Update Password
              </button>
            </div>
          </div>
        </Modal.Body>
      </div>
    </>
  );
};

export default UpdatePassword;
