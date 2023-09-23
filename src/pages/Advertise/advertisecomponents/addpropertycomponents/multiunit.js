import React from "react";

const MultiUnit = () => {
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
              <input type="text" className="single_unit_input" placeholder="" />
            </div>
          </div>
          <div className="form-group">
            <label>
              <b>Property Type</b>
            </label>
            <div>
              <select className="single_unit_input">
                <option value="0">Single Family House</option>
                <option value="1">Double Family House</option>
                <option value="2">Single Family House</option>
              </select>
            </div>
          </div>
          <div className="inline_select_unit">
            <div className="form-group">
              <label>
                <b>Beds</b>
              </label>
              <div>
                <select className="single_unit_input">
                  <option value="0">Single Family House</option>
                  <option value="1">Double Family House</option>
                  <option value="2">Single Family House</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>
                <b>Baths</b>
              </label>
              <div>
                <select className="single_unit_input">
                  <option value="0">Single Family House</option>
                  <option value="1">Double Family House</option>
                  <option value="2">Single Family House</option>
                </select>
              </div>
            </div>
          </div>
          <div className="add_prop_button">
            <button className="addprop_btn" type="button">
              Add My Property
            </button>
          </div>
          <div className="pt-5 text-center">
            <p>
              By clicking Add My Property above, I agree that I will provide
              accurate and{" "}
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
        {/*  */}
        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default MultiUnit;
