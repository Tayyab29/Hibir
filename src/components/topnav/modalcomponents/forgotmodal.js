import React from 'react'
import { Modal } from "react-bootstrap";
import CustomInput from '../../../ui-components/custominput';
import "./modal.css";
const ForgotModal = () => {
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
             <div className='custom_position'>
             <CustomInput
                type="email"
                name="password"
                placeholder="Enter Email"
                className="input_text_login"
              />
              <button className='validate_email'>validate email</button>
             </div>

              <CustomInput
                type="password"
                name="confirm_password"
                placeholder="Enter New Password"
                className="input_text_login"
              />

              <CustomInput
                type="password"
                name="confirm_password"
                placeholder="Enter Confirm New Password"
                className="input_text_login"
              />
            </div>
            <div className="pt-3">
              <button className="sign_button" type="button">
                Submit
              </button>
            </div>
          </div>
        </Modal.Body>

    </div>
  )
}

export default ForgotModal