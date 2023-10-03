import React from "react";
import { Modal } from "react-bootstrap";
import { logout } from "../../../services/users";
import { loginState } from "../../../redux/login";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ConfirmDialog = (props) => {
  const { onHide } = props;
  const { user } = useSelector(loginState);
  const history = useHistory();

  // Handler
  const logoutHandler = () => {
    logout();
    history.push("/");
  };

  return (
    <>
      <div>
        <Modal.Body>
          <div className="text-center">
            <p>
              <span style={{ textDecoration: "underline", marginLeft: "5px" }}>
                Confirmation Dialog
              </span>
            </p>
          </div>

          <div className="pt-3 ">
            <p className="text-center">Are you sure want to discontinue your session</p>
          </div>
          <div className="pt-3 d-flex gap-2">
            <button className="sign_button" type="button" onClick={() => onHide()}>
              Cancel
            </button>
            <button className="sign_button" type="button" onClick={() => logoutHandler()}>
              Continue
            </button>
          </div>
        </Modal.Body>
      </div>
    </>
  );
};

export default ConfirmDialog;
