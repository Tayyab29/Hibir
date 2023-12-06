import React, { useState } from "react";
import { data } from "../../Home/homecomponents/propertData";
import { MdOutlineSendToMobile } from "react-icons/md";
import {  BsPatchCheckFill, BsSuitHeart } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
const PropertiesList = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]); // Replace these numbers with your own
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNumberClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => Math.min(prevIndex + 1, numbers.length - 1));
  };
  return (
    <div className="allproperties_scrollbar">
      {data.map((item, index) => {
        return (
          <div className="listing_wrappper row">
            <div className="col-md-12 d-flex">
              <div className="col-md-8">
                <h6 className="title_text ">Your Property Title Goes Here</h6>
                <p className="simple_text ">There are many passages of Available</p>
              </div>
              <div className="col-md-4">
                <div className="design_text_main">
                  <p className="design_text">
                    BOZZUTO
                  </p>
                  <BsSuitHeart />

                </div>
              </div>
            </div>
            <div className=" col-md-12 d-flex">
              <div className="img_div col-md-6">
                <img src={item.img} alt="img" />
              </div>
              <div className="single_property_wrapper col-md-6">
                <div className="price_wrapper d-flex justify-content-between">
                  <p>$2345 - $65456</p>
                  <BsPatchCheckFill className="patch_check_color" />
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
                  <MdOutlineSendToMobile className="allproperties_mobile_icon" />
                  <p>(123) 434-4324</p>
                </div>
                <div className="email_btn_padding_top">
                  <button className="email_btn" type="button">
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}



      <div className="pagination_content">

        {
          // Left Arrow
        /* <span className="pagination_icon" onClick={handlePrevClick}>
          &lt; 
        </span> */}

        {numbers.map((number, index) => (
          <span
            key={index}
            className={`number ${index === activeIndex ? "active__Class" : "inactive__Class"}`}
            onClick={() => handleNumberClick(index)}
          >
            {number}
          </span>
        ))}
        {/* right Arrow */}
        <span className="pagination_icon" onClick={handleNextClick}>
          <FiArrowRight />
        </span>
        {/* {numbers.map((number, index) => (
          <span
            key={index}
            className={`number ${index === activeIndex ? 'active__Class' : 'inactive__Class'

              }`}
            onClick={() => handleNumberClick(index)}
          >
            {number}
          </span>
          
        ))} */}
      </div>



    </div>
  );
};

export default PropertiesList;
