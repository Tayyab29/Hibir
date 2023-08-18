import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebardata";
import { IconContext } from "react-icons";
// import Logo from "../../images/Hibir Bet Logo-01 1.svg";
import "./topnav.css";

const TopNav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} className="baricon_color" /> Menu
          </Link>
          <div className="right_side_nav">
            <Link className="logo_div">
              <div>
                <img src="images/Hibir Bet Logo-01 1.svg" alt="Logo" />
              </div>
            </Link>
            <Link className="link_deco commonheader_btn">
              <div className="">Advertise</div>
            </Link>
            <Link className="link_deco commonheader_btn">
              <div className="">Manage</div>
            </Link>
            <Link className="link_deco log_plain">
              <div className="">Login</div>
            </Link>
            <Link className="link_deco signUp_clrd">
              <div className="">Sign up</div>
            </Link>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
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
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default TopNav;
