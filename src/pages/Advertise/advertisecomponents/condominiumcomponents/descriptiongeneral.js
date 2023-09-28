import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainViewState, onFormAdvertiseDataChange } from "../../../../redux/main-view";

const DescriptionGeneral = () => {
  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  // Handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    dispatch(onFormAdvertiseDataChange({ ...screens.advertise.data, [name]: value }));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label>
                <b>Description(Optional)</b>
              </label>
              <textarea
                rows="5"
                className="text_area"
                id="description"
                name="description"
                onChange={inputHandler}
                placeholder="What’s Great about , this property"
              ></textarea>
              <span className="text_area_char_text">7000 Characters Remaining</span>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionGeneral;
