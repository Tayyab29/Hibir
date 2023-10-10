import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import CustomInput from "../../../ui-components/custominput";
import "./modal.css";
import { forgetPassword, valideUserEmail } from "../../../services/users";
import { useContext } from "react";
import { ToastContext } from "../../../context/toast";

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
        email: restData.email,
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

  const changePassword = async () => {
    try {
      const payload = {
        email: restData.email,
        password: restData.password,
      };
      const resp = await forgetPassword(payload);
      if (resp?.data?.status) {
        onHide();
        toast.showMessage("Success", "Password change successfullys.", "success");
      } else {
        toast.showMessage("Error", "Passowrd colud not be update", "error");
      }
    } catch (error) {
      toast.showMessage(
        "Error",
        "Sorry, we are unable to process your request at this time.",
        "error"
      );
    }
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
                onChange={(e) => setResetData({ ...restData, email: e.target.value })}
                disabled={!isDisabled}
              />
              <button className="validate_email" onClick={emailHander}>
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
                  onChange={(e) => setResetData({ ...restData, password: e.target.value })}
                />
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
              />
              <button
                onClick={() => (isDisabled ? null : toggleConfirmPasswordVisibility())}
                className={isDisabled ? "confirm_pass-disabled" : "confirm_pass"}
              >
                {showConfirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
              </button>
            </div>
          </div>
          <div className="pt-3">
            <button className="sign_button" type="button" onClick={changePassword}>
              Submit
            </button>
          </div>
        </div>
      </Modal.Body>
    </div>
  );
};

export default ForgotModal;
