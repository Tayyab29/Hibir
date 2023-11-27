import React, { useContext, useState } from "react";
import { useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

// Icons
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

// BootStrap
import Modal from "react-bootstrap/Modal";

// Components
import LoginModal from "./modalcomponents/loginmodal";
import SignupModal from "./modalcomponents/signupmodal";
import SetPassordModal from "./modalcomponents/setpassword";
import ForgotModal from "./modalcomponents/forgotmodal";

// Constants
import { PROTECTED_PAGE, UNPROTECTED_PAGE } from "../../utils/Constants/global";

// Services API'S
import { logout } from "../../services/users";
// Styles
import "./topnav.css";
import { DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

// import Button from 'react-bootstrap/Button';
import { Offcanvas, ListGroup, ListGroupItem } from "react-bootstrap";
import { loginState } from "../../redux/login";
import { useDispatch, useSelector } from "react-redux";
import NotificationBox from "../../pages/Notification";
import { SocketContext } from "../../context/socket";
import { mainViewState, onNotificationCount } from "../../redux/main-view";
import { ToastContext } from "../../context/toast";
import DeactivateModal from "./modalcomponents/deactivateModal";

const TopNav = () => {
  // History
  const history = useHistory();
  // Local Storage
  const token = localStorage.getItem("accessToken");
  const { user } = useSelector(loginState);
  const { screens } = useSelector(mainViewState);

  const dispatch = useDispatch();
  // Context
  const toast = useContext(ToastContext);

  const userName = user ? user.firstName ?? "" + " " + user.lastName ?? "" : "";

  // Socket
  const socketContext = useContext(SocketContext);

  // View State
  const [show, setShow] = useState(false);
  const [showsignup, setShowSignup] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [showforgotmodal, setShowForgotModal] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const [isDeactivate, setIsDeactivate] = useState(false);

  // States
  const [menu, setMenu] = useState(token === null ? UNPROTECTED_PAGE : PROTECTED_PAGE);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Handler
  const logoutHandler = () => {
    logout();
  };
  const showSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSignUpClose = () => setShowSignup(false);
  const handleSignupShow = () => setShowSignup(true);

  // UseEffect
  useEffect(() => {
    if (token) {
      setMenu(PROTECTED_PAGE);
    } else {
      setMenu(UNPROTECTED_PAGE);
    }
  }, [token]);

  const [submenu1, setSubmenu1] = useState(false);
  const [submenu2, setSubmenu2] = useState(false);
  const toggleSubmenu1 = () => setSubmenu1(!submenu1);
  const toggleSubmenu2 = () => setSubmenu2(!submenu2);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });

  const openSubMenu = (e, index) => {
    const parentItem = e.currentTarget;
    const rect = parentItem.getBoundingClientRect();
    setSubmenuPosition({ top: rect.top, left: rect.right });
    setOpenSubMenuIndex(index);
  };

  const closeSubMenu = () => {
    setOpenSubMenuIndex(null);
  };
  useEffect(() => {
    socketContext.recieveSocketNotifyOn();

    return () => {
      socketContext.recieveSocketNotifyOff();
    };
  });

  useEffect(() => {
    if (socketContext.count) {
      const newCount = screens.notification.count + 1;
      dispatch(onNotificationCount(newCount));
      toast.notifyToast();
      // if (selectedChat?.receiverId === socketContext?.recieveMessage?.latestmessage?.senderId) {
      // setMessages((prev) => [...prev, socketContext.recieveMessage.latestmessage]);
      // }
    }
  }, [socketContext.count]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <LoginModal
          onHide={handleClose}
          setShowForgotModal={setShowForgotModal}
          setShowSignup={setShowSignup}
          setIsDeactivate={setIsDeactivate}
        />
      </Modal>
      <Modal show={showsignup} onHide={handleSignUpClose}>
        <SignupModal
          onHide={handleSignUpClose}
          setUserData={setUserData}
          userData={userData}
          setShowPassword={setShowPassword}
          setShow={setShow}
        />
      </Modal>
      <Modal show={showpassword} onHide={() => setShowPassword(false)}>
        <SetPassordModal onHide={() => setShowPassword(false)} data={userData} />
      </Modal>
      <Modal show={showforgotmodal} onHide={() => setShowForgotModal(false)}>
        <ForgotModal onHide={() => setShowForgotModal(false)} />
      </Modal>
      <Modal show={isDeactivate} onHide={() => setIsDeactivate(false)}>
        <DeactivateModal onHide={() => setIsDeactivate(false)} />
      </Modal>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} className="baricon_color" /> Menu
          </Link>
          <div className="right_side_nav">
            <Link className="logo_div" to="/">
              <div>
                <img src="images/Hibir Bet Logo-01 1.svg" alt="Logo" />
              </div>
            </Link>
            {token && token !== "undefined" && (
              <Link to="/advertise" className="link_deco commonheader_btn">
                <div className="">Advertise</div>
              </Link>
            )}

            <Link to="/manage" className="link_deco commonheader_btn">
              <div className="">Manage</div>
            </Link>
            {token && token !== "undefined" && (
              <div className="bell_icon_wrapper" onClick={() => setShowNotify(!showNotify)}>
                {screens.notification.count > 0 ? (
                  <div className="notify_count"> {screens.notification.count} </div>
                ) : (
                  ""
                )}

                <FaIcons.FaBell className="bell_icon" />
              </div>
            )}

            {token === "undefined" || token === null ? (
              <>
                <div className="link_deco log_plain">
                  <div onClick={handleShow}>Login</div>
                </div>
                <div className="link_deco signUp_clrd">
                  <div onClick={handleSignupShow}>Sign up</div>
                </div>
              </>
            ) : (
              <>
                <DropdownButton id="dropdown-basic-button" title={userName}>
                  <Dropdown.Item onClick={() => history.push("/accounts")}>
                    <div className="link_deco signUp_clrd">
                      <div>My Account</div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={logoutHandler}>
                    <div className="link_deco signUp_clrd">
                      <div>Log Out</div>
                    </div>
                  </Dropdown.Item>
                </DropdownButton>
              </>
            )}
          </div>
        </div>
        <Offcanvas show={sidebar} onHide={closeSidebar} className="custom-offcanvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Link to="/">
                <img
                  src="images/Hibir Bet Logo-01 1.svg"
                  className="side_canvas_logo"
                  alt="Hibir Logo"
                />
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup>
              {menu.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={(e) => openSubMenu(e, index)}
                  onMouseLeave={closeSubMenu}
                >
                  <Link className="link_remove_underline" to={item.path}>
                    <ListGroupItem action className={openSubMenuIndex === index ? "active" : ""}>
                      {item.title}
                    </ListGroupItem>
                  </Link>
                  {item.subMenu && openSubMenuIndex === index && (
                    <div
                      className="submenu"
                      style={{ top: submenuPosition.top, left: submenuPosition.left }}
                    >
                      {item.subMenu.map((submenuItem, subIndex) => (
                        <Link
                          className="link_remove_underline"
                          to={submenuItem.path}
                          key={subIndex}
                        >
                          <ListGroupItem key={subIndex} action>
                            {submenuItem.title}
                          </ListGroupItem>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </IconContext.Provider>
      {showNotify && <NotificationBox close={() => setShowNotify(false)} />}
    </>
  );
};

export default TopNav;
