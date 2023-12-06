import React from "react";
import PropertiesList from "./PropertiesList";
import Footer from "../../components/Footer/footer";

import "./allproperties.scss";
import FilterBarAllProperty from "./FilterBarAllProperty";

const AllProperties = () => {
  return (
    <>
      <div className="main_container">
        <div className="filer_bar_wrapper"><FilterBarAllProperty/></div>
        <hr />
        <div className="col-12 col-md-12 d-flex">
          <div className="col-md-7">Google Maps</div>
          <div className="col-md-5">
            <PropertiesList />
          </div>
        </div>
      </div>
      <footer>
        <Footer display="none" marginTop="0rem" />
      </footer>
    </>
  );
};

export default AllProperties;
