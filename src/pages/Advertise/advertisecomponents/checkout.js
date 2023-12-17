import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginState } from "../../../redux/login";
import {
  mainViewState,
  onAdvertiseMultiValidate,
  onAdvertiseValidate,
  onFormAdvertiseDataChange,
} from "../../../redux/main-view";
import { ToastContext } from "../../../context/toast";
import { advertiseUpdation } from "../../../services/advertise";
import { ADVERTISE_INTIAL_STATE } from "../../../utils/Constants/global";
import CustomInput from "../../../ui-components/custominput";
import { fetchCountries, fetchZipCode } from "../../../services/genral-apis";

const CheckOut = () => {
  const history = useHistory();
  const { user } = useSelector(loginState);

  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  // Context
  const toast = useContext(ToastContext);

  const saveHandler = async () => {
    try {
      const _validate = screens.advertise.validations;
      const _data = screens.advertise.data;
      const _formArray = screens.advertise.multiValidate;
      let hasError = false;
      if (
        _validate.rentTitle ||
        _validate.rentStartDate ||
        _validate.rentEndDate ||
        _validate.petsAllowed ||
        _validate.laundryType ||
        _validate.parkingType ||
        _validate.contactPreference ||
        _validate.userType
      ) {
        hasError = true;
      }
      const updatedFormArray = _formArray.map((item) => {
        const { validations, ...rest } = item;

        if (
          item.availableDate === "" ||
          item.deposit === "" ||
          item.leaseLength === "" ||
          item.rent === "" ||
          item.sizeSqft === ""
        ) {
          hasError = true;
          return {
            ...rest,
            validations: {
              ...validations,
              availableDate: item.availableDate === "",
              deposit: item.deposit === "",
              leaseLength: item.leaseLength === "",
              rent: item.rent === "",
              sizeSqft: item.sizeSqft === "",
            },
          };
        }
      });
      if (hasError) {
        dispatch(
          onAdvertiseValidate({
            rentTitle: _data.rentTitle === "",
            rentStartDate: _data.rentStartDate === "",
            rentEndDate: _data.rentStartDate === "",
            petsAllowed: _data.petsAllowed === "",
            laundryType: _data.laundryType === "",
            parkingType: _data.parkingType === "",
            contactPreference: _data.contactPreference === "",
            userType: _data.userType === "",
          })
        );
        dispatch(onAdvertiseMultiValidate(updatedFormArray));
        toast.showMessage("Error", "Please fill the required field", "error");
        return;
      }
      const res = await advertiseUpdation({
        ...screens.advertise.data,
        isFullfilled: true,
        isPublished: true,
        isSaved: false,
      });
      if (res.data.status) {
        toast.createdToast("Advertisement");
        dispatch(onFormAdvertiseDataChange(ADVERTISE_INTIAL_STATE));
        dispatch(
          onAdvertiseValidate({
            rentTitle: false,
            rentStartDate: false,
            rentEndDate: false,
            petsAllowed: false,
            laundryType: false,
            parkingType: false,
            contactPreference: false,
            userType: false,
          })
        );
        dispatch(
          onAdvertiseMultiValidate([
            {
              availableDate: "",
              deposit: "",
              leaseLength: "",
              rent: "",
              sizeSqft: "",
              validations: {
                sizeSqft: false,
                rent: false,
                deposit: false,
                leaseLength: false,
                availableDate: false,
                images: false,
              },
            },
          ])
        );
        history.push("./checkoutmodal");
        // history.replace("/");
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
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            {/*  */}
            <div className="checkout_header">
              <h1>
                <b>Checkout Details</b>
              </h1>
            </div>

            <div className="form-group">
              <label>
                <b>Contact Information</b>
              </label>
              <div>
                <CustomInput
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="single_unit_input"
                  value={user?.email}
                  disabled
                />
              </div>
            </div>
            {/* radio Button */}
            <div className="form-group">
              <div className="text-left">
                <input
                  type="radio"
                  checked={screens.advertise.data.newsOffer === "yes"}
                  name="userType"
                  value="yes"
                  className="radio_button"
                />
                <span className="radio_span">Email me with news and offers</span>
              </div>
            </div>

            <div className="inline_select_unit">
              <div className="form-group">
                <div>
                  <CustomInput
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="single_unit_input"
                    value={user?.firstName}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <CustomInput
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="single_unit_input"
                    value={user?.lastName}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>
                <b>Country</b>
              </label>

              <CustomInput
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                className="single_unit_input"
                value={user?.country}
                disabled
              />
            </div>
            <div className="form-group">
              <div>
                <CustomInput
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="single_unit_input"
                  value={user?.address}
                  disabled
                />
              </div>
            </div>
            <div className="form-group">
              <div>
                <CustomInput
                  type="text"
                  name="addressMain"
                  placeholder="Apartment, Suite, Etc. (Optional)"
                  className="single_unit_input"
                  value={user?.addressMain}
                  disabled
                />
              </div>
            </div>
            <div className="inline_select_unit">
              <div className="form-group">
                <div>
                  <CustomInput
                    type="text"
                    name="zip"
                    placeholder="Search zip..."
                    className="single_unit_input"
                    value={user?.zip}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <CustomInput
                    type="text"
                    name="city"
                    placeholder="City"
                    className="single_unit_input"
                    value={user?.city}
                    disabled
                  />
                </div>
              </div>

              <div className="form-group">
                <div>
                  <CustomInput
                    type="text"
                    name="state"
                    placeholder="State"
                    className="single_unit_input"
                    value={user?.state}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div>
                <CustomInput
                  type="number"
                  name="phoneNo"
                  placeholder="021 324 32"
                  className="single_unit_input"
                  value={user?.phoneNo}
                  disabled
                />
              </div>
            </div>
            <div className="add_prop_button">
              <button
                className="addprop_btn"
                type="button"
                onClick={() => saveHandler()}
                // onClick={() => history.push("./checkoutmodal")}
              >
                Checkout Now
              </button>
            </div>
            <div className="pt-2 pb-2">
              {/* <hr className="hr_class"></hr>
              <span className="or_class">OR</span>
              <hr className="hr_class"></hr> */}
            </div>
          </div>
          {/*  */}
          <div className="col-12 col-md-6">
            <div className="packgr_card p-0 mt-3">
              <div className="subs_header">
                <h1>Subscription Summary</h1>
              </div>
              <div className="header_display checkout_header_displ">
                <div>
                  <h3>
                    <b>
                      {" "}
                      {screens.advertise.data.newsOffer === "diamond" ? "Diamond" : "Platinum"}
                    </b>
                  </h3>
                </div>
                <div>
                  <h3>
                    <b>
                      {screens.advertise.data.newsOffer === "diamond" ? "£820/Month" : "£420/Month"}
                    </b>
                  </h3>
                </div>
              </div>
              <hr></hr>

              {/* body section */}

              <div className="pt-3 checkout_p_padding check_out_ul">
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form, by injected humour, or randomised words
                  which don't look even slightly believable.
                </p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore
                  </li>
                </ul>
              </div>
              <hr></hr>
              <div className="service_bottom_style">
                <h6>
                  <b>Service Charges</b>
                </h6>
                <h6>
                  <b> £20</b>
                </h6>
              </div>
              <hr></hr>
              <div className="service_bottom_style">
                <h6>
                  <b>Tax</b>
                </h6>
                <h6>
                  <b> £1%</b>
                </h6>
              </div>
              <hr></hr>
              <div className="service_bottom_style mb-3">
                <h6>
                  <b>Total Ammount</b>
                </h6>
                <h6>
                  <b> £909</b>
                </h6>
              </div>
              {/* body section */}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default CheckOut;
