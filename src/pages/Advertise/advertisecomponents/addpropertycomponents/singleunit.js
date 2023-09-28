import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"; // version 5.2.0
import { mainViewState, onFormAdvertiseDataChange } from "../../../../redux/main-view";
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
              <input
                type="text"
                name="propertyAdress"
                id="propertyAdress"
                className="single_unit_input"
                placeholder="Enter address"
                onChange={inputHandler}
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
                <select
                  className="single_unit_input"
                  id="propertyBaths"
                  name="propertyBaths"
                  onChange={inputHandler}
                >
                  <option value="">Select a number of beds</option> {/* Placeholder */}
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
                </select>
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
                non<br></br> discriminatory
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
