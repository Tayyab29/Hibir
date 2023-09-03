import React from "react";

const DescriptionGeneral = () => {
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
                className="text_area"
                rows="5"
                placeholder="What’s Great about , this property"
              ></textarea>
              <span className="text_area_char_text">
                7000 Characters Remaining
              </span>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionGeneral;
