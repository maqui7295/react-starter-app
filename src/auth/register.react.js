import React, {useState, useEffect, useLayoutEffect, useRef} from 'react'
import {Link,} from 'react-router-dom'
import AuthService from './auth.service';
import Input from '../forms/input';
import PasswordField from '../forms/password-field';
import Button from 'react-bootstrap/Button'

/**
 * Registration component
 * @param {*} props 
 */
export default function RegisterComponent(props) {


    /**  
     * The initial error state of the input fields are set to true since the form is invalid by default.
     * The form submission state is set in order to inform the input fields,
     * this is required for validation after submission as each input field maintains and validates
     * the option variable is just used to reduce typing (easily add a method and the form state to the input fields)
     */
    
    const [errors, setErrors] = useState({ username: true, email: true, password: true, password_confirmation: true})
    const [formData, setFormData] = useState({username: '', email: '', password: '', password_confirmation: ''})
    const [form_submitted, setFormSubmitted] = useState(false)
    const options = { handleInputData, form_submitted }
    const form = useRef()
    
    function handleSubmit(event){
        
        event.preventDefault()
        // always resetting the form submission state to true on each button click
        // to avoid staleness which may affect validation
        setFormSubmitted(form_submitted => form_submitted = true)

        if (errors.email || errors.password || errors.username) {
            event.stopPropagation(); return;
        } 
      
        // TODO: submit to an api and store the payload in memory
        if(AuthService.create(formData)){
            const location = { pathname: `/dashboard`,
                                state: { fromRegister: true, message: "Account creation was successful." }
            }
            props.history.push(location)
        }
    
    }
    
    /**
     * receives data from the individual (independent) input field (component) and update the parent form state
     * as well as the error state of this component
     * @param {*} inputData - contains data/value as well as errors from the input component
     */
    function handleInputData(inputData){
        setFormData(formData => ({ ...formData, ...inputData.data }) )
        setErrors(errors =>  ({ ...errors, ...inputData.errors }) )
    }

    // useEffect(() => {
    //     // if the user is registered in redirect away from this component
    //     // just a dummy auth service for now
    //     if(AuthService.show('user')){
    //         const location = {
    //             pathname: `/dashboard`,
    //             state: { fromRegister: true, message: "You are already loggedin" }
    //         }
    //         props.history.push(location)
    //     }
    // })

    return (
      <div className={"container mt-3 py-5"}>
        <div className={"row justify-content-center"}>
          <div className="col-12 col-md-6 col-lg-4 card px-3 py-4">
            <div>
              <h4 className={"text-center"}>Sign up</h4>
            </div>
            {form_submitted &&
              (errors.email || errors.password || errors.username) && (
                <ul className="list-unstyled">
                  {Object.values(errors).map(
                    (error, i) =>
                      error && (
                        <li key={i} className="alert alert-danger">
                          {error}
                        </li>
                      )
                  )}
                </ul>
              )}
            <form
              ref={form}
              name="reg_form"
              className={"mb-3"}
              onSubmit={handleSubmit}
              autoComplete={"off"}
              noValidate={true}
            >
              <Input
                name="username"
                type="text"
                value={formData.username}
                {...options}
                conditions={"required|alpha_num"}
              />
              <Input
                name="email"
                type="email"
                value={formData.email}
                {...options}
                conditions={"required|email"}
              />
              <PasswordField
                value={formData.password}
                {...options}
                conditions={"min:8|max:50"}
                confirm={formData.password_confirmation}
              />
              <Input
                name="password_confirmation"
                type="password"
                value={formData.password_confirmation}
                {...options}
                conditions={"required|min:8|max:50"}
              />
              <Button type="submit" variant="success" block>Register</Button>
            </form>
            <p>
              Already have an account? <Link to={"/login"}>Sign in</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    );
}