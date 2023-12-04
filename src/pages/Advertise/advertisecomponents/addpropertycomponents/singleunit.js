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

import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  propertyAdress: Yup.string().required("Address is required"),
  propertyType: Yup.string().required("Property Type is required"),
  propertyBeds: Yup.array().required("Beds is required"),
  propertyBaths: Yup.array().required("Baths is required"),
});

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
      formik.setFieldValue([name], [value]);
    } else {
      setLocalForm({
        ...localForm,
        [name]: value,
      });
      formik.setFieldValue([name], value);
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
  };

  // Handlers
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      propertyAdress: "",
      propertyType: "",
      propertyBeds: "",
      propertyBaths: "",
    },
    onSubmit: async (data) => {
      console.log({ data });
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
    },
  });

  const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
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
                  placeholder="Enter Address"
                  onChange={inputHandler}
                  maxLength={150}
                />
                {getFormErrorMessage("propertyAdress")}
              </div>
            </div>
            <div className="form-group">
              <label>
                <b>Property Type</b>
              </label>
              <div>
                <CustomDropdown
                  className="single_unit_input"
                  id="propertyType"
                  name="propertyType"
                  onChange={inputHandler}
                  options={ADVERTISE_PROPERTY_TYPE}
                />
                {getFormErrorMessage("propertyType")}
              </div>
            </div>
            <div className="inline_select_unit">
              <div className="form-group">
                <label>
                  <b>Beds</b>
                </label>
                <div>
                  <CustomDropdown
                    className="single_unit_input"
                    id="propertyBeds"
                    name="propertyBeds"
                    onChange={inputHandler}
                    options={ADVERTISE_BEDS}
                  />
                  {getFormErrorMessage("propertyBeds")}
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
                  {getFormErrorMessage("propertyBaths")}
                </div>
              </div>
            </div>
            <div className="add_prop_button">
              <button className="addprop_btn" type="button" onClick={formik.handleSubmit}>
                {/* <button className="addprop_btn" type="button" onClick={() => saveHandler()}> */}
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
      </form>
    </>
  );
};

export default SingleUnit;
