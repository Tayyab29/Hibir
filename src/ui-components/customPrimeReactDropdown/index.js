import React from "react";
import { Dropdown } from "primereact/dropdown";

const CustomDropdown = (props) => {
  const { value, options, onChange, id, name, className } = props;
  return (
    <div>
      {/* <select className={className} id={id} name={name} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value === value ? option.value : ""}>
            {option.label}
          </option>
        ))}
      </select> */}

      <Dropdown
        // className={className}
        value={value}
        options={options}
        onChange={onChange}
        optionLabel={"label"}
        // placeholder={placeholder}
        id={id}
        name={name}
      />
    </div>
  );
};

export default CustomDropdown;
