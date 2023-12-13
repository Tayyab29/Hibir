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
import { data } from "../../Home/homecomponents/propertData";
import CustomInput from "../../../ui-components/custominput";

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
              {/* Property Description */}
              <div className="overview_card mt-3">
                <h5><b>Property Details</b></h5>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Property ID</b></p>
                      <p className="text_two">RT48</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Garage</b></p>
                      <p className="text_two">2</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Price</b></p>
                      <p className="text_two">$252,000</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Garage Size</b></p>
                      <p className="text_two">200 Sqft</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Property Size</b></p>
                      <p className="text_two">1500 Sqft</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Year Built</b></p>
                      <p className="text_two">2022</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Bathrooms</b></p>
                      <p className="text_two">2</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Property Type</b></p>
                      <p className="text_two">Appartment</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Bedrooms</b></p>
                      <p className="text_two">4</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Property Status</b></p>
                      <p className="text_two">For Status</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>





                </div>
              </div>
              {/* Address Description */}
              <div className="overview_card mt-3">
                <h5><b>Address</b></h5>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Address</b></p>
                      <p className="text_two">10425 Tabor St</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Zip/Postal Code</b></p>
                      <p className="text_two">2</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>City</b></p>
                      <p className="text_two">Los Angeles</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Area</b></p>
                      <p className="text_two">Brokeside</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>State/Country</b></p>
                      <p className="text_two">California</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one"><b>Country</b></p>
                      <p className="text_two">United States</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>

                </div>
              </div>

              {/*Extra Address Description */}
              <div className="overview_card mt-3">
                <h5><b>Address</b></h5>
                <div className="row mt-4">
                  <div className="col-md-4">
                    <ul className="extra_address_data">
                      <li><b>Air Conditioning</b></li>
                      <li><b>Barbeque</b></li>
                      <li><b>Dryer</b></li>
                      <li><b>Gym</b></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="extra_address_data">
                      <li><b>Lawn</b></li>
                      <li><b>Microwave</b></li>
                      <li><b>Outdoor Shower</b></li>
                      <li><b>Refrigerator</b></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="extra_address_data">
                      <li><b>Swimming Pool</b></li>
                      <li><b>TV Cable</b></li>
                      <li><b>Washer</b></li>
                      <li><b>WiFi6</b></li>
                    </ul>
                  </div>

                </div>
              </div>

              {/*Extra Address Description */}
              <div className="overview_card mt-3">
                <h5><b>Floor Plans</b></h5>
                <div className="mt-4">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <div className="accordian_header_text">
                            <div><span><b>First Floor</b></span></div>
                            <div className="floor_plan_desc">
                              <span><b>Size:</b>&nbsp; 1267 Sqft</span>
                              <span><b>Bedrooms:</b>&nbsp;2</span>
                              <span><b>Bathrooms:</b>&nbsp;4</span>
                              <span><b>Price:</b>&nbsp;$920,99</span>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <img src="images/propset1.png" style={{ marginBottom: "0.5rem", paddingRight: "0.71rem", width: "100%" }} />
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <div className="accordian_header_text">
                            <div><span><b>First Floor</b></span></div>
                            <div className="floor_plan_desc">
                              <span><b>Size:</b>&nbsp; 1267 Sqft</span>
                              <span><b>Bedrooms:</b>&nbsp;2</span>
                              <span><b>Bathrooms:</b>&nbsp;4</span>
                              <span><b>Price:</b>&nbsp;$920,99</span>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <img src="images/propset1.png" style={{ marginBottom: "0.5rem", paddingRight: "0.71rem", width: "100%" }} />
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <div className="accordian_header_text">
                            <div><span><b>First Floor</b></span></div>
                            <div className="floor_plan_desc">
                              <span><b>Size:</b>&nbsp; 1267 Sqft</span>
                              <span><b>Bedrooms:</b>&nbsp;2</span>
                              <span><b>Bathrooms:</b>&nbsp;4</span>
                              <span><b>Price:</b>&nbsp;$920,99</span>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <img src="images/propset1.png" style={{ marginBottom: "0.5rem", paddingRight: "0.71rem", width: "100%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="overview_card mt-3">
                <h5><b>Videos</b></h5>
                <div className="mt-4">
                  {/* <div className="about_img_div">
                    <img className="over_lay_bg" src="images/aboutUs.png" alt="about us"></img>
                    <div className="play_icon">
                      <img src="images/Vector.png" className="play_img" alt="about us" />
                      <p className="watch_now_text">WATCH NOW</p>
                    </div>
                  </div> */}
                  <div className="video_section">
                    <img className="over_lay_bg" src="images/aboutUs.png" alt="about us" />
                    <div className="play_icon">
                      <img src="images/Vector.png" className="play_img" alt="about us" />
                      <p className="watch_now_text">WATCH NOW</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-5">
                <button className="backListing_btn">Back to Listing</button>
              </div>

            </div>
            <div className="col-md-4">
              <div className="overview_card schedule_Tour">
                <h5><b>Schedule a Tour</b></h5>
                <p className="prefered_day">Choose Your Prefered Day</p>
                <div className="row">
                  <div className="col-md-12">
                    <CustomInput className="input_field" type="text" placeholder="Time" id="prefered_time" name="prefered_time" />
                  </div>
                  <div className="col-md-12">
                    <CustomInput className="input_field" type="text" placeholder="Name" id="prefered_name" name="prefered_name" />
                  </div>
                  <div className="col-md-12">
                    <CustomInput className="input_field" type="number" placeholder="Phone" id="prefered_phone" name="prefered_phone" />
                  </div>
                  <div className="col-md-12">
                    <CustomInput className="input_field" type="email" placeholder="Email Address" id="prefered_email" name="prefered_email" />
                  </div>
                  <div className="col-md-12">
                    <textarea className="input_field" type="text" placeholder="Type Your Message " id="prefered_message" name="prefered_message" rows={3}></textarea>
                  </div>
                  <div className="col-md-12">
                    <div style={{display:"flex",columnGap:"10px",alignItems:"baseline"}}>
                      <input type="checkbox" checked="checked" name="remember" /> <label>By Submitting This Form I Agree To The Term Of Use</label></div>
                  </div>
                  <div className="col-12">
                    <button type="button" className="submit_now_btn">Submit Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="mt-3 mb-3">
              <div className="text-center">
                <h2>
                  <b>Nearby Appartments</b>
                </h2>
              </div>
              <div className="container">
                <div className="row pt-5">
                  {data.map((item, index) => {
                    return (
                      <div className="col-md-3 col-12" key={index}>
                        <div className="img_div">
                          <img src={item.img} alt="img" />
                        </div>
                        <div className="img_heading">
                          <h4>
                            <b>
                              {item.title} <br></br>Goes Here
                            </b>
                          </h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="img_plain_text">{item.description}</p>
                          <img src="images/propertyicon.png" alt="propertimg" />
                        </div>
                      </div>
                    );
                  })}
                </div>


                <div className="mt-5">
                  <hr />
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
