import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"; // version 5.2.0
import { mainViewState, onFormAdvertiseDataChange } from "../../../../redux/main-view";
import CustomInput from "../../../../ui-components/custominput";
import CustomDropdown from "../../../../ui-components/customdropdown";
const SingleUnit = () => {
  const history = useHistory();

  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  const [localForm, setLocalForm] = useState({
    ...screens.advertise.data,
    propertyUnit: "Single Unit",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "propertyBaths" || name === "propertyBeds") {
      setLocalForm({
        ...localForm,
        [name]: [value],
      });
    } else {
      setLocalForm({
        ...localForm,
        [name]: value,
      });
    }
  };

  const saveHandler = () => {
    dispatch(onFormAdvertiseDataChange(localForm));
    history.push("./condominiumdetails");
  };
  const [dropdownOptions, setDropdownOptions] = useState([
    { value: 'option0', label: 'Select a number of beds' },
    { value: 'option1', label: '0.5' },
    { value: 'option2', label: '1' },
    { value: 'option3', label: '1.5' },
    { value: 'option4', label: '2' },
    { value: 'option5', label: '2.5' },
    { value: 'option6', label: '3' },
    { value: 'option7', label: '3.5' },
    { value: 'option8', label: '4' },
    { value: 'option9', label: '4.5' },
    { value: 'option10', label: '5' },
    { value: 'option11', label: '5.5' },
    { value: 'option12', label: '6' },
    { value: 'option13', label: '6.5' },
  ]);
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-2"></div>
        {/*  */}
        <div className="col-md-8">
          <div className="form-group">
            <label>
              <b>Address</b>
            </label>
            <div>
              <CustomInput
                type="text"
                name="propertyAdress"
                id="propertyAdress"
                className="single_unit_input"
                placeholder="Enter address"
                onChange={inputHandler}
                maxLength={150}
              />
            </div>
          </div>
          <div className="form-group">
            <label>
              <b>Property Type</b>
            </label>
            <div>
              <select
                className="single_unit_input"
                id="propertyType"
                name="propertyType"
                onChange={inputHandler}
              >
                <option value="">Select a Property Type</option> {/* Placeholder */}
                <option value="Apartment">Apartment</option>
                <option value="Single Family House">Single Family House</option>
                <option value="Condominium">Condominium</option>
                <option value="TownHouse">TownHouse</option>
                <option value="Mobile Home/Manufactured Home">Mobile Home/Manufactured Home</option>
              </select>
            </div>
          </div>
          <div className="inline_select_unit">
            <div className="form-group">
              <label>
                <b>Beds</b>
              </label>
              <div>
                <select
                  className="single_unit_input"
                  id="propertyBeds"
                  name="propertyBeds"
                  onChange={inputHandler}
                >
                  <option value="">Select a number of beds</option> {/* Placeholder */}
                  <option value="Studio">Studio</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>
                <b>Baths</b>
              </label>
              <div>
                <CustomDropdown
                  className="single_unit_input"
                  id="propertyBaths"
                  name="propertyBaths"
                  onChange={inputHandler}
                  options={dropdownOptions}
                />
                {/* <select
                  className="single_unit_input"
                  id="propertyBaths"
                  name="propertyBaths"
                  onChange={inputHandler}
                >
                  <option value="">Select a number of beds</option>
                  <option value="0.5">0.5</option>
                  <option value="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                  <option value="2.5">2.5</option>
                  <option value="3">3</option>
                  <option value="3.5">3.5</option>
                  <option value="4">4</option>
                  <option value="4.5">4.5</option>
                  <option value="5">5</option>
                  <option value="5.5">5.5</option>
                  <option value="6">6</option>
                  <option value="6.5">6.5</option>
                </select> */}
              </div>
            </div>
          </div>
          <div className="add_prop_button">
            <button className="addprop_btn" type="button" onClick={() => saveHandler()}>
              Add My Property
            </button>
          </div>
          <div className="pt-5 text-center">
            <p>
              By clicking Add My Property above, I agree that I will provide accurate and
              <span className="non_discriminatory">
                &nbsp; non<br></br> discriminatory &nbsp;
              </span>
              information and I will comply with the Hibir.com
              <span className="non_discriminatory">
                Terms and <br></br> Conditions
              </span>
              and the Add a Property Terms of Service.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default SingleUnit;
