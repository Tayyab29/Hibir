import React, { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

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
import { DropdownButton } from "react-bootstrap"; import Dropdown from 'react-bootstrap/Dropdown';

const TopNav = () => {
  // Local Storage
  const token = localStorage.getItem("accessToken");
  // View State
  const [show, setShow] = useState(false);
  const [showsignup, setShowSignup] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [showforgotmodal, setShowForgotModal] = useState(false);

  // States
  const [menu, setMenu] = useState(token === null ? UNPROTECTED_PAGE : PROTECTED_PAGE);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Handler
  const logoutHandler = () => {
    logout();
  };
  const showSidebar = () => setSidebar(!sidebar);
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

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <LoginModal onHide={handleClose} show={show} setShow={setShow} />
      </Modal>
      <Modal show={showsignup} onHide={handleSignUpClose}>
        <SignupModal
          onHide={handleSignUpClose}
          setUser={setUser}
          user={user}
          setShowPassword={setShowPassword}
        />
      </Modal>
      <Modal show={showpassword} onHide={() => setShowPassword(false)}>
        <SetPassordModal onHide={() => setShowPassword(false)} data={user} />
      </Modal>
      <Modal show={showforgotmodal} onHide={() => setShowForgotModal(false)}>
        <ForgotModal onHide={() => setShowForgotModal(false)} />
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
                <DropdownButton id="dropdown-basic-button" title="UserName">
                  <Dropdown.Item onClick={logoutHandler}>
                    <div className="link_deco signUp_clrd">
                      <div>Log out</div>
                    </div></Dropdown.Item>
                </DropdownButton>
              </>
            )}
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="/">
                <img
                  src="images/Hibir Bet Logo-01 1.svg"
                  className="side_canvas_logo"
                  alt="Hibir Logo"
                />
              </Link>
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose color="black" />
              </Link>
            </li>
            {menu.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>

                </li>
              );
            })}
            {token === "undefined" ||
              (token === null && (
                <div className="d-flex justify-content-around pt-3">
                  <button className="nav_login_btn " onClick={handleShow}>
                    Login In
                  </button>
                  <button className="nav_signup_btn" onClick={handleSignupShow}>
                    Sign Up
                  </button>
                </div>
              ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default TopNav;
