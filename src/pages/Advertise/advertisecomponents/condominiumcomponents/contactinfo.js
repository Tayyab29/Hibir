import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainViewState, onFormAdvertiseDataChange } from "../../../../redux/main-view";
import { getUserDetailsById } from "../../../../services/users";
import CustomInput from "../../../../ui-components/custominput";

const ContactInfo = () => {
  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState("");
  const userType = screens.advertise.data.userType;

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
      if (resp) {
        setUserDetails(resp.data);
        dispatch(onFormAdvertiseDataChange({ ...screens.advertise.data, user: id }));
      }
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
                <input
                  type="radio"
                  checked={userType === "owner"}
                  name="userType"
                  value="owner"
                  onChange={inputHandler}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container_radio">
                I am an Agent/Broker
                <input
                  type="radio"
                  checked={userType === "agentbroker"}
                  name="userType"
                  value="agentbroker"
                  onChange={inputHandler}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container_radio">
                I am an Property Manager
                <input
                  type="radio"
                  checked={userType === "propertymanager"}
                  name="userType"
                  value="propertymanager"
                  onChange={inputHandler}
                />
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
              <CustomInput
                className="condominium_input"
                placeholder="Jhon"
                type="text"
                value={userDetails.firstName}
                disabled={true}
                maxLength={25}
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
              <CustomInput
                className="condominium_input"
                placeholder="Smith"
                type="text"
                value={userDetails.lastName}
                disabled={true}
                maxLength={25}
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
              <CustomInput
                className="condominium_input"
                type="email"
                placeholder="jhonsmith@gmail.com"
                value={userDetails.email}
                disabled={true}
                maxLength={40}
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
              <CustomInput
                className="condominium_input"
                type="number"
                placeholder="(123) 456 7890"
                value={userDetails?.phone}
                disabled={true}
                maxLength={14}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 pb-2">
        <div className="checkbox_hide_span">
          <CustomInput
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
