import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";

/**
 * The Form Component
 * @See the Register component for more details
 * @param {Object} props 
 */
export default function Form(props) {

    const [formData, setFormData] = useState(props.formObj)
    let   [ errors, setErrors] = useState(createErrors(props.formObj))
    const [isSubmitted, setIsSubmitted] = useState(false)

    function createErrors(formData) {
        let errors = {};
        let errArr = Object.keys(formData).map(key => ({ [key]: true }))
        for (const i of errArr)
            errors = { ...errors, ...i }
        return errors
    }

    function handleSubmit(event) {
        event.preventDefault()
        setIsSubmitted(true)
        if (errors.email || errors.password) {
            return
        }
        props.submitcallback(formData)
    }

   
    const children = React.Children.map(props.children, child => {

        if(child.props.type !== "submit")
          
            return React.cloneElement(child, {
                            handleInputData: (data) => {
                                    setFormData(formData => ({ ...formData, ...data.data }))
                                    setErrors(errors => ({ ...errors, ...data.errors }))
                            },
                            isSubmitted
                        })
        
                        // TODO: REMEMBER TO SET form_submitted to false
        return React.cloneElement(child, {}, isSubmitted ? 'Loading....': 'Login')

    })


    return (
        <form className={'mb-3'} onSubmit={handleSubmit} autoComplete={'off'} noValidate={true}>
            {children}
        </form>
    );

}

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  submitcallback: PropTypes.func.isRequired,
  formObj: PropTypes.object.isRequired
};