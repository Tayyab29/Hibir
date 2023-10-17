import React from "react";
// import { useState } from "react";
import { ADVERTISE_UTILITIES } from "../../../../utils/Constants/global";
import { useDispatch, useSelector } from "react-redux";
import { mainViewState, onFormAdvertiseDataChange } from "../../../../redux/main-view";

const UtilitiesIncluded = () => {
  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  const handleCheckboxChange = (id) => {
    const selectedIds = screens.advertise.data.utilities;
    const itemIndex = selectedIds.findIndex((item) => item === id);
    if (itemIndex === -1) {
      const temp = [...screens.advertise.data.utilities];
      temp.push(id);
      dispatch(onFormAdvertiseDataChange({ ...screens.advertise.data, utilities: temp }));
    } else {
      const temp = [...selectedIds];
      temp.splice(itemIndex, 1);
      dispatch(onFormAdvertiseDataChange({ ...screens.advertise.data, utilities: temp }));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pb-3">
          <h3>
            <b>Utilities Included</b>
          </h3>
        </div>
        {ADVERTISE_UTILITIES.map((checkbox) => (
          <div key={checkbox.id} className="col-md-3 col-6 mb-3">
            <input
              type="checkbox"
              checked={screens?.advertise?.data?.utilities.includes(checkbox.id)}
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
