import React from "react";
import { useState } from "react";

const PropertyEmenities = () => {
  // emenitiescheckboxes
  const emenitiescheckboxesData = [
    { id: 1, label: "Furnished", checked: false },
    { id: 2, label: "WheelChair Accessible", checked: false },
    { id: 3, label: "Elevator", checked: false },
    { id: 4, label: "No Smoking", checked: false },
    { id: 5, label: "AC", checked: false },
    { id: 6, label: "Storage", checked: false },
    { id: 7, label: "Loft", checked: false },
    { id: 8, label: "Fitness Center", checked: false },
    { id: 9, label: "Fireplace ", checked: false },
    { id: 10, label: "Gated Entry ", checked: false },
    { id: 11, label: "Dishwasher ", checked: false },
    { id: 12, label: "Swimming Pool", checked: false },
  ];
  //Emenities Checkboxes
  const [emenitiescheckboxes, setEmenitiescheckboxes] = useState(
    emenitiescheckboxesData
  );

  // emenitiescheckboxes
  const handleemenitiescheckboxesChange = (id) => {
    setEmenitiescheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
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
              <select className="condominium_input">
                <option value="0">Pets Allowed</option>
                <option value="1">Pets Allowed</option>
                <option value="2">Pets Allowed</option>
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
              <select className="condominium_input">
                <option value="0">Laundry Type</option>
                <option value="1">Laundry Type</option>
                <option value="2">Laundry Type</option>
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
              <select className="condominium_input">
                <option value="0">Parking Type</option>
                <option value="1">Parking Type</option>
                <option value="2">Parking Type</option>
              </select>
            </div>
          </div>
        </div>
        {emenitiescheckboxes.map((checkbox) => (
          <div key={checkbox.id} className="col-md-3 col-6 mb-3">
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleemenitiescheckboxesChange(checkbox.id)}
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
