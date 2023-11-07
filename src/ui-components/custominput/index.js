import React from "react";
import { InputText } from "primereact/inputtext";
const CustomInput = (props) => {
  const {
    type,
    placeholder,
    id,
    name,
    className,
    disabled,
    onChange,
    value,
    maxLength,
    keyfilter,
    ...remainingprops
  } = props;
  return (
    <>
      <InputText
        type={type}
        className={className}
        placeholder={placeholder}
        id={id}
        name={name}
        disabled={disabled}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        keyfilter={keyfilter}
        {...remainingprops}
      ></InputText>
    </>
  );
};

export default CustomInput;
