import React, { useState, useEffect, useRef } from 'react'
import Validator from 'validatorjs'
import PropTypes from 'prop-types';
import useInput from './useInput'


export default function EmailField(props) {

    let name = props.name || 'email'

    const val = useInput(props, name, 'email',   /**
     * This function performs validation of the input field
     * and returns data and error
     */
        function validateField(data, setErrors) {
            let rules = { [name]: `email${props.conditions && '|' }${props.conditions}` }
            let validate = new Validator(data, rules), errors = { [name]: false }
            if (validate.fails()) {
                errors = { [name]: validate.errors.first(name) }
            }
            // one can determine if api calls are necessary
            setErrors(errors)
            // to display the errors on the input field
            return { data, errors }
        })

    return val

}

EmailField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    handleInputData: PropTypes.func.isRequired,
    form_submitted: PropTypes.bool.isRequired,
}

