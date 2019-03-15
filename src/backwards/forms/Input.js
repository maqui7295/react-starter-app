import React, {useState, useEffect, useRef } from 'react'
import Validator from 'validatorjs'
import PropTypes from 'prop-types';


/**
 * this is the default input component
 * @param {} props 
 */
export default function Input(props) {

    const name = props.name
    const [text, setText] = useState(props.value)
    let   [errors, setErrors] = useState({[name]: false})

    /**
     * How do I validate on blur, with an API call?
     */
    function handleBlur(){
        validateText()
    }

    function handleChange(e){
        setText(e.target.value)
    }

    /**
     * This function performs local validation of the input field
     * and returns data and error
     */
    function validateText() {

        let data = { [name]: text }, rules = { [name]: props.conditions }, errors = {[name]: false}
        let validate = new Validator(data, rules)
        if (validate.fails()) {
            errors = { [name]: validate.errors.first(name) }
        }
        setErrors(errors)
        // to display the errors on the input field
        return { data, errors }
    }

    useEffect(() => {
        if (props.form_submitted) {
          props.handleInputData(validateText())
        }
    }) 

    // useEffect(() => {
    //     if (text) {
    //         setErrors({ [name]: false })
    //     }
    // })

    return (
        <div className="form-group">
            <label htmlFor={name} className={'text-capitalize'}>{name.replace(/_/g, " ")}</label>
            <input type={props.type} id={name} name={name} value={text}
                className={`form-control ${errors[name] && 'is-invalid'}`}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors[name] && <span className="is-valid text-danger">{errors[name]}</span>}
        </div>
    );

}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleInputData: PropTypes.func.isRequired,
    form_submitted: PropTypes.bool.isRequired,
}

