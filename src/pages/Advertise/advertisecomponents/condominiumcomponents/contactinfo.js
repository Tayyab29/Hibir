import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainViewState, onFormAdvertiseDataChange } from "../../../../redux/main-view";
import { getUserDetailsById } from "../../../../services/users";

const ContactInfo = () => {
  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState("");

  // Handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "isHideName") {
      dispatch(
        onFormAdvertiseDataChange({
          ...screens.advertise.data,
          [name]: !screens.advertise.data.isHideName,
        })
      );
    } else {
      dispatch(onFormAdvertiseDataChange({ ...screens.advertise.data, [name]: value }));
    }
  };
  useEffect(() => {
    const fetchUserById = async () => {
      const id = localStorage.getItem("Id");
      const resp = await getUserDetailsById({ id });
      setUserDetails(resp.data);
    };
    fetchUserById();
  }, []);
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
                <input type="radio" checked="checked" name="radio" value="owner" />
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
                value={userDetails.firstName}
                disabled={true}
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
                value={userDetails.lastName}
                disabled={true}
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
              <select
                className="condominium_input"
                name="contactPreference"
                onChange={inputHandler}
              >
                <option value="">Select</option>
                <option value="1">Phone & Email Only</option>
                <option value="2">Phone Only</option>
                <option value="3">Email Only</option>
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
                value={userDetails.email}
                disabled={true}
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
                placeholder="Phone No"
                value={userDetails?.phone}
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 pb-2">
        <div className="checkbox_hide_span">
          <input
            type="checkbox"
            checked={screens.advertise.data.isHideName}
            name="isHideName"
            onChange={inputHandler}
          />
          <span>Hide my Name on Hibir.com</span>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default ContactInfo;
