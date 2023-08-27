import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebardata";
import { IconContext } from "react-icons";
import Modal from "react-bootstrap/Modal";

import "./topnav.css";
import LoginModal from "./modalcomponents/loginmodal";
import SignupModal from "./modalcomponents/signupmodal";

const TopNav = () => {
  const [show, setShow] = useState(false);
  const [showsignup, setShowSignup] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  //modal click events
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //signup
  const handleSignUpClose = () => setShowSignup(false);
  const handleSignupShow = () => setShowSignup(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <LoginModal onHide={handleClose} />
      </Modal>
      <Modal show={showsignup} onHide={handleSignUpClose}>
        <SignupModal onHide={handleSignUpClose} />
      </Modal>

      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} className="baricon_color" />{" "}
            Menu
          </Link>
          <div className="right_side_nav">
            <Link className="logo_div" to="/">
              <div>
                <img src="images/Hibir Bet Logo-01 1.svg" alt="Logo" />
              </div>
            </Link>
            <Link to="/advertise" className="link_deco commonheader_btn">
              <div className="">Advertise</div>
            </Link>
            <Link to="/manage" className="link_deco commonheader_btn">
              <div className="">Manage</div>
            </Link>
            <div className="link_deco log_plain">
              <div onClick={handleShow}>Login</div>
            </div>
            <div className="link_deco signUp_clrd">
              <div onClick={handleSignupShow}>Sign up</div>
            </div>
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
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div className="d-flex justify-content-around pt-3">
              <button className="nav_login_btn">Login In</button>
              <button className="nav_signup_btn">Sign Up</button>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default TopNav;
