import React from "react";
import { IoMdClose } from "react-icons/io";

const DeactivateModal = ({ onHide }) => {
  return (
    <div className="de_container">
      <div className="de_cross_icon_wrapper" onClick={() => onHide()}>
        <IoMdClose className="de_cross_icon" />
      </div>

      <div className="heading_text_wrapper">
        <h2>Account disabled</h2>
      </div>
      <hr />
      <p className="de_text_wrap">
        Your account is currently disabled. Please reach out to{" "}
        <span className="highlight_text">support@hibir.com</span> to resolve this issue.
      </p>
    </div>
  );
};

export default DeactivateModal;
