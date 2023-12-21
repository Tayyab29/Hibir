import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainViewState, onFormAdvertiseDataChange } from "../../../redux/main-view";

const SelectPackage = (props) => {
  const { setActiveCard } = props;

  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();

  const continueHandler = (type) => {
    dispatch(onFormAdvertiseDataChange({ ...screens.advertise.data, isPackage: type }));
    setActiveCard(1);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {/* <div className="col-md-2"></div> */}
            <div className="col-md-6">
              <h1 className="manage_heaader_text">
                <b>
                  There Are Many Variations<br></br> Of Lorem Ipsum
                </b>
              </h1>
              <p className="manage_heaader_ptext">
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which
                don't look even slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
                text.
              </p>
            </div>
            <div className="col-md-6">
              <div className="manage_header_img">
                <img src="images/packge1.png" alt="Packge img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-overlay-color">
        <div className="container">
          <div className="text-center">
            <div className="Marketing_Package">
              <h1>
                <b>Select Your Marketing Package</b>
              </h1>
              <div className="pckg_text_header">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                  </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="packgr_card">
                <div className="header_display">
                  <div>
                    <h3>
                      <b>Diamond</b>
                    </h3>
                    <p>Starting at</p>
                  </div>
                  <div>
                    <h1>
                      <b>
                        £820/<small className="euro_div">month</small>
                      </b>
                    </h1>
                  </div>
                </div>
                <hr></hr>

                {/* body section */}

                <div className="pt-3">
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which don't look even slightly believable.
                  </p>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore
                    </li>
                  </ul>
                </div>
                <hr></hr>
                <div className="continuebutton_div">
                  <button
                    className="continue_btn"
                    type="button"
                    onClick={() => continueHandler("diamond")}
                  >
                    Continue
                  </button>
                </div>

                {/* body section */}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="packgr_card">
                <div className="header_display">
                  <div>
                    <h3>
                      <b>Platinum</b>
                    </h3>
                    <p>Starting at</p>
                  </div>
                  <div>
                    <h1>
                      <b>
                        £420/<small className="euro_div">month</small>
                      </b>
                    </h1>
                  </div>
                </div>
                <hr></hr>

                {/* body section */}

                <div className="pt-3">
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which don't look even slightly believable.
                  </p>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore
                    </li>
                  </ul>
                </div>
                <hr></hr>
                <div className="continuebutton_div">
                  <button
                    className="continue_btn"
                    type="button"
                    onClick={() => continueHandler("platinum")}
                  >
                    Continue
                  </button>
                </div>

                {/* body section */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectPackage;
