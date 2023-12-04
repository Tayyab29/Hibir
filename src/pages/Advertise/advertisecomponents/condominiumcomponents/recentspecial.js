import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  mainViewState,
  onAdvertiseValidate,
  onFormAdvertiseDataChange,
} from "../../../../redux/main-view";
import CustomInput from "../../../../ui-components/custominput";
import moment from "moment/moment";

const RecentSpecial = () => {
  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  // Handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    dispatch(onFormAdvertiseDataChange({ ...screens.advertise.data, [name]: value }));
    dispatch(onAdvertiseValidate({ ...screens.advertise.validations, [name]: false }));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pb-3">
          <h3>
            <b>Rent Specials</b>
          </h3>
        </div>
        <div className="col-12 col-md-4">
          <div className="form-group">
            <div className="form-group">
              <label>
                <b>Rent Special Tilte</b>
              </label>
              <div>
                <CustomInput
                  type="text"
                  name="rentTitle"
                  value={screens.advertise.data?.rentTitle}
                  onChange={inputHandler}
                  className="condominium_input"
                  placeholder="Enter title"
                  maxLength={45}
                />
                {screens.advertise.validations.rentTitle && (
                  <small className="p-error">Rent Special Title is required</small>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="form-group">
            <div className="form-group">
              <label>
                <b>Rent Special Start</b>
              </label>
              <div>
                <CustomInput
                  type="date"
                  name="rentStartDate"
                  value={moment(screens.advertise.data?.rentStartDate).format("YYYY-MM-DD")}
                  onChange={inputHandler}
                  className="condominium_input"
                  placeholder=""
                />
                {screens.advertise.validations.rentStartDate && (
                  <small className="p-error">Rent Special Start is required</small>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="form-group">
            <div className="form-group">
              <label>
                <b>Rent Special End</b>
              </label>
              <div>
                <CustomInput
                  type="date"
                  name="rentEndDate"
                  value={moment(screens.advertise.data?.rentEndDate).format("YYYY-MM-DD")}
                  // value="2023-11-07"
                  onChange={inputHandler}
                  className="condominium_input"
                  placeholder=""
                />
                {screens.advertise.validations.rentEndDate && (
                  <small className="p-error">Rent Special End is required</small>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label>
              <b>Rent Special Description(Optional)</b>
            </label>
            <textarea
              className="text_area"
              name="rentDescription"
              value={screens.advertise.data?.rentDescription}
              onChange={inputHandler}
              rows="5"
              placeholder=""
              maxLength={700}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSpecial;
