import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainViewState, onFormAdvertiseDataChange } from "../../../../redux/main-view";

const RecentSpecial = () => {
  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  // Handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    dispatch(onFormAdvertiseDataChange({ ...screens.advertise.data, [name]: value }));
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
                <b>Rest Special Tilte</b>
              </label>
              <div>
                <input
                  type="text"
                  name="rentTitle"
                  onChange={inputHandler}
                  className="condominium_input"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="form-group">
            <div className="form-group">
              <label>
                <b>Rest Special Start</b>
              </label>
              <div>
                <input
                  type="date"
                  name="rentStartDate"
                  onChange={inputHandler}
                  className="condominium_input"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="form-group">
            <div className="form-group">
              <label>
                <b>Rest Special End</b>
              </label>
              <div>
                <input
                  type="date"
                  name="rentEndDate"
                  onChange={inputHandler}
                  className="condominium_input"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label>
              <b>Rest Special Description(Optional)</b>
            </label>
            <textarea
              className="text_area"
              name="rentDescription"
              onChange={inputHandler}
              rows="5"
              placeholder=""
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSpecial;
