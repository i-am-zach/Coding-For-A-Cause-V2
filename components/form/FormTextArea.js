import React from 'react';
import PropTypes from 'prop-types';

function FormField({ name, label, rows=4 }) {
  return (
    <div className="flex flex-col">
      <label for={name} className="hidden">
        {label}
      </label>
      <textarea
        name={name}
        placeholder={label}
        rows={rows}
        className="form-field"
      ></textarea>
    </div>
  );
}

FormField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  rows: PropTypes.number,
};

export default FormField;
