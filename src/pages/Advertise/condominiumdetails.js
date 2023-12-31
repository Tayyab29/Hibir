import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Icons
import { BsChevronRight } from "react-icons/bs";

// Redux
import { ToastContext } from "../../context/toast";
import { useDispatch, useSelector } from "react-redux";
import {
  mainViewState,
  onAdvertiseCurrentScreen,
  onAdvertiseMultiValidate,
  onAdvertiseValidate,
  onFormAdvertiseDataChange,
} from "../../redux/main-view";

// Componets
import Footer from "../../components/Footer/footer";
import MapComponent from "./advertisecomponents/condominiumcomponents/mapcomponent";
import UnitComponent from "./advertisecomponents/condominiumcomponents/unitcomponent";
import GeneralPropertyInfo from "./advertisecomponents/condominiumcomponents/generalpropertyinfo";
import DescriptionGeneral from "./advertisecomponents/condominiumcomponents/descriptiongeneral";
import RecentSpecial from "./advertisecomponents/condominiumcomponents/recentspecial";
import UtilitiesIncluded from "./advertisecomponents/condominiumcomponents/utilitiesincluded";
import PropertyEmenities from "./advertisecomponents/condominiumcomponents/propertyemenities";
import ContactInfo from "./advertisecomponents/condominiumcomponents/contactinfo";

// Constants
import { ADVERTISE_INTIAL_STATE } from "../../utils/Constants/global";

// Api's
import {
  advertiseCreate,
  advertiseUpdation,
  fetchAdvertisementById,
} from "../../services/advertise";
import { useQuery } from "../../utils/HelperFunction/useQuery";
import CustomLoader from "../../ui-components/customloader";

