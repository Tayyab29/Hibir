import React, { useContext, useEffect, useState } from "react";
// import icon from "../../../images/propertyicon.png";
import { data } from "./propertData";
import { useHistory } from "react-router-dom";
import { fetchCustomerAdvertisement } from "../../../services/advertise";
import { ToastContext } from "../../../context/toast";
import { renderImage } from "../../../utils/HelperFunction/imagePreview";
import { truncateDescription } from "../../../utils/HelperFunction/descriptionText";
import { loginState } from "../../../redux/login";
import { useSelector } from "react-redux";
import CustomLoader from "../../../ui-components/customloader";

const Property = () => {
  const history = useHistory();

  //Redux
  const { user } = useSelector(loginState);

  // Context
  const toast = useContext(ToastContext);

  const [viewProperties, setViewProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAdvertisementCustomer = async () => {
    try {
      const payload = {
        userId: user ? user._id : "",
      };
      const { data } = await fetchCustomerAdvertisement(payload);
      if (data.status) {
        setViewProperties(data.properties);
        setIsLoading(false);
      }
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
      setIsLoading(false);
      toast.showMessage(
        "Error",
        "Sorry, we are unable to process your request at this time.",
        "error"
      );
    }
  };

  useEffect(() => {
    getAdvertisementCustomer();
  }, [user]);

  return (
    <>
      <div className="text-center">
        <h2>
          <b>Lorem ipsum dolor adipiscing</b>
        </h2>
      </div>
      <div className="container">
        <div className="row pt-5">
          {viewProperties.length === 0 ? (
            isLoading ? (
              <CustomLoader height={"50vh"} />
            ) : (
              <div className="no_record_dashboard">No Record Available</div>
            )
          ) : (
            viewProperties.map((item, index) => {
              return (
                <div className="col-md-3 col-12 home_property_mbl" key={index}>
                  <div className="img_div">
                    <img
                      src={renderImage(
                        item?.displayImage?.data?.data,
                        item?.displayImage?.fileType
                      )}
                      alt="img"
                    />
                  </div>
                  <div className="img_heading">
                    <h4>
                      <b>{item.rentTitle}</b>
                    </h4>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="img_plain_text">
                      {item.description
                        ? truncateDescription(item.description, 70)
                        : "No Description"}
                    </p>
                    <img src="images/propertyicon.png" alt="propertimg" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="view_more_div">
          {viewProperties.length !== 0 && (
            <button
              className="search_btn"
              type="button"
              onClick={() => history.push("/allproperties")}
            >
              View More
            </button>
          )}
        </div>
        <div className="mt-5">
          <hr />
        </div>
      </div>
    </>
  );
};

export default Property;
