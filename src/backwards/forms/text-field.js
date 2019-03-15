import React, { useState, useEffect, useRef } from 'react'
import Validator from 'validatorjs'
import PropTypes from 'prop-types';
import useInput from './useInput'


export default function TextField(props) {

    const val = useInput(props, props.name, 'text',   /**
     * This function performs validation of the input field
     * and returns data and error
     */
        function validateField(data, setErrors) {
            let rules = {[props.name]: props.conditions}
            let validate = new Validator(data, rules), errors = {[data.name]: false }
            if (validate.fails()) {
                errors = { [props.name]: validate.errors.first(props.name) }
            }
            // one can determine if api calls are necessary
            setErrors(errors)
            // to display the errors on the input field
            return { data, errors }
        })

    return val

}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleInputData: PropTypes.func.isRequired,
    form_submitted: PropTypes.bool.isRequired,
}

