import React, { useContext, useState } from "react";
import { BsPlusCircle, BsXCircle } from "react-icons/bs";
import CustomInput from "../../../../ui-components/custominput";
import CustomDropdown from "../../../../ui-components/customdropdown";
import {
  ADVERTISE_BATHS,
  ADVERTISE_BEDS,
  ADVERTISE_PROPERTY_TYPE,
} from "../../../../utils/Constants/global";
import { useDispatch, useSelector } from "react-redux";
import { mainViewState, onFormAdvertiseDataChange } from "../../../../redux/main-view";
import { ToastContext } from "../../../../context/toast";
import { advertiseCreate } from "../../../../services/advertise";
import { useHistory } from "react-router-dom";
import { loginState } from "../../../../redux/login";

const MultiUnit = () => {
  const history = useHistory();
  const { user } = useSelector(loginState);

  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();
  const toast = useContext(ToastContext);

  const [localForm, setLocalForm] = useState({
    ...screens.advertise.data,
    propertyUnit: "mu",
    propertyAdress: "",
    propertyType: "",
  });
  const [formArray, setFormArray] = useState([
    {
      propertyNames: "",
      propertyBeds: "",
      propertyBaths: "",
    },
  ]);

  const handleAddMore = () => {
    if (formArray.length === 5) {
    } else {
      setFormArray([
        ...formArray,
        {
          propertyNames: "",
          propertyBeds: "",
          propertyBaths: "",
        },
      ]);
    }
  };

  const handleRemoveForm = async (index) => {
    if (index !== 0) {
      const updatedFormArray = formArray.filter((_, i) => i !== index);
      setFormArray(updatedFormArray);
    }
  };

  const inputHandler = (e, index) => {
    const { name, value } = e.target;
    const updatedFormArray = [...formArray];
    if (name === "propertyBaths" || name === "propertyBeds" || name === "propertyNames") {
      updatedFormArray[index][name] = value;
      setFormArray(updatedFormArray);
    } else {
      setLocalForm({
        ...localForm,
        [name]: value,
      });
    }
  };

  const saveHandler = async () => {
    const dummyNames = [];
    const dummyBeds = [];
    const dummyBaths = [];
    formArray.forEach((item) => {
      const { propertyNames, propertyBeds, propertyBaths } = item;
      dummyNames.push(propertyNames);
      dummyBeds.push(propertyBeds);
      dummyBaths.push(propertyBaths);
    });

    try {
      const res = await advertiseCreate({
        ...localForm,
        propertyNames: dummyNames,
        propertyBaths: dummyBaths,
        propertyBeds: dummyBeds,
        user: user?._id,
        // isFullfilled: fa
      });
      if (res.data.status) {
        dispatch(
          onFormAdvertiseDataChange({
            ...localForm,
            _id: res.data.advertise,
            propertyNames: dummyNames,
            propertyBaths: dummyBaths,
            propertyBeds: dummyBeds,
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
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="form-group">
            <label>
              <b>Address</b>
            </label>
            <div>
              <CustomInput
                type="text"
                className="single_unit_input"
                placeholder="Enter Address"
                id="propertyAdress"
                name="propertyAdress"
                onChange={inputHandler}
                maxLength={100}
              />
            </div>
          </div>
          <div className="form-group">
            <label>
              <b>Property Type</b>
            </label>
            <CustomDropdown
              className="single_unit_input"
              id="propertyType"
              name="propertyType"
              onChange={inputHandler}
              options={ADVERTISE_PROPERTY_TYPE}
            />
          </div>
          {formArray.map((field, index) => (
            <div key={index} className="inline_select_unit">
              <div className="form-group">
                <label>
                  <b>Unit Name</b>
                </label>

                <CustomInput
                  type="text"
                  name="propertyNames"
                  id="propertyNames"
                  className="single_unit_input"
                  placeholder="Enter name"
                  value={field.propertyNames}
                  onChange={(e) => inputHandler(e, index)}
                  maxLength={50}
                />
              </div>
              <div className="form-group">
                <label>
                  <b>Beds</b>
                </label>

                <CustomDropdown
                  className="single_unit_input"
                  id="propertyBeds"
                  name="propertyBeds"
                  value={field.propertyBeds}
                  onChange={(e) => inputHandler(e, index)}
                  options={ADVERTISE_BEDS}
                />
              </div>
              <div className="form-group">
                <label>
                  <b>Baths</b>
                </label>

                <CustomDropdown
                  className="single_unit_input"
                  id="propertyBaths"
                  name="propertyBaths"
                  value={field.propertyBaths}
                  onChange={(e) => inputHandler(e, index)}
                  options={ADVERTISE_BATHS}
                />
              </div>
              {index === 0 ? (
                <div className="none_icon"></div>
              ) : (
                <div className="remove_unit" onClick={() => handleRemoveForm(index)}>
                  <BsXCircle />
                </div>
              )}
            </div>
          ))}
          {formArray.length === 5 ? (
            <></>
          ) : (
            <div className="add_more" onClick={handleAddMore}>
              <BsPlusCircle /> Add more
            </div>
          )}

          <div className="add_prop_button">
            <button className="addprop_btn" type="button" onClick={saveHandler}>
              Add My Property
            </button>
          </div>
          <div className="pt-5 text-center">
            <p>
              By clicking Add My Property above, I agree that I will provide accurate and{" "}
              <span className="non_discriminatory">
                non<br></br> discriminatory
              </span>{" "}
              information and I will comply with the Hibir.com{" "}
              <span className="non_discriminatory">
                Terms and <br></br> Conditions
              </span>{" "}
              and the Add a Property Terms of Service.
            </p>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default MultiUnit;
