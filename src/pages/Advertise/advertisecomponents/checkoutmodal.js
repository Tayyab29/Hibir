import React from "react";
import { BsCheck } from "react-icons/bs";
import Footer from "../../../components/Footer/footer";
import { useHistory } from "react-router-dom"; // version 5.2.0

const CheckoutModal = () => {
  const history = useHistory();
  return (
    <>
      <section className="section_padding_top">
        <div className="container">
          <div className="checkout_modal_font">
            <span className="svg_size">
              <BsCheck />
            </span>
          </div>
        </div>
      </section>
      <section className="pt-3 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-12 col-md-6">
              <div className="add_prop_button">
                <button
                  className="addprop_btn"
                  type="button"
                  onClick={() => history.push("./manageproperty")}
                >
                  Manage Property
                </button>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
      <section>
        <Footer display="none" marginTop="0rem" />
      </section>
    </>
  );
};

export default CheckoutModal;
