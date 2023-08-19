import React from "react";

const Variations = () => {
  return (
    <>
      <div className="text-center variations_text">
        <h2>
          <b>There Are Many Variations Of Passages</b>
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of <br></br> a page when looking at its layout.
        </p>
      </div>
      <div className="container variations_text">
        <div className="row pt-5">
          <div className="col-md-4">
            <div className="text-center">
              <img src="images/variation1.png" alt="img" />
              <h3 className="pt-4">
                <b>1 Million</b>
              </h3>
              <p>
                <b>
                  Property <br></br>Owners
                </b>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <img src="images/variation2.png" alt="img" />
              <h3 className="pt-4">
                <b>81 Million</b>
              </h3>
              <p>
                <b>
                  Renter Visits <br></br>Monthly
                </b>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <img src="images/variation3.png" alt="img" />
              <h3 className="pt-4">
                <b>$400 Million</b>
              </h3>
              <p>
                <b>
                  In Rent Payments <br></br>Monthly
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Variations;
