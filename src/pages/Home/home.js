import React, { useState } from "react";
import Property from "./homecomponents/propert";
import AboutUs from "./homecomponents/aboutUs";
import GooglePlay from "./homecomponents/playStore";
import Footer from "../../components/Footer/footer";
import CustomDropdown from "../../ui-components/customdropdown";

//useHistory
import { useHistory } from "react-router-dom";

// Constants
import { PROPERTY_TYPE } from "../../utils/Constants/global";

// Styles
import "./home.css";

const Home = () => {
  const history = useHistory();

  const [searchOption, setSearchOption] = useState({
    propertyType: [],
    keyword: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "propertyType") {
      setSearchOption({
        ...searchOption,
        propertyType: [value],
      });
    } else {
      setSearchOption({
        ...searchOption,
        keyword: value,
      });
    }
  };

  const handleSearch = () => {
    // Use history.push to navigate to "/allproperties" with state
    history.push({
      pathname: "/allproperties",
      state: {
        searchOption: { propertyType: searchOption.propertyType, keyword: searchOption.keyword },
      },
    });
  };

  return (
    <>
      <section>
        <div className="overlay_img"></div>
        <div className="container-fluid">
          <div className="pos_absolute">
            {/* <div className="text_overlay"> 
              <h1>
                There Are Many Variations <br></br> Of Lorem Ipsum
              </h1>
            </div>
            <h1>Google Maps Autocomplete Example</h1>
            <AutocompleteComponent apiKey={process.env.REACT_APP_GOOGLE_API_KEY} /> */}
            <div className="wdth_55">
              <div className="flex_div">
                <CustomDropdown
                  className="select_style"
                  id="propertyType"
                  name="propertyType"
                  onChange={inputHandler}
                  options={PROPERTY_TYPE}
                />
                <input
                  type="text"
                  id="keyword"
                  name="keyword"
                  className="input_style"
                  placeholder="Enter A Location"
                  onChange={inputHandler}
                />
                <button className="search_btn" onClick={() => handleSearch()}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-3">
        <Property />
      </section>
      <section className="pt-3 pb-3">
        <AboutUs />
      </section>
      <section className="pt-5 pb-3 mob_pos">
        <GooglePlay />
      </section>
      <footer className="pt-5">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
