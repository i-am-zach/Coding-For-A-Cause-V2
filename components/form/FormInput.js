import React from 'react';
import PropTypes from 'prop-types';

function FormField({ name, label, inputType }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="hidden">
        {label}
      </label>
      <input
        type={inputType}
        name={name}
        placeholder={label}
        className="form-field"
      ></input>
    </div>
  );
}

FormField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  inputType: PropTypes.string,
};

export default FormField;