const CondominiumDetails = () => {
  // Editing Scenario Condimun Id
  let query = useQuery();
  let id = query.get("id");

  // Redux
  const { screens } = useSelector(mainViewState);
  const dispatch = useDispatch();
  const history = useHistory();

  // Context
  const toast = useContext(ToastContext);
  const [uploadedImages, setUploadedImages] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [isLoading, setIsLoading] = useState(id ? true : false);

  const saveHandler = async () => {
    try {
      const _validate = screens.advertise.validations;
      const _data = screens.advertise.data;
      const _formArray = screens.advertise.multiValidate;
      let hasError = false;
      if (
        _validate.rentTitle ||
        _validate.rentStartDate ||
        _validate.rentEndDate ||
        _validate.petsAllowed ||
        _validate.laundryType ||
        _validate.parkingType ||
        _validate.contactPreference ||
        _validate.userType
      ) {
        hasError = true;
      }
      const updatedFormArray = _formArray.map((item, index) => {
        const { validations, ...rest } = item;

        if (
          item.availableDate === "" ||
          item.deposit === "" ||
          item.leaseLength === "" ||
          item.rent === "" ||
          item.sizeSqft === "" ||
          _data.imagesLength === 0
        ) {
          hasError = true;
          return {
            ...rest,
            validations: {
              ...validations,
              availableDate: item.availableDate === "",
              deposit: item.deposit === "",
              leaseLength: item.leaseLength === "",
              rent: item.rent === "",
              sizeSqft: item.sizeSqft === "",
              images: index === 0 ? _data.imagesLength === 0 : false,
            },
          };
        }
      });
      if (hasError) {
        dispatch(
          onAdvertiseValidate({
            rentTitle: _data.rentTitle === "",
            rentStartDate: _data.rentStartDate === "",
            rentEndDate: _data.rentStartDate === "",
            petsAllowed: _data.petsAllowed === "",
            laundryType: _data.laundryType === "",
            parkingType: _data.parkingType === "",
            contactPreference: _data.contactPreference === "",
            userType: _data.userType === "",
          })
        );
        dispatch(onAdvertiseMultiValidate(updatedFormArray));
        toast.showMessage("Error", "Please fill the required field", "error");
        return;
      }

      const res = await advertiseUpdation({
        ...screens.advertise.data,
        isFullfilled: true,
        isSaved: true,
      });
      if (res.data.status) {
        toast.createdToast("Advertisement");
        dispatch(onFormAdvertiseDataChange(ADVERTISE_INTIAL_STATE));
        dispatch(
          onAdvertiseValidate({
            rentTitle: false,
            rentStartDate: false,
            rentEndDate: false,
            petsAllowed: false,
            laundryType: false,
            parkingType: false,
            contactPreference: false,
            userType: false,
          })
        );
        dispatch(
          onAdvertiseMultiValidate([
            {
              availableDate: "",
              deposit: "",
              leaseLength: "",
              rent: "",
              sizeSqft: "",
              validations: {
                sizeSqft: false,
                rent: false,
                deposit: false,
                leaseLength: false,
                availableDate: false,
                images: false,
              },
            },
          ])
        );
        history.replace("/");
      } else {
        toast.showMessage("Error", "Incorrect Data", "error");
      }
    } catch (error) {
      toast.showMessage(
        "Error",
        "Sorry, we are unable to process your request at this time.",
        "error"
      );
    }
  };

  const PublishHandler = () => {
    const _validate = screens.advertise.validations;
    const _data = screens.advertise.data;
    const _formArray = screens.advertise.multiValidate;
    let hasError = false;
    if (
      _validate.rentTitle ||
      _validate.rentStartDate ||
      _validate.rentEndDate ||
      _validate.petsAllowed ||
      _validate.laundryType ||
      _validate.parkingType ||
      _validate.contactPreference ||
      _validate.userType
    ) {
      hasError = true;
    }
    const updatedFormArray = _formArray.map((item, index) => {
      const { validations, ...rest } = item;

      if (
        item.availableDate === "" ||
        item.deposit === "" ||
        item.leaseLength === "" ||
        item.rent === "" ||
        item.sizeSqft === "" ||
        _data.imagesLength === 0
      ) {
        hasError = true;
        return {
          ...rest,
          validations: {
            ...validations,
            availableDate: item.availableDate === "",
            deposit: item.deposit === "",
            leaseLength: item.leaseLength === "",
            rent: item.rent === "",
            sizeSqft: item.sizeSqft === "",
            images: index === 0 ? _data.imagesLength === 0 : false,
          },
        };
      }
    });

    if (hasError) {
      dispatch(
        onAdvertiseValidate({
          rentTitle: _data.rentTitle === "",
          rentStartDate: _data.rentStartDate === "",
          rentEndDate: _data.rentStartDate === "",
          petsAllowed: _data.petsAllowed === "",
          laundryType: _data.laundryType === "",
          parkingType: _data.parkingType === "",
          contactPreference: _data.contactPreference === "",
          userType: _data.userType === "",
        })
      );
      dispatch(onAdvertiseMultiValidate(updatedFormArray));
      toast.showMessage("Error", "Please fill the required field", "error");
      return;
    }
    history.push("/advertise");
    dispatch(onAdvertiseCurrentScreen(2));
  };

  const getAdvertisementById = async () => {
    try {
      let payload = {
        id: id,
      };
      const res = await fetchAdvertisementById(payload);
      if (res.data.status) {
        setUploadedImages(res.data.totalImages);
        setIsEditing(true);
        dispatch(
          onFormAdvertiseDataChange({
            ...res.data.details,
            imagesLength: res?.data?.details?.images?.length,
          })
        );
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

  useEffect(() => {
    if (id) {
      getAdvertisementById();
    }
  }, [id]);

  return (
    <>
      {isLoading ? (
        <CustomLoader height={"100vh"} />
      ) : (
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
                    <button
                      type="button"
                      className={
                        isEditing
                          ? screens.advertise.data.isSaved
                            ? "condominium_save"
                            : "condominium_save_not"
                          : "condominium_save"
                      }
                      onClick={
                        isEditing
                          ? screens.advertise.data.isSaved
                            ? () => saveHandler()
                            : null
                          : () => saveHandler()
                      }
                    >
                      Save
                    </button>
                    <button
                      className={
                        isEditing
                          ? screens.advertise.data.isPublished
                            ? "condominium_publish"
                            : "condominium_publish_not"
                          : "condominium_publish"
                      }
                      type="button"
                      onClick={
                        isEditing
                          ? screens.advertise.data.isPublished
                            ? () => PublishHandler()
                            : null
                          : () => PublishHandler()
                      }
                    >
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
              {/* <div className="row">
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
          </div> */}
            </div>
          </section>
          <section className="pt-3">
            <MapComponent />
          </section>
          <section className="pt-3">
            <UnitComponent uploadedImages={uploadedImages} />
          </section>
          {/* <section className="pt-3">
        <GeneralPropertyInfo />
      </section> */}
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
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by injected humour, or
                      randomised words which don't look even slightly believable. If you are going
                      to use a passage of Lorem Ipsum, you need to be sure there isn't anything
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
                    <button
                      className={
                        isEditing
                          ? screens.advertise.data.isSaved
                            ? "condominium_save"
                            : "condominium_save_not"
                          : "condominium_save"
                      }
                      type="button"
                      onClick={
                        isEditing
                          ? screens.advertise.data.isSaved
                            ? () => saveHandler()
                            : null
                          : () => saveHandler()
                      }
                    >
                      Save
                    </button>
                    <button
                      className={
                        isEditing
                          ? screens.advertise.data.isPublished
                            ? "condominium_publish"
                            : "condominium_publish_not"
                          : "condominium_publish"
                      }
                      type="button"
                      onClick={
                        isEditing
                          ? screens.advertise.data.isPublished
                            ? () => PublishHandler()
                            : null
                          : () => PublishHandler()
                      }
                    >
                      Publish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <section>
        <Footer display="none" marginTop="0rem" />
      </section>
    </>
  );
};

export default CondominiumDetails;
