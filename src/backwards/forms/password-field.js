import React, { useState, useEffect, useRef } from 'react'
import Validator from 'validatorjs'
import PropTypes from 'prop-types';
import useInput from './useInput'



/**
 * This is a password field designed specially for cases that require confirmation
 * for those that don't, use the Input field and set its type to password
 * @param {*} props 
 */
export default function PasswordField(props) {

    const name = props.name || 'password'

    const val = useInput(props, name, 'password',   /**
     * This function performs validation of the input field
     * and returns data and error
     */
        function validateField(data, setErrors) {

            let passData = { ...data, ...{ password_confirmation: props.confirm } }
            let rules = { [name]: `required${props.conditions && '|'}${props.conditions}|confirmed` }
            let validate = new Validator(passData, rules), errors = { [name]: false }
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

PasswordField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    confirm: PropTypes.string.isRequired,
    handleInputData: PropTypes.func.isRequired,
    form_submitted: PropTypes.bool.isRequired,
}

