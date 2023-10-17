import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { updateUser } from "../../../services/users";
import { useDispatch, useSelector } from "react-redux";
import { loginState, setUser } from "../../../redux/login";
import { ToastContext } from "../../../context/toast";
import CustomInput from "../../../ui-components/custominput";

const UpdateEmail = (props) => {
  // Context
  const toast = useContext(ToastContext);
  const { onHide } = props;
  const { user } = useSelector(loginState);

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    _id: "",
  });
  // Handlers
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const saveHandler = async () => {
    try {
      const resp = await updateUser(userData);
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
              <span style={{ textDecoration: "underline", marginLeft: "5px" }}>Update Email</span>
            </p>
          </div>

          <div className="pt-3">
            <div className="form-group">
              <CustomInput
                type="email"
                name="email"
                placeholder="Enter email"
                className="input_text_login"
                value={userData.email}
                onChange={inputHandler}
                maxLength={40}
              />

              {/* <input
                type="confirm_password"
                name="confirm_password"
                placeholder="Enter Confirm Password"
                className="input_text_login"
                onChange={inputHandler}
              /> */}
            </div>
            <div className="pt-3">
              <button className="sign_button" type="button" onClick={() => saveHandler()}>
                Update
              </button>
            </div>
          </div>
        </Modal.Body>
      </div>
    </>
  );
};

export default UpdateEmail;
