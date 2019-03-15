import React, { useState } from 'react'
import PropTypes from "prop-types";

export const FormContext = React.createContext()

/**
 * The Login component
 * @See the Register component for more details
 * @param {Object} props 
 */
export default function Form(props) {

    const [formData, setFormData] = useState(props.formObj)
    const [errors, setErrors] = useState(createErrors(props.formObj))
    const [isSubmitted, setIsSubmitted] = useState(false)

    function createErrors(formData) {

        let errors = {},
            errArr = Object.keys(formData).map(key => ({ [key]: true }))

        for (const i of errArr)
            errors = { ...errors, ...i }

        return errors
    }


    function handleSubmit(event) {
        event.preventDefault()
        setIsSubmitted(true);
        if(errors.email || errors.password){
            return
        }
        props.submitcallback(formData)
    }

    function handleInputData(data) {
        setFormData(formData => ({ ...formData, ...data.data }))
        setErrors(errors => ({ ...errors, ...data.errors }))
    }

    return (

        <FormContext.Provider value={{
            handleInputData,
            isSubmitted
        }}>
            <form className={'mb-3'} onSubmit={handleSubmit} autoComplete={'off'} noValidate={true}>
                {props.children}
            </form>
        </FormContext.Provider>
    );

}

Form.propTypes = {
    children: PropTypes.element.isRequired,
    submitcallback: PropTypes.func.isRequired,
    formObj: PropTypes.object.isRequired
};