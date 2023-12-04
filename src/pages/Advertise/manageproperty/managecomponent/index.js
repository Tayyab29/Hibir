import React, { useContext, useEffect, useState } from "react";
//Json Data
import { data } from "./propertysetdata";
//useHistory
import { useHistory } from "react-router-dom";
import { fetchAdvertisement } from "../../../../services/advertise";
import { useSelector } from "react-redux";
import { loginState } from "../../../../redux/login";
import { ToastContext } from "../../../../context/toast";

const PropertySet = (props) => {
  const { seTotalRecords, keyword, propertyType, isSearchProperty, currentPath } = props;
  const history = useHistory();
  const { user } = useSelector(loginState);

  // Context
  const toast = useContext(ToastContext);

  const [propertiees, setProperties] = useState([]);
  const [imageSrc, setImageSrc] = useState("");

  const getAdvertisement = async () => {
    try {
      let payload = {
        userId: user?._id,
      };
      if (propertyType) {
        payload["propertyType"] = propertyType;
      }
      if (keyword) {
        payload["searchQuery"] = keyword;
      }
      if (currentPath === "/savedproperties") {
        payload["isSaved"] = true;
      }
      const res = await fetchAdvertisement(payload);
      if (res.data.status) {
        toast.showMessage("Success", "Advertisement got fetched successfully", "success");
        setProperties(res.data.properties);
        seTotalRecords(res.data?.properties?.length);
      } else {
        setProperties([]);
        seTotalRecords(0);
        toast.showMessage("Error", "Sorry, Advertisement could not be fetched.", "error");
      }
    } catch (error) {
      toast.showMessage(
        "Error",
        "Sorry, we are unable to process your request at this time.",
        "error"
      );
    }
  };

  useEffect(() => {
    if (user?._id) {
      getAdvertisement();
    }
  }, [user?._id, isSearchProperty]);

  // useEffect(() => {
  //   if (keyword != null) {
  //     const delayDebounceFn = setTimeout(() => {
  //       // if (currentPage != 1) {
  //       //     setCurrentPage(1);
  //       //     setPage(1);
  //       // } else {
  //       getAdvertisement();
  //       // }
  //     }, 350);

  //     return () => clearTimeout(delayDebounceFn);
  //   }
  // }, [keyword]);

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const length = bytes.byteLength;
    for (let i = 0; i < length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };
  const renderImage = (data, fileType) => {
    const base64String = arrayBufferToBase64(data);

    return `data:${fileType};base64,${base64String}`;
  };

  return (
    <>
      <div className="container">
        <div className="row pt-3">
          {propertiees.map((item, index) => {
            return (
              <div className="col-md-4 col-12 mb-3" key={index}>
                <div className="border_grid">
                  <div className="img_div">
                    <img
                      src={renderImage(
                        item?.displayImage?.data?.data,
                        item?.displayImage?.fileType
                      )}
                      alt="No Image"
                    />
                  </div>
                  <div className="pd_left_right">
                    <div className="img_heading">
                      <h5>
                        <b>{item.propertyAdress}</b>
                      </h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="propset_unit">{item.propertyBaths.length} Unit</p>
                      <button
                        className="manage_unit_text_button"
                        type="button"
                        data
                        onClick={() => {
                          // history.push("./condominiumdetails");
                          history.push(`/condominiumdetails?id=${item._id}`);
                        }}
                      >
                        Manage Unit
                      </button>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* <p className="propset_unit">{item.unit} Unit</p> */}
                      {/* <button className="manage_unit_text_button" type="button">
                        Reactivate
                      </button> */}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="propset_ptext">{item.description}</p>
                    </div>
                    <div className="cancel_property_detail">
                      <button className="cancel_property">Cancel Property</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* {data.map((item, index) => {
            return (
              <div className="col-md-4 col-12 mb-3">
                <div className="border_grid" key={index}>
                  <div className="img_div">
                    <img src="images/propset2.png" alt="img" />
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
                      {/* <p className="propset_unit">{item.unit} Unit</p> 
                      {/* <button className="manage_unit_text_button" type="button">
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
          })} */}
        </div>
      </div>
    </>
  );
};

export default PropertySet;
