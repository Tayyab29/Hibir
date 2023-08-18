import React from "react";
import propertImg from "../../../images/Rectangle 28.png";
import icon from "../../../images/propertyicon.png";
const Property = () => {
  return (
    <>
      <div className="text-center">
        <h2>Lorem ipsum dolor adipiscing</h2>
      </div>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-3 col-12">
            <div className="img_div">
              <img src={propertImg} />
            </div>
            <div className="img_heading">
              <h5>
                <b>
                  Your Property Title <br></br>Goes Here
                </b>
              </h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="img_plain_text">
                There are many variations of passages of Lorem Ipsum available
              </p>
              <img src={icon} />
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="img_div">
              <img src={propertImg} />
            </div>
            <div className="img_heading">
              <h5>
                <b>
                  Your Property Title <br></br>Goes Here
                </b>
              </h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="img_plain_text">
                There are many variations of passages of Lorem Ipsum available
              </p>
              <img src={icon} />
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="img_div">
              <img src={propertImg} />
            </div>
            <div className="img_heading">
              <h5>
                <b>
                  Your Property Title <br></br>Goes Here
                </b>
              </h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="img_plain_text">
                There are many variations of passages of Lorem Ipsum available
              </p>
              <img src={icon} />
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="img_div">
              <img src={propertImg} />
            </div>
            <div className="img_heading">
              <h5>
                <b>
                  Your Property Title <br></br>Goes Here
                </b>
              </h5>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="img_plain_text">
                There are many variations of passages of Lorem Ipsum available
              </p>
              <img src={icon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
