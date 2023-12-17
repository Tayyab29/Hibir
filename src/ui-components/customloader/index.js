import React from "react";
import "./customloader.scss";

const CustomLoader = (props) => {
  const { height = "100vh" } = props;
  return (
    <>
      {" "}
      <div className="loader" style={{ height: height }}>
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
      </div>
    </>
  );
};

export default CustomLoader;
