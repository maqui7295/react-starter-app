import React, {useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';


/**
 * This function is used to compose input fields that require special conditions
 * such as an api call
 * @param {*} props 
 * @param {*} name 
 * @param {*} inputType 
 * @param {*} validateFn 
 */
export default function useInput(props, name, inputType, validateFn) {

    const [value, setValue] = useState(props.value)
    let   [errors, setErrors] = useState({[name]: false})

    let data = { [name]: value }

    const inputField = useRef(null)

    /**
     * @param {*} e
     */
    function handleBlur(e){
        validateFn(data, setErrors)
    }
    
    /**
     * 
     * @param {*} e 
     */
    function handleChange(e){
        setValue(e.target.value)
        setErrors({ [name]: false })
    }


    useEffect(() => {
        if (props.form_submitted) {
          props.handleInputData(validateFn(data, setErrors))
        }
    }) 

    useEffect(() => {
         inputField.current.addEventListener('change', function(){
             console.log('changed')
         })
    }, [inputField])

    return (
        <div className="form-group" onTouchStart={e => console.log('div was touched')}>
            <label htmlFor={name} className={'text-capitalize'}>{ props.children ||  name.replace(/_/g, " ") }</label>
            <input ref={inputField} type={inputType} id={name} name={name} value={value}
                className={`form-control ${errors[name] && 'is-invalid'}`}
                onChange={handleChange}
                onBlur={handleBlur}
                onTouchStart={e => console.log('touch start')}
                onTouchEnd={e => console.log('touch end')}
                onTouchCancel={e => console.log('touch canceled')}
            />
            {errors[name] && <span className="is-valid text-danger">{errors[name]}</span>}
        </div>
    );

}

useInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleInputData: PropTypes.func.isRequired,
    form_submitted: PropTypes.bool.isRequired,
}

