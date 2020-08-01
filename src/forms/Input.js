import React, { useState, useEffect, useRef, useContext } from 'react';
import Validator from 'validatorjs';
import PropTypes from 'prop-types';

/**
 * this is the default input component
 * @param {} props
 */
export default function Input(props) {
  /** name of the input field
   *   initial value also comes from the input
   */
  const name = props.name;
  const [value, setValue] = useState(props.value);
  let [errors, setErrors] = useState({ [name]: false });

  /**
   * call the validateValue function on blur
   * @param {*} e
   */
  function handleBlur(e) {
    props.handleInputData(validateValue());
  }

  /**
   * sets the value of the form field as input changes
   * @param {*} e
   */
  function handleChange(e) {
    setValue(e.target.value.trim().toLowerCase());
  }

  /**
   * This function performs local validation of the input field
   * and returns data and error
   */
  function validateValue() {
    // using object compute property syntax here
    // the name of the input field is always the property of the
    let data = { [name]: value },
      rules = { [name]: props.conditions },
      errors = { [name]: false };

    let validate = new Validator(data, rules);

    if (validate.fails()) {
      errors = { [name]: validate.errors.first(name) };
    }

    setErrors(errors);
    // to display the errors on the input field
    return { data, errors };
  }

  // useEffect(() => {
  //   if (props.isSubmitted) {
  //     let count = 0
  //     console.log('submitted')
  //     // props.handleInputData(validateValue());
  //   }
  // });

  return (
    <div className='form-group'>
      <label htmlFor={name} className={'text-capitalize'}>
        {name.replace(/_/g, ' ')}
      </label>
      <input
        type={props.type}
        id={name}
        name={name}
        value={value}
        className={`form-control ${errors[name] && 'is-invalid'}`}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors[name] && (
        <span className='is-valid text-danger'>{errors[name]}</span>
      )}
    </div>
  );
}

/**
 * required props
 */
Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  conditions: PropTypes.string.isRequired,
  handleInputData: PropTypes.func,
  isSubmitted: PropTypes.bool,
};
