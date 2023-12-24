import React, { useEffect, useState } from "react";
import { MdOutlineMyLocation } from "react-icons/md";
import CustomInput from "../../../ui-components/custominput";
import { BsSearch, BsX } from "react-icons/bs";
import FilterMenueSection from "./filtermenuesection";

const FilterBarAllProperty = (props) => {
  const { setFilter, filter, isFilterApply, setIsFilterApply } = props;

  const [showDropdown, setShowDropdown] = useState(false);
  // const [filter, setFilter] = useState({
  //   keyword: "",
  //   rent: [],
  //   propertyBeds: "Any",
  //   propertyBaths: "",
  //   propertyType: [],
  //   amentities: [],
  //   sizeSqft: [],
  //   filterDate: "",
  // });

  // const [isFilterApply, setIsFilterApply] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  useEffect(() => {
    if (showDropdown) {
      // Prevent background scroll when the dropdown is open
      document.body.classList.add("no-scroll");
    } else {
      // Enable background scroll when the dropdown is closed
      document.body.classList.remove("no-scroll");
    }

    // Remove the added class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showDropdown]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="filterbar_div_main"
              style={{ position: "relative", cursor: "pointer" }}
              onClick={toggleDropdown}
            >
              <div className="input_border location_input_searh">
                <MdOutlineMyLocation className="location_search_icon" />
                <CustomInput
                  className="location_search"
                  placeholder="USA"
                  type="text"
                  id="keyword"
                  name="keyword"
                  value={filter?.keyword}
                  disabled={true}
                />
                <BsSearch className="filter_icon" />
              </div>
              <div className="input_border">
                <CustomInput
                  className="filter_bar_price"
                  placeholder="Price"
                  type="text"
                  id="price"
                  name="price"
                  value={filter?.rent}
                  disabled={true}
                />
                {/* <CustomDropdown
                  className="filter_bar_price"
                  id="filter_bar_price"
                  name="filter_bar_price"
                  options={FILTERBAR_PRICE}
                /> */}
              </div>
              <div className="input_border">
                {/* <CustomDropdown
                  className="filter_bar_price"
                  id="filter_bar_price"
                  name="filter_bar_price"
                  options={FILTERBAR_BEDS}
                /> */}
                <CustomInput
                  className="filter_bar_price"
                  placeholder="Beds"
                  type="text"
                  id="propertyBeds"
                  name="propertyBeds"
                  value={filter?.propertyBeds}
                  disabled={true}
                />
              </div>
              <div className="input_border">
                <CustomInput
                  className="filter_bar_price"
                  placeholder="HomeType"
                  type="text"
                  id="propertyType"
                  name="propertyType"
                  value={filter?.propertyType}
                  disabled={true}
                />
                {/* <CustomDropdown
                  className="filter_bar_price"
                  id="filter_bar_price"
                  name="filter_bar_price"
                  options={FILTERBAR_HOMETYPE}
                /> */}
              </div>
              <div className="input_border">
                <CustomInput
                  className="filter_bar_price"
                  placeholder="Move in Date"
                  type="text"
                  id="filterDate"
                  name="filterDate"
                  value={filter?.filterDate}
                  disabled={true}
                />
                {/* <CustomDropdown
                  className="filter_bar_price"
                  id="filter_bar_price"
                  name="filter_bar_price"
                  options={FILTERBAR_MOVEINDATE}
                /> */}
              </div>
              <div className="">
                <button className="filter_button" onClick={toggleDropdown}>
                  {showDropdown ? <BsX className="cross_size" /> : "Filter"}
                </button>
              </div>
              {showDropdown && (
                <div className="your-dropdown-class">
                  <FilterMenueSection
                    setFilter={setFilter}
                    filter={filter}
                    setIsFilterApply={setIsFilterApply}
                    isFilterApply={isFilterApply}
                    setShowDropdown={setShowDropdown}
                    showDropdown={showDropdown}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBarAllProperty;
