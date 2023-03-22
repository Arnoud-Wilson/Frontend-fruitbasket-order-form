import React from 'react';

function FormInput({labelFor, labelName, inputType, inputId, inputName, messageValue, setMassageValue}) {
    return (
    <>
        <label
            htmlFor={labelFor}
        >{labelName}
        </label>
        <input
            type={inputType}
            id={inputId}
            name={inputName}
            value={messageValue}
            onChange={(e) => setMassageValue(e.target.value)}
        />
    </>
    );
}

export default FormInput;