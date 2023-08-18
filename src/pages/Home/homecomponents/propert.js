import React from "react";
// import icon from "../../../images/propertyicon.png";
import { data } from "./propertData";

const Property = () => {
  return (
    <>
      <div className="text-center">
        <h2>
          <b>Lorem ipsum dolor adipiscing</b>
        </h2>
      </div>
      <div className="container">
        <div className="row pt-5">
          {data.map((item, index) => {
            return (
              <div className="col-md-3 col-12" key={index}>
                <div className="img_div">
                  <img src={item.img} />
                </div>
                <div className="img_heading">
                  <h4>
                    <b>
                      {item.title} <br></br>Goes Here
                    </b>
                  </h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="img_plain_text">{item.description}</p>

                  <img src="images/propertyicon.png" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="view_more_div">
          <button className="search_btn">View More</button>
        </div>
        <div className="mt-5">
          <hr />
        </div>
      </div>
    </>
  );
};

export default Property;
