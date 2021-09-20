import React from 'react';

const Input = ({id, type, value, placeholder, className, onChange}) => {
    return (
        <input 
            id={id} 
            type={type}
            value={value}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            autocomplete='off'
        />
    )
}

export default Input;