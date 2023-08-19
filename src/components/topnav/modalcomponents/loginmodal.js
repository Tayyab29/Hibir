import React from "react";

import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const LoginModal = ({ onHide }) => {
  return (
    <>
      <div>
        <Modal.Body>
          <div className="text-center">
            <h3>Sign into your account </h3>
            <p>
              Or,
              <span style={{ textDecoration: "underline", marginLeft: "5px" }}>
                Create An Account
              </span>
            </p>
          </div>
          Woohoo, you are reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </div>
    </>
  );
};

export default LoginModal;
