import React from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainViewState, onFormAdvertiseDataChange } from "../../../../redux/main-view";
import { ADVERTISE_EMENTITIES } from "../../../../utils/Constants/global";

const PropertyEmenities = () => {
  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  // Handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    dispatch(onFormAdvertiseDataChange({ ...screens.advertise.data, [name]: value }));
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
              <select className="condominium_input" name="petsAllowed" onChange={inputHandler}>
                <option value="">Select</option>
                <option value="Cats">Cats</option>
                <option value="Dogs">Dogs</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="form-group">
            <label>
              <b>Laundry Type</b>
            </label>
            <div>
              <select className="condominium_input" name="laundryType" onChange={inputHandler}>
                <option value="">Select</option>
                <option value="1">Washer/Dryer - In Unit</option>
                <option value="2">Washer/Dryer Hookup</option>
                <option value="3">Laundry Facilities</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="form-group">
            <label>
              <b>Parking Type</b>
            </label>
            <div>
              <select className="condominium_input" name="parkingType" onChange={inputHandler}>
                <option value="">Select</option>
                <option value="1">Covered</option>
                <option value="2">Street</option>
                <option value="3">Garage</option>
                <option value="4">Other</option>
              </select>
            </div>
          </div>
        </div>
        {ADVERTISE_EMENTITIES.map((checkbox) => (
          <div key={checkbox.id} className="col-md-3 col-6 mb-3">
            <input
              type="checkbox"
              checked={checkbox.checked}
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
