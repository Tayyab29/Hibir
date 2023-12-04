import React from "react";
import { data } from "./contrarydata";
const Contrary = () => {
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
              <div className="col-md-4 col-12">
                <div className="contrary_border" key={index}>
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={item.img} alt="Images" className="icon_image_contrary" />
                    {/* </p> */}
                  </div>
                  <div className="icon_text">
                    <h5>
                      <b>{item.title}</b>
                    </h5>
                  </div>

                  <div className="learnmore_contrary">
                    <button className="learn-btn">Learn More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5">
          <hr />
        </div>
      </div>
    </>
  );
};

export default Contrary;
