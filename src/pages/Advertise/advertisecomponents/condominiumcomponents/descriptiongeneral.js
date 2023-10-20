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

  // Calculate remaining characters
  const maxCharacters = 700;
  const currentCharacters = screens.advertise.data.description ? screens.advertise.data.description.length : 0;
  const remainingCharacters = maxCharacters - currentCharacters;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label>
                <b>Description (Optional)</b>
              </label>
              <textarea
                rows="5"
                className="text_area"
                id="description"
                name="description"
                value={screens.advertise.data.description} // Set the value from Redux state
                onChange={inputHandler}
                placeholder="What’s Great about, this property"
              ></textarea>
              <span className="text_area_char_text">{remainingCharacters} Characters Remaining</span>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionGeneral;
