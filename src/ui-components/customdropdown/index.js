import React from "react";

const CustomDropdown = (props) => {
  const { value, options, onChange, id, name, className } = props;
  return (
    <>
      <select className={className} id={id} name={name} onChange={onChange} value={value}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default CustomDropdown;
