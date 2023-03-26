import React from 'react';

// weet niet waarom maar krijg deze niet werkend...

function FormCheckbox(checkboxType, checkboxIdOne, checkboxIdTwo, checkboxNameOne, checkboxNameTwo, checkboxLabelForOne, checkboxLabelForTwo, checkboxLabelNameOne, checkboxLabelNameTwo) {
    return (
        <>
            <input
                type={checkboxType}
                id={checkboxIdOne}
                name={checkboxNameOne}
            />
            <label
                htmlFor={checkboxLabelForOne}
            >{checkboxLabelNameOne}
            </label>
            <input
                type={checkboxType}
                id={checkboxIdTwo}
                name={checkboxNameTwo}
            />
            <label
                htmlFor={checkboxLabelForTwo}
            >{checkboxLabelNameTwo}
            </label>
        </>
    );
}

export default FormCheckbox;


// <FormCheckbox
//     checkboxType="radio"
//     checkboxIdOne="day"
//     checkboxNameOne="time"
//     checkboxLabelForOne="day"
//     checkboxLabelNameOne="Overdag"
//     checkboxIdTwo="night"
//     checkboxNameTwo="time"
//     checkboxLabelForTwo="night"
//     checkboxLabelNameTwo="'s avonds"
// />