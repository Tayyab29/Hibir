import React from "react";
import { data } from "../../Home/homecomponents/propertData";

const PropertiesList = () => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div className="listing_wrappper">
            <div className="col-md-12 d-flex">
              <div className="col-md-8">
                <h6 className="title_text ">Your Property Title Goes Here</h6>
                <p className="simple_text ">There are many passages of Available</p>
              </div>
              <div className="col-md-4">
                <p className="design_text">BOZZUTO</p>
              </div>
            </div>
            <div className=" col-md-12 d-flex">
              <div className="img_div col-md-5 ">
                <img src={item.img} alt="img" />
              </div>
              <div className="single_property_wrapper col-md-7 ">
                <div className="price_wrapper d-flex justify-content-between">
                  <p>$2345 - $65456</p>
                  <p>Icon</p>
                </div>
                <div className="type_wrapper">
                  <p>Studio - 3 Beds</p>
                </div>
                <div className="description_wrapper">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever
                  </p>
                </div>
                <div className="phone_wrapper">
                  <p>(123) 434-4324</p>
                </div>
                <div>
                  <button className="email_btn" type="button">
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PropertiesList;
