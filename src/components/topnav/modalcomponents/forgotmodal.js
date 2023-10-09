import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import CustomInput from '../../../ui-components/custominput';
import './modal.css';

const ForgotModal = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div>
            <Modal.Body>
                <div className="text-center">
                    <p>
                        <span style={{ textDecoration: "underline", marginLeft: "5px" }}>
                            Forget Password?
                        </span>
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
                    </div>
                    <div className="form-group">
                        <div className="custom_position">
                            <div className='eye_pos_rel'>
                                <CustomInput
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Enter New Password"
                                    className="input_text_login "
                                />
                                <button
                                    onClick={togglePasswordVisibility}
                                    className="new_pass"
                                >
                                    {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                                </button>
                            </div>
                        </div>

                        <div className='confirm_pos'>
                            <CustomInput
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirm_password"
                                placeholder="Enter Confirm New Password"
                                className="input_text_login"
                            />
                            <button
                                onClick={toggleConfirmPasswordVisibility}
                                className="confirm_pass"
                            >
                                {showConfirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
                            </button>
                        </div>
                    </div>
                    <div className="pt-3">
                        <button className="sign_button" type="button">
                            Submit
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </div>
    );
};

export default ForgotModal;
