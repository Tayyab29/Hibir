import React, { useState } from "react";
import SingleUnit from "./addpropertycomponents/singleunit";
import MultiUnit from "./addpropertycomponents/multiunit";

const AddProperty = () => {
  const [activeUnit, setActiveUnit] = useState(0);

  const handleCardClick = (index) => {
    setActiveUnit(index);
  };

  const renderCardComponent = () => {
    if (activeUnit === 0) {
      return <SingleUnit />;
    } else if (activeUnit === 1) {
      return <MultiUnit />;
    }
    return null;
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {/* <div className="col-md-2"></div> */}
            <div className="col-md-6">
              <h1 className="manage_heaader_text">
                <b>
                  There Are Many Variations<br></br> Of Lorem Ipsum
                </b>
              </h1>
              <p className="manage_heaader_ptext">
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which
                don't look even slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
                text.
              </p>
            </div>
            <div className="col-md-6">
              <div className="manage_header_img">
                <img src="images/addproperty1.png" alt="Packge img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-overlay-color">
        <div className="container">
          <div className="Marketing_Package">
            <div className="text-center">
              <h1>
                <b>Add Your Property</b>
              </h1>
              <div className="pckg_text_header">
                <p>
                  Reach millions of renters. Screen applicants.<br></br>
                  Sign leases. Set up rent payments.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div
              className={`col-md-4 col-12 ${
                activeUnit === 0 ? "active_button" : "noactive_button"
              }`}
              onClick={() => handleCardClick(0)}
            >
              <div className="icon_text_singleunit text-center">
                <img src="images/singleunit.png" alt="single unit" />
                Single Unit
              </div>
            </div>
            <div
              className={`col-md-4 col-12 ${
                activeUnit === 1 ? "active_button" : "noactive_button"
              }`}
              onClick={() => handleCardClick(1)}
            >
              <div className="icon_text_singleunit text-center">
                <img src="images/multiunit.png" alt="multi unit" />
                Multi Unit
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-12">{renderCardComponent()}</div>
        </div>
      </section>
    </>
  );
};

export default AddProperty;
