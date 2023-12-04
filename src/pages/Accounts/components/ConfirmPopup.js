import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { deactivateAccount, logout } from "../../../services/users";
import { loginState } from "../../../redux/login";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContext } from "../../../context/toast";

const ConfirmPopup = (props) => {
  const { onHide } = props;
  const { user } = useSelector(loginState);

  // Context
  const toast = useContext(ToastContext);

  // Handler
  const deactivateHandler = async () => {
    try {
      let payload = {
        _id: user._id,
        isActive: false,
      };
      const resp = await deactivateAccount(payload);
      if (resp.data.status) {
        logout();
        toast.showMessage("Success", "Your account has been deactivated successfully!", "success");
      } else {
        toast.showMessage("Error", "Sorry, User could not be updated.", "error");
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
    <>
      <div>
        <Modal.Body>
          <div className="text-center">
            <p>
              <span style={{ textDecoration: "underline", marginLeft: "5px" }}>
                Deactivate Account
              </span>
            </p>
          </div>

          <div className="pt-3 ">
            <p className="text-center">Are you sure, You want to deactivate your account?</p>
          </div>
          <div className="pt-3 d-flex gap-2">
            {/* <button className="sign_button" type="button" onClick={() => onHide()}>
              Cancel
            </button> */}
            <button className="sign_button" type="button" onClick={() => deactivateHandler()}>
              Confirm
            </button>
          </div>
        </Modal.Body>
      </div>
    </>
  );
};

export default ConfirmPopup;
