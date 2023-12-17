import React from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  mainViewState,
  onAdvertiseValidate,
  onFormAdvertiseDataChange,
} from "../../../../redux/main-view";
import {
  ADVERTISE_EMENTITIES,
  LAUNDRY_TYPE,
  PARKING_TYPE,
  PETS_TYPE,
} from "../../../../utils/Constants/global";
import CustomDropdown from "../../../../ui-components/customdropdown";

const PropertyEmenities = () => {
  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  // Handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    dispatch(onFormAdvertiseDataChange({ ...screens.advertise.data, [name]: value }));
    dispatch(onAdvertiseValidate({ ...screens.advertise.validations, [name]: false }));
  };

  const handleCheckboxChange = (id) => {
    const selectedIds = screens.advertise.data.amenities;
    const itemIndex = selectedIds.findIndex((item) => item === id);
    if (itemIndex === -1) {
      const temp = [...screens.advertise.data.amenities];
      temp.push(id);
      dispatch(onFormAdvertiseDataChange({ ...screens.advertise.data, amenities: temp }));
    } else {
      const temp = [...selectedIds];
      temp.splice(itemIndex, 1);
      dispatch(onFormAdvertiseDataChange({ ...screens.advertise.data, amenities: temp }));
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pb-3">
          <h3>
            <b>Property Emenities</b>
          </h3>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="form-group">
            <label>
              <b>Pets Allowed</b>
            </label>
            <div>
              {/* <select
                className="condominium_input"
                name="petsAllowed"
                onChange={inputHandler}
                value={screens.advertise.data?.petsAllowed}
              >
                <option value="">Select</option>
                <option value="Cats">Cats</option>
                <option value="Dogs">Dogs</option>
                <option value="none">None</option>
              </select> */}
              <CustomDropdown
                className="condominium_input"
                id="petsAllowed"
                name="petsAllowed"
                onChange={inputHandler}
                value={screens.advertise.data?.petsAllowed}
                options={PETS_TYPE}
              />
              {screens.advertise.validations.petsAllowed && (
                <small className="p-error">Pets Allowed is required</small>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="form-group">
            <label>
              <b>Laundry Type</b>
            </label>
            <div>
              {/* <select
                className="condominium_input"
                name="laundryType"
                onChange={inputHandler}
                value={screens.advertise.data?.laundryType}
              >
                <option value="">Select</option>
                <option value="1">Washer/Dryer - In Unit</option>
                <option value="2">Washer/Dryer Hookup</option>
                <option value="3">Laundry Facilities</option>
              </select> */}
              <CustomDropdown
                className="condominium_input"
                id="laundryType"
                name="laundryType"
                onChange={inputHandler}
                value={screens.advertise.data?.laundryType}
                options={LAUNDRY_TYPE}
              />
              {screens.advertise.validations.laundryType && (
                <small className="p-error">Laundry Type is required</small>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="form-group">
            <label>
              <b>Parking Type</b>
            </label>
            <div>
              {/* <select
                className="condominium_input"
                name="parkingType"
                onChange={inputHandler}
                value={screens.advertise.data?.parkingType}
              >
                <option value="">Select</option>
                <option value="1">Covered</option>
                <option value="2">Street</option>
                <option value="3">Garage</option>
                <option value="4">Other</option>
              </select> */}
              <CustomDropdown
                className="condominium_input"
                id="parkingType"
                name="parkingType"
                onChange={inputHandler}
                value={screens.advertise.data?.parkingType}
                options={PARKING_TYPE}
              />
              {screens.advertise.validations.parkingType && (
                <small className="p-error">Parking Type is required</small>
              )}
            </div>
          </div>
        </div>
        {ADVERTISE_EMENTITIES.map((checkbox) => (
          <div key={checkbox.id} className="col-md-3 col-6 mb-3">
            <input
              type="checkbox"
              // checked={checkbox.checked}
              checked={screens?.advertise?.data?.amenities.includes(checkbox.id)}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
            <span>{checkbox.label}</span>
          </div>
        ))}
      </div>
      <hr></hr>
    </div>
  );
};

export default PropertyEmenities;
