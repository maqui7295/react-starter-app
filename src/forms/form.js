import React, { useState, useCallback } from 'react'
import PropTypes from "prop-types";


export const FormContext = React.createContext()

function changeObjectValues(obj, newValue) {

    let newObj = {},
        arrVals = Object.keys(obj).map(key => ({ [key]: newValue }))

    for (const i of arrVals)
        newObj = { ...newObj, ...i }
    return newObj
}

/**
 * The Login component
 * @See the Register component for more details
 * @param {Object} props 
 */
export default function Form(props) {

    const [formData, setFormData] = useState(props.formObj)
    const [errors, setErrors] = useState(() => {
        return changeObjectValues(props.formObj, true);
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        setIsSubmitted(true);
        if(errors.email || errors.password){
            return
        }
        props.action(formData)
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
    action: PropTypes.func.isRequired,
    formObj: PropTypes.object.isRequired
};