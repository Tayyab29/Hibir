import React, { useState } from "react";
import AddProperty from "./advertisecomponents/addproperty";
import SelectPackage from "./advertisecomponents/selectpackage";
import CheckOut from "./advertisecomponents/checkout";
import "./advertise.css";
import Footer from "../../components/Footer/footer";

const Advertise = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  const renderCardComponent = () => {
    if (activeCard === 0) {
      return <SelectPackage setActiveCard={setActiveCard} />;
    } else if (activeCard === 1) {
      return <AddProperty />;
    } else if (activeCard === 2) {
      return <CheckOut />;
    }
    return null;
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row mt-5 mb-3">
            <div
              className={`col-md-4 col-12 ${activeCard === 0 ? "active_card" : "noactive_card"}`}
              onClick={() => handleCardClick(0)}
            >
              <div className="text-center">
                <span className={activeCard === 0 ? "count_bg" : "nocount_bg"}>1</span>
                <b> Select Package</b>
              </div>
            </div>
            <div
              className={`col-md-4 col-12 ${activeCard === 1 ? "active_card" : "noactive_card"}`}
              onClick={() => handleCardClick(1)}
            >
              <div className="text-center">
                <span className={activeCard === 1 ? "count_bg" : "nocount_bg"}>2</span>
                <b> Add Your Property</b>
              </div>
            </div>
            <div
              className={`col-md-4 col-12 ${activeCard === 2 ? "active_card" : "noactive_card"}`}
              onClick={() => handleCardClick(2)}
            >
              <div className="text-center">
                <span className={activeCard === 2 ? "count_bg" : "nocount_bg"}>3</span>
                <b> Checkout</b>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">{renderCardComponent()}</div>
          </div>
        </div>
      </section>

      <section>
        <Footer display="none" marginTop="0rem" />
      </section>
    </>
  );
};

export default Advertise;
