import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"; // version 5.2.0
import { mainViewState, onFormAdvertiseDataChange } from "../../../../redux/main-view";
import CustomInput from "../../../../ui-components/custominput";
import CustomDropdown from "../../../../ui-components/customdropdown";
import {
  ADVERTISE_BATHS,
  ADVERTISE_BEDS,
  ADVERTISE_PROPERTY_TYPE,
} from "../../../../utils/Constants/global";
import { advertiseCreate } from "../../../../services/advertise";
import { loginState } from "../../../../redux/login";
import { ToastContext } from "../../../../context/toast";
const SingleUnit = () => {
  const history = useHistory();

  // Redux
  const { user } = useSelector(loginState);
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  const toast = useContext(ToastContext);

  const [localForm, setLocalForm] = useState({
    ...screens.advertise.data,
    propertyUnit: "su",
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

  const saveHandler = async () => {
    try {
      const res = await advertiseCreate({ ...localForm, user: user?._id });
      if (res.data.status) {
        dispatch(
          onFormAdvertiseDataChange({
            ...localForm,
            _id: res.data.advertise,
            user: user?._id,
          })
        );
        toast.createdToast("Advertisement");
        history.push("./condominiumdetails");
      } else {
        toast.showMessage("Error", "Incorrect Data", "error");
      }
    } catch (error) {
      toast.showMessage(
        "Error",
        "Sorry, we are unable to process your request at this time.",
        "error"
      );
    }
    // dispatch(onFormAdvertiseDataChange(localForm));
    // history.push("./condominiumdetails");
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
              {/* <select
                className="single_unit_input"
                id="propertyType"
                name="propertyType"
                onChange={inputHandler}
              >
                <option value="">Select a Property Type</option> 
                <option value="Apartment">Apartment</option>
                <option value="Single Family House">Single Family House</option>
                <option value="Condominium">Condominium</option>
                <option value="TownHouse">TownHouse</option>
                <option value="Mobile Home/Manufactured Home">Mobile Home/Manufactured Home</option>
              </select> */}
              <CustomDropdown
                className="single_unit_input"
                id="propertyType"
                name="propertyType"
                onChange={inputHandler}
                options={ADVERTISE_PROPERTY_TYPE}
              />
            </div>
          </div>
          <div className="inline_select_unit">
            <div className="form-group">
              <label>
                <b>Beds</b>
              </label>
              <div>
                {/* <select
                  className="single_unit_input"
                  id="propertyBeds"
                  name="propertyBeds"
                  onChange={inputHandler}
                >
                  <option value="">Select a number of beds</option> 
                  <option value="Studio">Studio</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select> */}
                <CustomDropdown
                  className="single_unit_input"
                  id="propertyBeds"
                  name="propertyBeds"
                  onChange={inputHandler}
                  options={ADVERTISE_BEDS}
                />
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
                  options={ADVERTISE_BATHS}
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
