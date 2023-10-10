import React from "react";

const CustomInput = (props) => {
  const { type, placeholder, id, name, className, disabled, ...remainingprops } = props;
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        id={id}
        name={name}
        disabled={disabled}
        {...remainingprops}
      ></input>
    </>
  );
};

export default CustomInput;
