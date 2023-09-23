import React from "react";
//Json Data
import { data } from "./propertysetdata";
//useHistory
import { useHistory } from "react-router-dom";
const PropertySet = () => {
  const history = useHistory();
  return (
    <>
      <div className="container">
        <div className="row pt-3">
          {data.map((item, index) => {
            return (
              <div className="col-md-4 col-12 mb-3">
                <div className="border_grid" key={index}>
                  <div className="img_div">
                    <img src={item.img} alt="img" />
                  </div>
                  <div className="pd_left_right">
                    <div className="img_heading">
                      <h5>
                        <b>{item.title}</b>
                      </h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="propset_unit">{item.unit} Unit</p>
                      <button
                        className="manage_unit_text_button"
                        type="button"
                        onClick={() => {
                          history.push("./condominiumdetails");
                        }}
                      >
                        Manage Unit
                      </button>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="propset_unit">{item.unit} Unit</p>
                      <button className="manage_unit_text_button" type="button">
                        Reactivate
                      </button>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="propset_ptext">{item.description}</p>
                    </div>
                    <div className="cancel_property_detail">
                      <button className="cancel_property">View More</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PropertySet;
