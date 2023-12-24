import React, { useState } from "react";
import { data } from "../../Home/homecomponents/propertData";
import { MdOutlineSendToMobile } from "react-icons/md";
import { BsPatchCheckFill, BsSuitHeart } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

import { Paginator } from "primereact/paginator";
import { renderImage } from "../../../utils/HelperFunction/imagePreview";
import { truncateDescription } from "../../../utils/HelperFunction/descriptionText";
import { useHistory } from "react-router-dom";
import CustomLoader from "../../../ui-components/customloader";

const PropertiesList = (props) => {
  const { totalRecords, viewProperties, first, setFirst, isLoading } = props;

  const history = useHistory();

  const [rows, setRows] = useState(4);

  const onPageChange = (event) => {
    setFirst(event.first);
    // setRows(event.rows);
  };

  const multipleRent = (values) => {
    let formattedValues;

    if (values?.length === 1) {
      formattedValues = `$${values[0]}`;
    } else {
      formattedValues = values?.map((value) => `$${value}`).join(" - ");
    }
    return formattedValues;
  };

  const sendEmailHandler = (data) => {
    console.log({ eamil: data });
  };

  const singlePropertyRouting = (id) => {
    history.push(`/propertyById?id=${id}`);
  };

  return (
    <div className="allproperties_scrollbar">
      {isLoading ? (
        <CustomLoader height={"80vh"} />
      ) : viewProperties.length === 0 ? (
        <div>No Records Available</div>
      ) : (
        viewProperties.map((item, index) => {
          return (
            <div className="listing_wrappper row" key={index}>
              <div
                className="col-md-12 row pointer_icon"
                onClick={() => singlePropertyRouting(item._id)}
              >
                <div className="col-md-8">
                  <h6 className="title_text ">{item.rentTitle}</h6>
                  <p className="simple_text ">{truncateDescription(item.rentDescription, 66)}</p>
                </div>
                <div className="col-md-4">
                  <div className="design_text_main">
                    <p className="design_text">BOZZUTO</p>
                    <BsSuitHeart />
                  </div>
                </div>
              </div>
              <div className=" col-md-12 d-flex">
                <div
                  className="img_div col-md-6 pointer_icon"
                  onClick={() => singlePropertyRouting(item._id)}
                >
                  <img
                    src={renderImage(item?.displayImage?.data?.data, item?.displayImage?.fileType)}
                    alt="img"
                  />
                </div>
                <div className="single_property_wrapper col-md-6">
                  <div className="price_wrapper d-flex justify-content-between">
                    <p>{multipleRent(item.rent)}</p>
                    <BsPatchCheckFill className="patch_check_color" />
                  </div>
                  <div className="type_wrapper">
                    <p>Studio - {item.propertyBeds?.length} Beds</p>
                  </div>
                  <div className="description_wrapper">
                    <p>
                      {item.description
                        ? truncateDescription(item.description, 130)
                        : "No Description"}
                    </p>
                  </div>
                  <div className="phone_wrapper">
                    <MdOutlineSendToMobile className="allproperties_mobile_icon" />
                    {/* <p>(123) 434-4324</p> */}
                    <p>{item.user.phoneNo}</p>
                  </div>
                  <div className="email_btn_padding_top">
                    <button
                      className="email_btn"
                      type="button"
                      onClick={() => sendEmailHandler(item.user.email)}
                    >
                      Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}

      <div className="pagination_content">
        {/* {numbers.map((number, index) => (
          <span
            key={index}
            className={`number ${index === activeIndex ? "active__Class" : "inactive__Class"}`}
            onClick={() => handleNumberClick(index)}
          >
            {number}
          </span>
        ))}
      
        <span className="pagination_icon" onClick={handleNextClick}>
          <FiArrowRight />
        </span>{" "}
        */}
        <Paginator
          first={first}
          rows={rows}
          totalRecords={totalRecords}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default PropertiesList;
