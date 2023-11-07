import React, { useState } from "react";
import PropertySet from "./managecomponent";
import Footer from "../../../components/Footer/footer";
//useHistory
import { useHistory, useLocation } from "react-router-dom";
import { ADVERTISE_PROPERTY_TYPE } from "../../../utils/Constants/global";
import CustomDropdown from "../../../ui-components/customdropdown";

const ManagePropertyIndex = () => {
  const location = useLocation();

  // Access the current pathname from the location object
  const currentPath = location.pathname;
  const history = useHistory();

  const [totalRecords, seTotalRecords] = useState(0);
  const [keyword, setKeyword] = useState(null);
  const [propertyType, setPropertyType] = useState("");
  const [isSearchProperty, setIsSearchProperty] = useState(false);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "propertyType") {
      setPropertyType(value);
    } else {
      setKeyword(value);
    }
  };

  const clearFilters = () => {
    setKeyword("");
    setPropertyType("");
    setIsSearchProperty(!isSearchProperty);
  };

  return (
    <>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <h3>
                <b>Properties</b>
              </h3>
            </div>
            <div className="col-md-4 col-12">
              <div className="save_publish">
                <button
                  className="condominium_publish"
                  type="button"
                  onClick={() => {
                    history.push("./advertise");
                  }}
                >
                  Add A Property
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3">
        <div className="container manage_container_bg">
          <div className="row">
            <div className="col-md-2 col-12">
              <CustomDropdown
                className="manage_input"
                id="propertyType"
                name="propertyType"
                value={propertyType}
                onChange={inputHandler}
                options={ADVERTISE_PROPERTY_TYPE}
              />
            </div>
            <div className="col-md-6 col-12">
              <input
                className="manage_input"
                placeholder="Search Here"
                id="keyword"
                name="keyword"
                type="text"
                value={keyword}
                onChange={inputHandler}
              />
            </div>
            <div className="col-md-2 col-12">
              <select className="manage_input">
                <option value="0">Property Name</option>
                <option value="1">A Property</option>
                <option value="2">B Property</option>
              </select>
            </div>
            <div className="col-md-1 col-12">
              <div className="">
                <button
                  className="manage_searchbtn"
                  type="button"
                  onClick={() => setIsSearchProperty(!isSearchProperty)}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="col-md-1 col-12">
              <div className="">
                <button
                  className="manage_clear_filter"
                  type="button"
                  onClick={() => clearFilters()}
                >
                  Clear Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Showing {totalRecords} Properties</h5>
            </div>
            <div className="col-12 pt-3 mb-3">
              <PropertySet
                seTotalRecords={seTotalRecords}
                keyword={keyword}
                propertyType={propertyType}
                isSearchProperty={isSearchProperty}
                currentPath={currentPath}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer display="none" marginTop="0rem" />
      </section>
    </>
  );
};

export default ManagePropertyIndex;
