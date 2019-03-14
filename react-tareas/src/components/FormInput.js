import React from 'react';
import './FormInput.css';

const FormInput = (props) => {
    const { label, placeholder, onChange, value } = props;

    return (
        <div className="form-input">
            <label>{label}</label>
            <br/>
            <input placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    );
};

export default FormInput;