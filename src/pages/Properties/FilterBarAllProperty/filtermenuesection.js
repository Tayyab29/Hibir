import React, { useEffect, useState } from "react";
import CustomInput from "../../../ui-components/custominput";
import InputRange from "react-input-range";
import { loginState } from "../../../redux/login";
import { useSelector } from "react-redux";
import { ADVERTISE_EMENTITIES, FILTER_PROPERTY_TYPE } from "../../../utils/Constants/global";
import { useQuery } from "../../../utils/HelperFunction/useQuery";
import { useLocation } from "react-router-dom";

const BedroomsData = ["Any", "Studio", "1+", "2+", "3+"];
const BathroomsData = ["1+", "2+", "3+"];

const FilterMenueSection = (props) => {
  const { setFilter, filter, isFilterApply, setIsFilterApply, showDropdown, setShowDropdown } =
    props;

  let query = useQuery();
  let type = query.get("type");

  const location = useLocation();

  const [rangeValues, setRangeValues] = useState({ min: 0, max: 1000000 });
  const [rangeSizeSqft, setRangeSizeSqft] = useState({ min: 0, max: 1000000 });

  const [localFilter, setLocalFilter] = useState({
    keyword: "",
    rent: [],
    propertyBeds: "",
    propertyBaths: "",
    propertyType: type ? [type] : [],
    amentities: [],
    sizeSqft: [],
    filterDate: "",
  });
  const [isDateInputVisible, setDateInputVisible] = useState(false);

  //Redux
  const { user } = useSelector(loginState);

  const handleDateClick = () => {
    // Toggle the visibility of the date input
    setDateInputVisible(!isDateInputVisible);
  };
  const handleRangeChange = (values) => {
    setRangeValues(values);
  };

  const handleRangeChangeSizeSqft = (value, name) => {
    setRangeSizeSqft(value);
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    if (name === "min" && value >= rangeValues.max) {
      const minValue = parseInt(rangeValues.min);
      setRangeValues({ ...rangeValues, [name]: minValue });
      return;
    }
    const minValue = parseInt(value);
    setRangeValues({ ...rangeValues, [name]: minValue });
  };
  const inputChangeSizeSqft = (e) => {
    const { name, value } = e.target;
    if (name === "min" && value >= rangeSizeSqft.max) {
      const minValue = parseInt(rangeSizeSqft.min);
      setRangeSizeSqft({ ...rangeSizeSqft, [name]: minValue });
      return;
    }
    const minValue = parseInt(value);
    setRangeSizeSqft({ ...rangeSizeSqft, [name]: minValue });
  };

  const handleButtonClick = (value, name) => {
    setLocalFilter({
      ...localFilter,
      [name]: value,
    });
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLocalFilter({
      ...localFilter,
      [name]: value,
    });
  };

  const handleCheckboxChange = (id) => {
    const selectedIds = [...localFilter.amentities];
    const itemIndex = selectedIds.findIndex((item) => item === id);
    if (itemIndex === -1) {
      const temp = [...localFilter.amentities];
      temp.push(id);
      setLocalFilter({
        ...localFilter,
        amentities: temp,
      });
    } else {
      const temp = [...selectedIds];
      temp.splice(itemIndex, 1);
      setLocalFilter({
        ...localFilter,
        amentities: temp,
      });
    }
  };

  const handleCheckboxChangeProperty = (id) => {
    const selectedIds = [...localFilter.propertyType];
    const itemIndex = selectedIds.findIndex((item) => item === id);
    if (itemIndex === -1) {
      const temp = [...localFilter.propertyType];
      temp.push(id);
      setLocalFilter({
        ...localFilter,
        propertyType: temp,
      });
    } else {
      const temp = [...selectedIds];
      temp.splice(itemIndex, 1);
      setLocalFilter({
        ...localFilter,
        propertyType: temp,
      });
    }
  };

  const cancelFilterHandler = () => {
    setFilter({
      keyword: "",
      rent: [],
      propertyBeds: "",
      propertyBaths: "",
      propertyType: [],
      amentities: [],
      sizeSqft: [],
      filterDate: "",
    });
    setLocalFilter({
      keyword: "",
      rent: [],
      propertyBeds: "",
      propertyBaths: "",
      propertyType: [],
      amentities: [],
      sizeSqft: [],
      filterDate: "",
    });
    setRangeValues({ min: 0, max: 1000000 });
    setRangeSizeSqft({ min: 0, max: 100000 });
    setIsFilterApply(!isFilterApply);
    setShowDropdown(!showDropdown);
  };

  const applyFilterHandler = () => {
    setIsFilterApply(!isFilterApply);
    const _rent = [rangeValues.min.toString(), rangeValues.max.toString()];
    const _size = [rangeSizeSqft.min.toString(), rangeSizeSqft.max.toString()];
    setFilter({
      ...localFilter,
      rent: _rent,
      sizeSqft: _size,
    });
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const state = location?.state || {};
    const searchOption = state?.searchOption;
    if (searchOption) {
      setLocalFilter({
        ...localFilter,
        propertyType: searchOption.propertyType,
        keyword: searchOption.keyword,
      });
    }
  }, [location?.state]);

  return (
    <>
      {/* section 1 */}
      <div className="custom_width_100">
        <div className="custom_width_50">
          <div className="filter_main_div">
            <p>
              <b>Monthly Rent</b>
            </p>
            <div className="input-range">
              <CustomInput
                className="filter_menu_input"
                type="number"
                id="min"
                name="min"
                placeholder="Min Rate"
                value={rangeValues.min ?? 0}
                onChange={inputChange}
              />
              <div className="to_lbl">To</div>
              <CustomInput
                className="filter_menu_input"
                type="number"
                id="max"
                name="max"
                placeholder="Max Rate"
                value={rangeValues.max}
                onChange={inputChange}
              />
              <InputRange
                minValue={0}
                maxValue={rangeValues.max}
                value={{ min: isNaN(rangeValues.min) ? 0 : rangeValues.min, max: rangeValues.max }}
                onChange={handleRangeChange}
              />
            </div>
          </div>
        </div>
        <div className="custom_width_50">
          <div className="filter_main_div">
            <p>
              <b>Bedrooms</b>
            </p>
            <div>
              {BedroomsData.map((item, index) => (
                <button
                  key={index}
                  className={item === localFilter.propertyBeds ? "activeButton" : "inactiveButton"}
                  onClick={() => handleButtonClick(item, "propertyBeds")}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="filter_main_div">
            <p>
              <b>Bathrooms</b>
            </p>
            <div>
              {BathroomsData.map((item, index) => (
                <button
                  key={index}
                  className={
                    item === localFilter?.propertyBaths ? "activeButton" : "inactiveButton"
                  }
                  onClick={() => handleButtonClick(item, "propertyBaths")}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      {/* Section 2 */}
      <div className="custom_width_100">
        <div className="homeType_width_50">
          <div className="filter_main_div">
            <p>
              <b>Home Types</b>
            </p>
            {FILTER_PROPERTY_TYPE.map((item, index) => (
              <>
                <div key={index} className="homeTypes_main">
                  <p>
                    <b>
                      {/* {item.name} ({item.count}) */}
                      {item.label}
                    </b>
                  </p>
                  <input
                    className="home_type_checkbox home_type_checkbox_property"
                    type="checkbox"
                    id={"propertyType"}
                    name={"propertyType"}
                    disabled={type ? true : false}
                    checked={localFilter.propertyType.includes(item.value)}
                    onChange={() => handleCheckboxChangeProperty(item.value)}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="homeType_width_50">
          <div className="filter_main_div">
            <p>
              <b>Amenities</b>
            </p>
            <div className="amenities_scroll">
              {ADVERTISE_EMENTITIES.map((item, index) => (
                <div key={index}>
                  <div className="homeTypes_main">
                    <p>
                      <b>
                        {item.label}
                        {/* {item.name} ({item.count}) */}
                      </b>
                    </p>

                    {}
                    <input
                      className="home_type_checkbox home_type_checkbox_property"
                      type="checkbox"
                      id={"amentities"}
                      name={"amentities"}
                      checked={localFilter.amentities.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      {/* Section 3 */}
      <div className="custom_width_100">
        <div className="custom_width_50">
          <div className="filter_main_div">
            <p>
              <b>Keywords</b>
            </p>
            <CustomInput
              type="text"
              placeholder="(i.e. fireplace,carpet,etc)"
              id="keyword"
              name="keyword"
              className="keywords_input"
              value={localFilter.keyword}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className="custom_width_50">
          <div className="filter_main_div">
            <p>
              <b>Square Footage Range</b>
            </p>
            <div className="input-range">
              <CustomInput
                className="filter_menu_input"
                type="number"
                id="min"
                name="min"
                placeholder="Min Rate"
                value={rangeSizeSqft.min}
                onChange={inputChangeSizeSqft}
              />
              <div className="to_lbl">To</div>
              <CustomInput
                className="filter_menu_input"
                type="number"
                id="max"
                name="max"
                placeholder="Max Rate"
                value={rangeSizeSqft.max}
                onChange={inputChangeSizeSqft}
              />
              <InputRange
                minValue={0}
                maxValue={rangeSizeSqft.max}
                value={{
                  min: isNaN(rangeSizeSqft.min) ? 0 : rangeSizeSqft.min,
                  max: rangeSizeSqft.max,
                }}
                onChange={handleRangeChangeSizeSqft}
              />
            </div>
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      {/* Section 4 */}
      <div className="custom_width_100">
        <div className="custom_width_50_profileimg">
          <div className="">
            <div className="profile_image">
              <img src="images/propset1.png" alt="Avatar" />
              <span>
                <b>{(user?.firstName ?? "") + " " + (user?.lastName ?? "")}</b>
              </span>
            </div>
          </div>
        </div>
        <div className="custom_width_50_profileimg">
          <div className="profileimg_section_date">
            <label>
              <b>Move in Date</b>
            </label>
            <div>
              <button onClick={handleDateClick} className="date_btn">
                Select A Date
              </button>
              {isDateInputVisible && <input type="date" style={{ display: "none" }} />}
            </div>
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
      {/* Button Section */}
      <div className="custom_width_100 filter_main_button">
        <button className="clearFilterbtn" type="button" onClick={cancelFilterHandler}>
          Clear Filter
        </button>
        <button className="applyFilterbtn" type="button" onClick={applyFilterHandler}>
          Apply Filter
        </button>
      </div>
    </>
  );
};

export default FilterMenueSection;
