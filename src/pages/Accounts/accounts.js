import React, { useContext, useEffect, useState } from "react";
import "./accounts.css";
import Footer from "../../components/Footer/footer";
import InformationData from "./components/informationdata";
import { useDispatch, useSelector } from "react-redux";
import { loginState, setUser } from "../../redux/login";
import { updateUser } from "../../services/users";
import { Modal } from "react-bootstrap";
import UpdateEmail from "./components/updateEmail";
import UpdatePassword from "./components/updatePassword";
import ConfirmDialog from "./components/confirmDialog";
import { ToastContext } from "../../context/toast";

import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  zip: Yup.string()
    .required("Zip Code is required")
    .min(5, "Zip Code must be at least 5 characters"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
});

const AccountsIndex = () => {
  // Context
  const toast = useContext(ToastContext);
  //Redux
  const { user } = useSelector(loginState);
  const dispatch = useDispatch();

  const isDisabled = user ? user.isGoogle || user.isFacebook || user.isApple : false;

  const [show, setShow] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [userDetails, setUserDetails] = useState({
    _id: user ? user?._id : "",
    email: user ? user?.email ?? "" : "",
  });

  // Handlers
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      firstName: "",
      lastName: "",
      zip: "",
      city: "",
      state: "",
    },
    onSubmit: async (data) => {
      try {
        const resp = await updateUser(data);
        if (resp.data.status) {
          dispatch(setUser(resp?.data.user));
          toast.updateToast("Account");
        } else {
          toast.showMessage("Error", "Sorry, User could not be updated.", "error");
        }
      } catch (error) {
        toast.showMessage(
          "Error",
          "Sorry, we are unable to process your request at this time.",
          "error"
        );
      }
    },
  });

  useEffect(() => {
    if (user) {
      formik.setFieldValue("_id", user?._id);
      formik.setFieldValue("firstName", user?.firstName);
      formik.setFieldValue("lastName", user?.lastName);
      formik.setFieldValue("phoneNo", user?.phoneNo);
      formik.setFieldValue("address", user?.address);
      formik.setFieldValue("addressMain", user?.addressMain);
      formik.setFieldValue("country", user?.country);
      formik.setFieldValue("state", user?.state);
      formik.setFieldValue("city", user?.city);
      formik.setFieldValue("zip", user?.zip);
      formik.setFieldValue("language", user?.language ?? "eng");
      setUserDetails({
        _id: user ? user?._id : "",
        email: user ? user?.email ?? "" : "",
      });
    }
  }, [user]);

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <UpdateEmail onHide={() => setShow(false)} />
      </Modal>
      <Modal show={showpassword} onHide={() => setShowPassword(false)}>
        <UpdatePassword onHide={() => setShowPassword(false)} />
      </Modal>
      <Modal show={showPopup} onHide={() => setShowPopup(false)}>
        <ConfirmDialog onHide={() => setShowPopup(false)} />
      </Modal>
      <div className="container">
        <section className="custom_padding">
          <div className="row">
            <div className="col-md-4">
              <div className="account_heading_border">
                <h3>
                  <b>My Account</b>
                </h3>
              </div>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-2">
              <div className="align_savebtn">
                <button className="myaccount_btn" type="button" onClick={formik.handleSubmit}>
                  Save Settings
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="account_change_language">
                <h5>
                  <b>Account</b>
                </h5>
                <p>Communication Language Preference</p>
              </div>
            </div>
            <div className="account_radio_section">
              <div className="checkbox_class">
                <label className="container_radio">
                  English
                  <input
                    type="radio"
                    checked={formik.values.language === "eng"}
                    name="language"
                    value="eng"
                    onChange={formik.handleChange}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="container_radio">
                  Espanol
                  <input
                    type="radio"
                    checked={formik.values.language === "esp"}
                    name="language"
                    value="esp"
                    onChange={formik.handleChange}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <InformationData
                setUserDetails={setUserDetails}
                userDetails={userDetails}
                isDisabled={isDisabled}
                setShow={setShow}
                setShowPassword={setShowPassword}
                setShowPopup={setShowPopup}
                formik={formik}
              />
            </div>
          </div>
        </section>
      </div>
      <footer>
        <Footer display="none" marginTop="0rem" />
      </footer>
    </>
  );
};

export default AccountsIndex;
