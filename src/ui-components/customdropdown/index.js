import React from 'react'
import { Dropdown } from 'primereact/dropdown';

const CustomDropdown = (props) => {
    const { value, options, onChange, optionLabel, placeholder, id, name } = props
    return (
        <>
            <Dropdown value={value} options={options} onChange={onChange} optionLabel={optionLabel} placeholder={placeholder} id={id} name={name} />
        </>
    )
}

export default CustomDropdown