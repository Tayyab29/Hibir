import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SignupModal from "../../../components/topnav/modalcomponents/signupmodal";
import LoginModal from "../../../components/topnav/modalcomponents/loginmodal";
import SetPassordModal from "../../../components/topnav/modalcomponents/setpassword";
import ForgotModal from "../../../components/topnav/modalcomponents/forgotmodal";
import DeactivateModal from "../../../components/topnav/modalcomponents/deactivateModal";
// import SignupModal from " ./modalcomponents/signupmodal";

const CreateAccount = () => {
  // View State
  const [show, setShow] = useState(false);
  const [showsignup, setShowSignup] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const [showforgotmodal, setShowForgotModal] = useState(false);
  const [isDeactivate, setIsDeactivate] = useState(false);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Handler

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSignUpClose = () => setShowSignup(false);
  const handleSignupShow = () => setShowSignup(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <LoginModal
          onHide={handleClose}
          setShowForgotModal={setShowForgotModal}
          setShowSignup={setShowSignup}
          setIsDeactivate={setIsDeactivate}
        />
      </Modal>
      <Modal show={showsignup} onHide={handleSignUpClose}>
        <SignupModal
          onHide={handleSignUpClose}
          setUserData={setUserData}
          userData={userData}
          setShowPassword={setShowPassword}
          setShow={setShow}
        />
      </Modal>
      <Modal show={showpassword} onHide={() => setShowPassword(false)}>
        <SetPassordModal onHide={() => setShowPassword(false)} data={userData} />
      </Modal>
      <Modal show={showforgotmodal} onHide={() => setShowForgotModal(false)}>
        <ForgotModal onHide={() => setShowForgotModal(false)} />
      </Modal>
      <Modal show={isDeactivate} onHide={() => setIsDeactivate(false)}>
        <DeactivateModal onHide={() => setIsDeactivate(false)} />
      </Modal>
      <div className="create_overlay_img">
        <section className="create_pos">
          <div className="container">
            <div className="row">
              {/* <div className="col-md-2"></div> */}
              <div className="col-md-6">
                <h2 className="create_text_h1">
                  <b>If You Are Going To Use</b>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="pt-2">
                  <button type="button" className="create_account_btn" onClick={handleSignupShow}>
                    Create An Account With Us!
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="manage_header_img">
                  <img src="images/createimg.png" alt="Manage img" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateAccount;
