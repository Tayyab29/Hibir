import React from "react";
import PropertySet from "./managecomponent";
import Footer from "../../../components/Footer/footer";
//useHistory
import { useHistory } from "react-router-dom";

const ManagePropertyIndex = () => {
  const history = useHistory();

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
              <select className="manage_input">
                <option value="0">Property Name</option>
                <option value="1">A Property</option>
                <option value="2">B Property</option>
              </select>
            </div>
            <div className="col-md-6 col-12">
              <input className="manage_input" placeholder="Search Here" type="text" />
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
                <button className="manage_searchbtn" type="button">
                  Search
                </button>
              </div>
            </div>
            <div className="col-md-1 col-12">
              <div className="">
                <button className="manage_clear_filter" type="button">
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
              <h5>Showing 6 Properties</h5>
            </div>
            <div className="col-12 pt-3 mb-3">
              <PropertySet />
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
