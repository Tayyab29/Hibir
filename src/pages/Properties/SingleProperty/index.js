import React, { useContext, useEffect, useState } from "react";
import Footer from "../../../components/Footer/footer";
import { BsClock } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineMapsHomeWork, MdOutlineSendToMobile } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import "../allproperties.scss";
import { data } from "../../Home/homecomponents/propertData";
import CustomInput from "../../../ui-components/custominput";
import { ToastContext } from "../../../context/toast";
import { fetchAdvertisementById, fetchCustomerAdvertisement } from "../../../services/advertise";
import { renderImage } from "../../../utils/HelperFunction/imagePreview";
import { truncateDescription } from "../../../utils/HelperFunction/descriptionText";
import {
  amenitiesHandler,
  parkingTypeNameHandler,
  propertyTypeNameHandler,
} from "../../../utils/HelperFunction/advertiseHelper";
import { useQuery } from "../../../utils/HelperFunction/useQuery";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginState } from "../../../redux/login";
import { createChat } from "../../../services/chat";
import CustomLoader from "../../../ui-components/customloader";

const SingleProperty = () => {
  // Editing Scenario Condimun Id
  let query = useQuery();
  let id = query.get("id");

  const history = useHistory();

  //Redux
  const { user } = useSelector(loginState);

  // Context
  const toast = useContext(ToastContext);

  const [singleData, setSingleData] = useState(null);
  const [viewProperties, setViewProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Handler
  const multipleSizeSqft = (values) => {
    let formattedValues;

    if (values?.length === 1) {
      formattedValues = `${values[0]} Sqft`;
    } else {
      formattedValues = values?.map((value) => `${value} Sqft`).join(" - ");
    }
    return formattedValues;
  };

  const multipleRent = (values) => {
    let formattedValues;

    if (values?.length === 1) {
      formattedValues = `$${values[0]}`;
    } else {
      formattedValues = values?.map((value) => `$${value}`).join(" - ");
    }
    return formattedValues;
  };

  // NearBy Apartsments
  const getAdvertisementCustomer = async () => {
    setIsLoading(true);
    try {
      const payload = {
        id: "657d8bded4d148c58da35472",
      };
      const { data } = await fetchCustomerAdvertisement(payload);

      if (data.status) {
        setViewProperties(data.properties);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.showMessage(
        "Error",
        "Sorry, we are unable to process your request at this time.",
        "error"
      );
    }
  };

  const singleAdvertisementData = async (id) => {
    try {
      const payload = {
        id: id,
      };
      const { data } = await fetchAdvertisementById(payload);
      if (data.status) {
        setSingleData(data.details);
      }
    } catch (error) {
      toast.showMessage(
        "Error",
        "Sorry, we are unable to process your request at this time.",
        "error"
      );
    }
  };

  const startChat = async (recieverId) => {
    try {
      let payload = {
        senderId: user._id,
        receiverId: recieverId,
      };
      const { data } = await createChat(payload);
      if (data.status) {
        history.push("/chatindex");
      }
      console.log({ data });
    } catch (error) {
      toast.showMessage(
        "Error",
        "Sorry, we are unable to process your request at this time.",
        "error"
      );
    }
  };

  // UseEffect
  useEffect(() => {
    getAdvertisementCustomer();
  }, []);

  useEffect(() => {
    if (id) {
      singleAdvertisementData(id);
    }
  }, [id]);

  return (
    <>
      {isLoading ? (
        <CustomLoader height={"100vh"} />
      ) : (
        <>
          {/* Header Section */}
          <section className="single_property_view">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-8">
                  <h2>
                    <b>{singleData?.rentTitle}</b>{" "}
                  </h2>
                  <p>
                    <span className="brdr_text_one">{singleData?.propertyAdress}</span>
                    <span className="brdr_text_two"> For Sale</span>
                    {/* <span className="brdr_text_three">
                  <BsClock style={{ fontSize: "18px" }} /> 1 Year Ago
                </span> */}
                  </p>
                  <p className="single_social_suit">
                    <span>
                      <BiBed /> {singleData?.propertyBeds?.length} Bed
                    </span>
                    <span>
                      <BiBath />
                      {singleData?.propertyBaths?.length} Bath
                    </span>
                    <span>
                      <BsBoxArrowInUpRight />
                      {multipleSizeSqft(singleData?.sizeSqft)}
                    </span>
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
                    <h2>
                      <b>{multipleRent(singleData?.rent)}</b>
                    </h2>
                    <span> {multipleSizeSqft(singleData?.sizeSqft)}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image Section */}
          <section className="image_section">
            <div className="container">
              <div class="row">
                <div class="col-md-5 pr-0">
                  <img
                    className="grid_5_img"
                    src={renderImage(
                      singleData?.images[0]?.data?.data,
                      singleData?.images[0]?.fileType
                    )}
                  />
                </div>
                <div class="col-md-7">
                  <div className="row p-0">
                    {singleData?.images[1] && (
                      <div className="col-md-6 p-0">
                        <img
                          src={renderImage(
                            singleData?.images[1]?.data?.data,
                            singleData?.images[1]?.fileType
                          )}
                          style={{
                            maxHeight: "300px",
                            marginBottom: "0.5rem",
                            paddingRight: "0.71rem",
                          }}
                        />
                      </div>
                    )}
                    {singleData?.images[2] && (
                      <div className="col-md-6 p-0">
                        <img
                          src={renderImage(
                            singleData?.images[2]?.data?.data,
                            singleData?.images[2]?.fileType
                          )}
                          style={{
                            maxHeight: "300px",
                            marginBottom: "0.5rem",
                            paddingRight: "0.71rem",
                          }}
                        />
                      </div>
                    )}
                    {singleData?.images[3] && (
                      <div className="col-md-6 p-0">
                        <img
                          src={renderImage(
                            singleData?.images[3]?.data?.data,
                            singleData?.images[3]?.fileType
                          )}
                          style={{
                            maxHeight: "300px",
                            marginBottom: "0.5rem",
                            paddingRight: "0.71rem",
                          }}
                        />
                      </div>
                    )}
                    {singleData?.images[4] && (
                      <div className="col-md-6 p-0">
                        <img
                          src={renderImage(
                            singleData?.images[4]?.data?.data,
                            singleData?.images[4]?.fileType
                          )}
                          style={{
                            maxHeight: "300px",
                            marginBottom: "0.5rem",
                            paddingRight: "0.71rem",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*  */}
          <section className="single_property_overview">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="overview_card">
                    <h5>
                      <b>Overview</b>
                    </h5>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="data_inner_section">
                          <div class="overview_icon_div">
                            <span className="overview_icon">
                              <BiBed />
                            </span>
                          </div>
                          <div>
                            <p className="overview_text">
                              <b>Bedroom</b>
                            </p>
                            <p className="overview_text">
                              <b> {singleData?.propertyBeds?.length}</b>
                            </p>
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
                            <p className="overview_text">
                              <b>Bath</b>
                            </p>
                            <p className="overview_text">
                              <b> {singleData?.propertyBaths?.length}</b>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-md-4">
                    <div className="data_inner_section">
                      <div class="overview_icon_div">
                        <span className="overview_icon">
                          <LuCalendarDays />
                        </span>
                      </div>
                      <div>
                        <p className="overview_text">
                          <b>Year Built</b>
                        </p>
                        <p className="overview_text">
                          <b>2022</b>
                        </p>
                      </div>
                    </div>
                  </div> */}
                      <div className="col-md-4">
                        <div className="data_inner_section">
                          <div class="overview_icon_div">
                            <span className="overview_icon">
                              <IoCarSportOutline />
                            </span>
                          </div>
                          <div>
                            <p className="overview_text">
                              <b>Parking</b>
                            </p>
                            <p className="overview_text">
                              <b>{parkingTypeNameHandler(singleData?.parkingType)}</b>
                            </p>
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
                            <p className="overview_text">
                              <b>Sqft</b>
                            </p>
                            <p className="overview_text">
                              <b>{multipleSizeSqft(singleData?.sizeSqft)}</b>
                            </p>
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
                            <p className="overview_text">
                              <b>Property Type</b>
                            </p>
                            <p className="overview_text">
                              <b> {propertyTypeNameHandler(singleData?.propertyType)}</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Property Description */}
                  <div className="overview_card mt-3">
                    <h5>
                      <b>Property Description</b>
                    </h5>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="description_text">
                          <p>{singleData?.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Property Description */}
                  <div className="overview_card mt-3">
                    <h5>
                      <b>Property Details</b>
                    </h5>
                    <div className="row mt-4">
                      <div className="col-md-6">
                        <div className="property_details_data">
                          <p className="text_one">
                            <b>Property ID</b>
                          </p>
                          <p className="text_two">{singleData?._id}</p>
                          <div className="clear_fix"></div>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one">
                        <b>Garage</b>
                      </p>
                      <p className="text_two">2</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div> */}
                      <div className="col-md-6">
                        <div className="property_details_data">
                          <p className="text_one">
                            <b>Price</b>
                          </p>
                          <p className="text_two">{multipleRent(singleData?.rent)}</p>
                          <div className="clear_fix"></div>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one">
                        <b>Garage Size</b>
                      </p>
                      <p className="text_two">200 Sqft</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div> */}
                      <div className="col-md-6">
                        <div className="property_details_data">
                          <p className="text_one">
                            <b>Property Size</b>
                          </p>
                          <p className="text_two">{multipleSizeSqft(singleData?.sizeSqft)}</p>
                          <div className="clear_fix"></div>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one">
                        <b>Year Built</b>
                      </p>
                      <p className="text_two">2022</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div> */}
                      <div className="col-md-6">
                        <div className="property_details_data">
                          <p className="text_one">
                            <b>Bathrooms</b>
                          </p>
                          <p className="text_two">{singleData?.propertyBaths?.length}</p>
                          <div className="clear_fix"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="property_details_data">
                          <p className="text_one">
                            <b>Property Type</b>
                          </p>
                          <p className="text_two">
                            {propertyTypeNameHandler(singleData?.propertyType)}
                          </p>
                          <div className="clear_fix"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="property_details_data">
                          <p className="text_one">
                            <b>Bedrooms</b>
                          </p>
                          <p className="text_two">{singleData?.propertyBeds.length}</p>
                          <div className="clear_fix"></div>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one">
                        <b>Property Status</b>
                      </p>
                      <p className="text_two">For Status</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div> */}
                    </div>
                  </div>
                  {/* Address Description */}
                  {/* <div className="overview_card mt-3">
                <h5>
                  <b>Address</b>
                </h5>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one">
                        <b>Address</b>
                      </p>
                      <p className="text_two">10425 Tabor St</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one">
                        <b>Zip/Postal Code</b>
                      </p>
                      <p className="text_two">2</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one">
                        <b>City</b>
                      </p>
                      <p className="text_two">Los Angeles</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one">
                        <b>Area</b>
                      </p>
                      <p className="text_two">Brokeside</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one">
                        <b>State/Country</b>
                      </p>
                      <p className="text_two">California</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property_details_data">
                      <p className="text_one">
                        <b>Country</b>
                      </p>
                      <p className="text_two">United States</p>
                      <div className="clear_fix"></div>
                    </div>
                  </div>
                </div>
              </div> */}

                  {/*Extra Address Description */}
                  <div className="overview_card mt-3">
                    <h5>
                      <b>Amenities</b>
                    </h5>
                    <div className="row mt-4">
                      {amenitiesHandler(singleData?.amenities)?.length !== 0 &&
                        amenitiesHandler(singleData?.amenities).map((item) => {
                          return (
                            <div className="col-md-4">
                              <ul className="extra_address_data">
                                <li>
                                  <b>{item}</b>
                                </li>
                              </ul>
                            </div>
                          );
                        })}
                      {/* <div className="col-md-4">
                    <ul className="extra_address_data">
                      <li>
                        <b>Lawn</b>
                      </li>
                      <li>
                        <b>Microwave</b>
                      </li>
                      <li>
                        <b>Outdoor Shower</b>
                      </li>
                      <li>
                        <b>Refrigerator</b>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="extra_address_data">
                      <li>
                        <b>Swimming Pool</b>
                      </li>
                      <li>
                        <b>TV Cable</b>
                      </li>
                      <li>
                        <b>Washer</b>
                      </li>
                      <li>
                        <b>WiFi6</b>
                      </li>
                    </ul>
                  </div> */}
                    </div>
                  </div>

                  {/*Extra Address Description */}
                  {/* <div className="overview_card mt-3">
                <h5>
                  <b>Floor Plans</b>
                </h5>
                <div className="mt-4">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <div className="accordian_header_text">
                            <div>
                              <span>
                                <b>First Floor</b>
                              </span>
                            </div>
                            <div className="floor_plan_desc">
                              <span>
                                <b>Size:</b>&nbsp; 1267 Sqft
                              </span>
                              <span>
                                <b>Bedrooms:</b>&nbsp;2
                              </span>
                              <span>
                                <b>Bathrooms:</b>&nbsp;4
                              </span>
                              <span>
                                <b>Price:</b>&nbsp;$920,99
                              </span>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <img
                            src="images/propset1.png"
                            style={{
                              marginBottom: "0.5rem",
                              paddingRight: "0.71rem",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div className="accordian_header_text">
                            <div>
                              <span>
                                <b>First Floor</b>
                              </span>
                            </div>
                            <div className="floor_plan_desc">
                              <span>
                                <b>Size:</b>&nbsp; 1267 Sqft
                              </span>
                              <span>
                                <b>Bedrooms:</b>&nbsp;2
                              </span>
                              <span>
                                <b>Bathrooms:</b>&nbsp;4
                              </span>
                              <span>
                                <b>Price:</b>&nbsp;$920,99
                              </span>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <img
                            src="images/propset1.png"
                            style={{
                              marginBottom: "0.5rem",
                              paddingRight: "0.71rem",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <div className="accordian_header_text">
                            <div>
                              <span>
                                <b>First Floor</b>
                              </span>
                            </div>
                            <div className="floor_plan_desc">
                              <span>
                                <b>Size:</b>&nbsp; 1267 Sqft
                              </span>
                              <span>
                                <b>Bedrooms:</b>&nbsp;2
                              </span>
                              <span>
                                <b>Bathrooms:</b>&nbsp;4
                              </span>
                              <span>
                                <b>Price:</b>&nbsp;$920,99
                              </span>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <img
                            src="images/propset1.png"
                            style={{
                              marginBottom: "0.5rem",
                              paddingRight: "0.71rem",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

                  <div className="overview_card mt-3">
                    <h5>
                      <b>Videos</b>
                    </h5>
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
                    <button
                      className="backListing_btn"
                      type="button"
                      onClick={() => history.push("/allproperties")}
                    >
                      Back to Listing
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="overview_card schedule_Tour">
                    <h5>
                      <b>Schedule a Tour</b>
                    </h5>
                    <p className="prefered_day">Choose Your Prefered Day</p>
                    <div className="row">
                      <div className="col-md-12">
                        <CustomInput
                          className="input_field"
                          type="text"
                          placeholder="Time"
                          id="prefered_time"
                          name="prefered_time"
                        />
                      </div>
                      <div className="col-md-12">
                        <CustomInput
                          className="input_field"
                          type="text"
                          placeholder="Name"
                          id="prefered_name"
                          name="prefered_name"
                        />
                      </div>
                      <div className="col-md-12">
                        <CustomInput
                          className="input_field"
                          type="number"
                          placeholder="Phone"
                          id="prefered_phone"
                          name="prefered_phone"
                        />
                      </div>
                      <div className="col-md-12">
                        <CustomInput
                          className="input_field"
                          type="email"
                          placeholder="Email Address"
                          id="prefered_email"
                          name="prefered_email"
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          className="input_field"
                          type="text"
                          placeholder="Type Your Message "
                          id="prefered_message"
                          name="prefered_message"
                          rows={3}
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <div style={{ display: "flex", columnGap: "10px", alignItems: "baseline" }}>
                          <input type="checkbox" checked="checked" name="remember" />{" "}
                          <label>By Submitting This Form I Agree To The Term Of Use</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="button" className="submit_now_btn">
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="overview_card schedule_Tour single_border">
                    <h5>
                      <b>Get More Information</b>
                    </h5>
                    <div className="col-md-12">
                      <p className="single_user_name">
                        {(singleData?.user?.firstName ?? "") +
                          " " +
                          (singleData?.user?.lastName ?? " ")}
                      </p>
                      <div className="single_phone_wrapper">
                        <MdOutlineSendToMobile className="single_allproperties_mobile_icon" />
                        <p>{singleData?.user?.phoneNo}</p>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        type="button"
                        className="submit_now_btn"
                        onClick={() => {
                          startChat(singleData?.user?._id);
                        }}
                      >
                        Chat Now
                      </button>
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
                      {viewProperties.length === 0 ? (
                        <div className="no_record_dashboard">No Record Available</div>
                      ) : (
                        viewProperties.map((item, index) => {
                          return (
                            <div className="col-md-3 col-12" key={index}>
                              <div className="img_div">
                                <img
                                  src={renderImage(
                                    item?.displayImage?.data?.data,
                                    item?.displayImage?.fileType
                                  )}
                                  alt="img"
                                />
                              </div>
                              <div className="img_heading">
                                <h4>
                                  <b>{item?.rentTitle}</b>
                                </h4>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="img_plain_text">
                                  {" "}
                                  {item.description
                                    ? truncateDescription(item.description, 70)
                                    : "No Description"}
                                </p>
                                <img src="images/propertyicon.png" alt="propertimg" />
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>

                    <div className="mt-5">
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <footer>
        <Footer display="none" marginTop="0rem" />
      </footer>
    </>
  );
};

export default SingleProperty;
