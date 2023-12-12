import React from "react";
import Footer from "../../../components/Footer/footer";
import { BsClock } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import "../allproperties.scss";

const SingleProperty = () => {
  return (
    <>

      <section className="single_property_view">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h2><b>Your Property Title Goes Here</b> </h2>
              <p><span className="brdr_text_one">4834 N 10th St, Philadelphia, PA 19141</span><span className="brdr_text_two"> For Sale</span> <span className="brdr_text_three"><BsClock style={{ fontSize: "18px" }} />  1 Year Ago</span></p>
              <p className="single_social_suit">
                <span><BiBed /> 3 Bed</span>
                <span><BiBath />4 Bath</span>
                <span><BsBoxArrowInUpRight />1200 Sqft</span>
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="custom_margin_div">
                <span className="doc_brdr">
                  <GrDocumentText />
                </span>
                <span className="doc_brdr">
                  <BsShare />
                </span>
                <span className="doc_brdr">
                  <FaRegHeart />
                </span>
              </div>
              <div className="right_single_property_text">
                <h2><b>$958,000</b></h2>
                <span>$ 2,300/Sq Ft</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* image Section */}
      <section className="image_section">
        <div className="container">
          <div class="row">
            <div class="col-md-5 pr-0">
              <img className="grid_5_img" src="images/propset1.png" />
            </div>
            <div class="col-md-7">
              <div className="row p-0">
                <div className="col-md-6 p-0">
                  <img src="images/propset1.png" style={{ marginBottom: "0.5rem", paddingRight: "0.71rem" }} />
                </div>
                <div className="col-md-6 p-0">
                  <img src="images/propset1.png" style={{ marginBottom: "0.5rem", paddingRight: "0.71rem" }} />
                </div>
                <div className="col-md-6 p-0">
                  <img src="images/propset1.png" style={{ marginBottom: "0.5rem", paddingRight: "0.71rem" }} />
                </div>
                <div className="col-md-6 p-0">
                  <img src="images/propset1.png" style={{ marginBottom: "0.5rem", paddingRight: "0.71rem" }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section >

      {/*  */}
      <section className="single_property_overview">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="overview_card">
                <h5><b>Overview</b></h5>
                <div className="row">
                  <div className="col-md-4">
                    <div className="data_inner_section">
                      <div class="overview_icon_div">
                        <span className="overview_icon">
                          <BiBed />
                        </span>
                      </div>
                      <div>
                        <p className="overview_text"><b>Bedroom</b></p>
                        <p className="overview_text"><b>4</b></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="data_inner_section">
                      <div class="overview_icon_div">
                        <span className="overview_icon">
                          <BiBath />
                        </span>
                      </div>
                      <div>
                        <p className="overview_text"><b>Bath</b></p>
                        <p className="overview_text"><b>4</b></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="data_inner_section">
                      <div class="overview_icon_div">
                        <span className="overview_icon">
                          <LuCalendarDays />

                        </span>
                      </div>
                      <div>
                        <p className="overview_text"><b>Year Built</b></p>
                        <p className="overview_text"><b>2022</b></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="data_inner_section">
                      <div class="overview_icon_div">
                        <span className="overview_icon">
                          <IoCarSportOutline />

                        </span>
                      </div>
                      <div>
                        <p className="overview_text"><b>Parking</b></p>
                        <p className="overview_text"><b>2</b></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="data_inner_section">
                      <div class="overview_icon_div">
                        <span className="overview_icon">
                          <BsBoxArrowInUpRight />

                        </span>
                      </div>
                      <div>
                        <p className="overview_text"><b>Sqft</b></p>
                        <p className="overview_text"><b>1200</b></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="data_inner_section">
                      <div class="overview_icon_div">
                        <span className="overview_icon">
                          <MdOutlineMapsHomeWork />


                        </span>
                      </div>
                      <div>
                        <p className="overview_text"><b>Property Type</b></p>
                        <p className="overview_text"><b>Appartment</b></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Property Description */}
              <div className="overview_card mt-3">
                <h5><b>Property Description</b></h5>
                <div className="row">
                  <div className="col-md-12">
                    <div className="description_text">
                      <p>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable.
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                        anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                        to generate Lorem Ipsum which looks reasonable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Footer display="none" marginTop="0rem" />
      </footer>
    </>
  );
};

export default SingleProperty;
