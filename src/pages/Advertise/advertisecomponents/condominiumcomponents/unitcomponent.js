import React from "react";
import { BsImages, BsInfoCircle, BsPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { mainViewState, onFormAdvertiseDataChange } from "../../../../redux/main-view";
import CustomInput from "../../../../ui-components/custominput";

const UnitComponent = () => {
  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    dispatch(onFormAdvertiseDataChange({ ...screens.advertise.data, [name]: [value] }));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pt-3">
          <h3>
            <b>Unit Info</b>
          </h3>
        </div>
        <div className="col-12 pt-3">
          <table className="table table-bordered condominium_table_head">
            <thead>
              <tr>
                <th>Photo</th>
                <th>
                  Unit <BsInfoCircle className="info_hov" />
                </th>
                <th>Beds</th>
                <th>Baths</th>
                <th>Sq.Ft.</th>
                <th>Rent</th>
                <th>Deposit</th>
                <th>Lease Length</th>
                <th>Available On</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span><BsImages/> &nbsp; &nbsp; 1+</span>
                </td>
                <td>
                  <CustomInput
                    type="text"
                    className="input_tbl"
                    placeholder="Unit"
                    value={screens.advertise.data.propertyUnit}
                    disabled={true}
                    
                  />
                </td>
                <td>
                  <select
                    className="select_tbl"
                    value={screens.advertise.data.propertyBeds}
                    disabled={true}
                  >
                    <option value="">Select</option>
                    <option value="0">1.0</option>
                    <option value="1">2.0</option>
                  </select>
                </td>
                <td>
                  <select
                    className="select_tbl"
                    value={screens.advertise.data.propertyBaths}
                    disabled={true}
                  >
                    <option value="">Select</option>
                    <option value="0">1.0</option>
                    <option value="1">2.0</option>
                  </select>
                </td>
                <td>
                  <CustomInput
                    type="text"
                    name="sizeSqft"
                    className="input_tbl"
                    placeholder="Enter"
                    value={screens.advertise.data.sizeSqft}
                    onChange={inputHandler}
                    maxLength={6}
                  />
                </td>
                <td>
                  <CustomInput
                    type="text"
                    name="rent"
                    className="input_tbl"
                    placeholder="Enter"
                    value={screens.advertise.data.rent}
                    onChange={inputHandler}
                    maxLength={6}
                  />
                </td>
                <td>
                  <CustomInput
                    type="text"
                    name="deposit"
                    className="input_tbl"
                    placeholder="Enter"
                    value={screens.advertise.data.deposit}
                    onChange={inputHandler}
                    maxLength={6}
                  />
                </td>
                <td>
                  <CustomInput
                    type="text"
                    name="leaseLength"
                    className="input_tbl"
                    placeholder="Enter"
                    value={screens.advertise.data.leaseLength}
                    onChange={inputHandler}
                    maxLength={30}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="availableDate"
                    className="input_tbl"
                    placeholder="mm/dd/yyyy"
                    value={screens.advertise.data.availableDate}
                    onChange={inputHandler}
                    // value={selectedDate}
                    // onChange={handleDateChange}
                    // max={new Date().toISOString().split("T")[0]}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pt-2 add_another_style">
          <BsPlus className="plus_icon" /> <span>Add Another Units</span>
        </div>
      </div>
    </div>
  );
};

export default UnitComponent;
