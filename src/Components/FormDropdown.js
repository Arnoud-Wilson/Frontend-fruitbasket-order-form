import React from 'react';

function FormDropdown({setValueDropdown, dropdownLabelFor, dropdownLabelName, dropdownName, dropdownId, dropdownOptionValueOne, dropdownOptionValueTwo, dropdownOptionValueThree, dropdownOptionNameOne, dropdownOptionNameTwo, dropdownOptionNameThree}) {
    return (
        <>
            <label
                htmlFor={dropdownLabelFor}
            >{dropdownLabelName}
            </label>
            <select
                name={dropdownName}
                id={dropdownId}
                onChange={(e) => setValueDropdown(e.target.value)}
            >
                <option value={dropdownOptionValueOne}>{dropdownOptionNameOne}</option>
                <option value={dropdownOptionValueTwo}>{dropdownOptionNameTwo}</option>
                <option value={dropdownOptionValueThree}>{dropdownOptionNameThree}</option>
            </select>
        </>
    );
}

export default FormDropdown;