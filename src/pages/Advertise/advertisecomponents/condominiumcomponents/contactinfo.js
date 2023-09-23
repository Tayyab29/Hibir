import React from "react";

const ContactInfo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pb-3">
          <h3>
            <b>Contact Info</b>
          </h3>
        </div>
        <div className="col-12 pb-3">
          <div className="condominim_radio_button">
            <div className="checkbox_class">
              <label className="container_radio">
                I am an Owner
                <input
                  type="radio"
                  checked="checked"
                  name="radio"
                  value="owner"
                />
                <span className="checkmark"></span>
              </label>
              <label className="container_radio">
                I am an Agent/Broker
                <input type="radio" name="radio" value="agentbroker" />
                <span className="checkmark"></span>
              </label>
              <label className="container_radio">
                I am an Property Manager
                <input type="radio" name="radio" value="propertymanager" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="form-group">
            <label>
              <b>First Name </b>
            </label>
            <div>
              <input
                className="condominium_input"
                placeholder="Jhon"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="form-group">
            <label>
              <b>Last Name </b>
            </label>
            <div>
              <input
                className="condominium_input"
                placeholder="Smith"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="form-group">
            <label>
              <b>Contact Preferences</b>
            </label>
            <div>
              <select className="condominium_input">
                <option value="0">Select</option>
                <option value="1">Contact Preferences</option>
                <option value="2">Contact Preferences</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="form-group">
            <label>
              <b>Email Address</b>
            </label>
            <div>
              <input
                className="condominium_input"
                type="email"
                placeholder="jhonsmith@gmail.com"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="form-group">
            <label>
              <b>Phone</b>
            </label>
            <div>
              <input
                className="condominium_input"
                type="number"
                placeholder="(123) 456 789"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 pb-2">
        <div className="checkbox_hide_span">
          <input type="checkbox" /> <span>Hide my Name on Hibir.com</span>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default ContactInfo;
