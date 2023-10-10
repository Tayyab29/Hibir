import React, { useEffect, useState } from "react";
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

const AccountsIndex = () => {
  //Redux
  const { user } = useSelector(loginState);
  const dispatch = useDispatch();

  const isDisabled = user ? user.isGoogle || user.isFacebook || user.isApple : false;

  const [show, setShow] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [userDetails, setUserDetails] = useState({
    _id: user ? user?._id : "",
    firstName: user ? user?.firstName ?? "" : "",
    lastName: user ? user?.lastName ?? "" : "",
    phoneNo: user ? user?.phoneNo ?? "" : "",
    address: user ? user?.address ?? "" : "",
    addressMain: user ? user?.addressMain ?? "" : "",
    country: user ? user?.country ?? "" : "",
    state: user ? user?.state ?? "" : "",
    city: user ? user?.city ?? "" : "",
    zip: user ? user?.zip ?? "" : "",
    email: user ? user?.email ?? "" : "",
  });

  const saveHandler = async () => {
    const { email, ...rest } = userDetails;
    const resp = await updateUser(rest);
    if (resp.data.status) {
      dispatch(setUser(resp?.data.user));
    }
  };

  useEffect(() => {
    setUserDetails({
      _id: user ? user?._id : "",
      firstName: user ? user?.firstName ?? "" : "",
      lastName: user ? user?.lastName ?? "" : "",
      phoneNo: user ? user?.phoneNo ?? "" : "",
      address: user ? user?.address ?? "" : "",
      addressMain: user ? user?.addressMain ?? "" : "",
      country: user ? user?.country ?? "" : "",
      state: user ? user?.state ?? "" : "",
      city: user ? user?.city ?? "" : "",
      zip: user ? user?.zip ?? "" : "",
      email: user ? user?.email ?? "" : "",
    });
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
                <button className="myaccount_btn" type="button" onClick={saveHandler}>
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
                  <input type="radio" checked="checked" name="radio" value="english" />
                  <span className="checkmark"></span>
                </label>
                <label className="container_radio">
                  Espanol
                  <input type="radio" name="radio" value="espanol" />
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
