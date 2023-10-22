import React from 'react'
import { Dropdown } from 'primereact/dropdown';

const CustomDropdown = (props) => {
    const { value, options, onChange, optionLabel, placeholder, id, name, className } = props
    return (
        <>
            <select className={className} id={id} name={name} onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {/* <Dropdown className={className} value={value} options={options} onChange={onChange} optionLabel={optionLabel} placeholder={placeholder} id={id} name={name} /> */}
        </>
    )
}

export default CustomDropdown