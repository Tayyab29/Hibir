import React from "react";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { mainViewState } from "../../../../redux/main-view";

const UtilitiesIncluded = () => {
  // Redux
  // const { screens } = useSelector(mainViewState);
  // const dispatch = useDispatch();

  //checkbox array
  const checkboxData = [
    { id: "1", label: "Gas", checked: false },
    { id: "2", label: "Water", checked: false },
    { id: "3", label: "Electricity", checked: false },
    { id: "4", label: "Heat", checked: false },
    { id: "5", label: "Trash Removal", checked: false },
    { id: "6", label: "Sewer", checked: false },
    { id: "7", label: "Cable", checked: false },
    { id: "8", label: "Air Condition", checked: false },
    // ... Add more checkbox data objects
  ];
  //checkbox state
  const [checkboxes, setCheckboxes] = useState(checkboxData);
  //check box
  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
      )
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pb-3">
          <h3>
            <b>Utilities Included</b>
          </h3>
        </div>
        {checkboxes.map((checkbox) => (
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
    </div>
  );
};

export default UtilitiesIncluded;
