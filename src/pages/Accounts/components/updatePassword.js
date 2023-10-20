import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { loginState, setUser } from "../../../redux/login";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../services/users";
import { ToastContext } from "../../../context/toast";
import CustomInput from "../../../ui-components/custominput";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
const UpdatePassword = (props) => {
  // Context
  const toast = useContext(ToastContext);

  const { onHide } = props;
  const { user } = useSelector(loginState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
              {/* <CustomInput
                type="password"
                name="password"
                placeholder="Enter Password"
                className="input_text_login"
                onChange={inputHandler}
                maxLength={20}
              /> */}
              <div className="custom_position">
                <CustomInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter New Password"
                  className="input_text_login"
                  maxLength={20}
                  onChange={inputHandler}
                />
                <button onClick={togglePasswordVisibility} className="new_pass">
                  {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </button>
              </div>
              {/* <CustomInput
                type="password"
                name="confirm_password"
                placeholder="Enter Confirm Password"
                className="input_text_login"
                onChange={inputHandler}
                maxLength={20}
              /> */}
              <div className="confirm_pos">
                <CustomInput
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  placeholder="Enter Confirm New Password"
                  className="input_text_login"
                  maxLength={20}
                />
                <button onClick={toggleConfirmPasswordVisibility} className="confirm_pass">
                  {showConfirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </button>
              </div>
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
