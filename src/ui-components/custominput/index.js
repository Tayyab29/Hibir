import React from 'react'

const CustomInput = (props) => {
    const { type, placeholder, id, name, className } = props
    return (
        <>
           
                <input type={type} className={className} placeholder={placeholder} id={id} name={name}></input>
            </>
    )
}

export default CustomInput