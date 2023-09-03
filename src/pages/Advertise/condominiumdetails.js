import React from "react";
import { BsChevronRight } from "react-icons/bs";
import Footer from "../../components/Footer/footer";
import MapComponent from "./advertisecomponents/condominiumcomponents/mapcomponent";
import UnitComponent from "./advertisecomponents/condominiumcomponents/unitcomponent";
import GeneralPropertyInfo from "./advertisecomponents/condominiumcomponents/generalpropertyinfo";
import DescriptionGeneral from "./advertisecomponents/condominiumcomponents/descriptiongeneral";
import RecentSpecial from "./advertisecomponents/condominiumcomponents/recentspecial";
import UtilitiesIncluded from "./advertisecomponents/condominiumcomponents/utilitiesincluded";
import PropertyEmenities from "./advertisecomponents/condominiumcomponents/propertyemenities";
import ContactInfo from "./advertisecomponents/condominiumcomponents/contactinfo";

const CondominiumDetails = () => {
  return (
    <>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <h3>
                <b>Condominium Details</b>
              </h3>
            </div>
            <div className="col-md-4 col-12">
              <div className="save_publish">
                <button className="condominium_save" type="button">
                  Save
                </button>
                <button className="condominium_publish" type="button">
                  Publish
                </button>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </section>
      <section className="pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <p className="condominum_p_text">
                <b>There Are Many Variations of-Lorem Ipsum, QC H1PZ4</b>
              </p>
            </div>
            <div className="col-md-4 col-12">
              <div className="props_view_all">
                <button className="View_all_props" type="button">
                  View All Property <BsChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3">
        <MapComponent />
      </section>
      <section className="pt-3">
        <UnitComponent />
      </section>
      <section className="pt-3">
        <GeneralPropertyInfo />
      </section>
      <section className="pt-3">
        <DescriptionGeneral />
      </section>
      <section className="pt-3">
        <RecentSpecial />
      </section>
      <section className="pt-3">
        <UtilitiesIncluded />
      </section>
      <section className="pt-3">
        <PropertyEmenities />
      </section>
      <section className="pt-3">
        <ContactInfo />
      </section>
      <section className="pt-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="checkbox_hide_bottom">
                <input type="checkbox" />
                <span>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12"></div>
            <div className="col-md-4 col-12">
              <div className="save_publish">
                <button className="condominium_save" type="button">
                  Save
                </button>
                <button className="condominium_publish" type="button">
                  Publish
                </button>
              </div>
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

export default CondominiumDetails;
