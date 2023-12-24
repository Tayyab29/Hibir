import React, { useContext, useEffect, useState } from "react";

// Components
import PropertiesList from "./PropertiesList";
import Footer from "../../components/Footer/footer";
import FilterBarAllProperty from "./FilterBarAllProperty";

// Style
import "./allproperties.scss";
import { ToastContext } from "../../context/toast";
import { fetchCustomerAdvertisement } from "../../services/advertise";
import { useSelector } from "react-redux";
import { loginState } from "../../redux/login";
import { useQuery } from "../../utils/HelperFunction/useQuery";
import { useLocation } from "react-router-dom";

const AllProperties = (props) => {
  let query = useQuery();
  let type = query.get("type");

  const location = useLocation();

  //Redux
  const { user } = useSelector(loginState);
  // Context
  const toast = useContext(ToastContext);

  const [viewProperties, setViewProperties] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [first, setFirst] = useState(0);

  const [filter, setFilter] = useState({
    keyword: "",
    rent: [],
    propertyBeds: "",
    propertyBaths: "",
    propertyType: [],
    amentities: [],
    sizeSqft: [],
    filterDate: "",
  });

  const [isFilterApply, setIsFilterApply] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const getAdvertisementCustomer = async () => {
    setIsLoading(true);
    try {
      let payload = {
        skip: first,
        take: 4,
        userId: user?._id,
      };
      // Search BAR
      const state = location?.state || {};
      const searchOption = state?.searchOption;
      if (searchOption) {
        payload["propertyType"] = searchOption.propertyType;
        payload["searchQuery"] = searchOption.keyword;
      }

      // const payload = {
      //   skip: first,
      //   take: 4,
      //   userId: user?._id,
      // };
      if (filter.keyword) {
        payload["searchQuery"] = filter.keyword;
      }
      if (filter.propertyBeds) {
        payload["propertyBeds"] = filter.propertyBeds;
      }
      if (filter.propertyBaths) {
        payload["propertyBaths"] = filter.propertyBaths;
      }
      if (filter.filterDate) {
        payload["filterDate"] = filter.filterDate;
      }
      if (filter.rent.length > 0) {
        payload["rent"] = filter.rent;
      }
      if (filter.propertyType.length > 0 || type) {
        payload["propertyType"] = type ? [type] : filter.propertyType;
      }
      if (filter.amentities.length > 0) {
        payload["amentities"] = filter.amentities;
      }
      if (filter.sizeSqft.length > 0) {
        payload["sizeSqft"] = filter.sizeSqft;
      }
      const { data } = await fetchCustomerAdvertisement(payload);

      if (data.status) {
        setViewProperties(data.properties);
        setTotalRecords(data.total);
      }
      setIsLoading(false);
    } catch (error) {
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
  }, [first, isFilterApply]);

  useEffect(() => {
    if (type) {
      setFilter({
        ...filter,
        propertyType: [type],
      });
    }
  }, [type]);

  useEffect(() => {
    const state = location?.state || {};
    const searchOption = state?.searchOption;
    if (searchOption) {
      setFilter({
        ...filter,
        propertyType: searchOption.propertyType,
        keyword: searchOption.keyword,
      });
    }
  }, [location?.state]);

  return (
    <>
      <div className="main_container container-fluid">
        <div className="filer_bar_wrapper">
          <FilterBarAllProperty
            setFilter={setFilter}
            filter={filter}
            setIsFilterApply={setIsFilterApply}
            isFilterApply={isFilterApply}
          />
        </div>
        <hr />
        <div className="row">
          {/* <div className="col-12 col-md-12 d-flex"> */}
          <div className="col-md-7">Google Maps</div>
          <div className="col-md-5">
            <PropertiesList
              totalRecords={totalRecords}
              viewProperties={viewProperties}
              first={first}
              setFirst={setFirst}
              isLoading={isLoading}
            />
          </div>
          {/* </div> */}
        </div>
      </div>
      <footer>
        <Footer display="none" marginTop="0rem" />
      </footer>
    </>
  );
};

export default AllProperties;
