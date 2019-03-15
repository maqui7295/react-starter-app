import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
import Input from '../forms/Input';

export default function LoginComponent(props) {

    const [formData, setFormData] = useState({email: '', password: ''})
    let [errors, setErrors] = useState({email: true, password: true})
    const [form_submitted, setFormSubmitted] = useState(false)
    const options = { handleInputData, form_submitted }

    /**
     * listens to the submit event and performs the submission
     * @param {*} event 
     */
    function handleSubmit(event) {

        event.preventDefault()
        setFormSubmitted(form_submitted => form_submitted = true )

        if(errors.email || errors.password){
            event.stopPropagation()
        } else {
            console.log('submitted')
            console.log(formData)
            // TODO: submit the form to the api and store user info in an api
            const location = {
                pathname: `/dashboard/${formData.email}`,
                state: { fromLogin: true, message: "Login sucessful" }
            }
            props.history.push(location)
        }

    }
    /**
     * retrieves data from the child input components and pass it to the parent form
     * an example of lifting state up
     * @param {*} data 
     */
    function handleInputData(data) {
        setFormData(formData => {
            return { ...formData, ...data.data };
        });

        setErrors(errors => {
            return { ...errors, ...data.errors };
        });
        
    }

        return (
            <div className={'container py-5 my-3'} style={{height: '100vh'}} id="main">
                <div className={'row justify-content-center'}>
                        <div className={"col-12 col-md-6 col-lg-4 card px-3 py-4"}>
                            <div className={'text-center'}>
                                <h4>Sign in</h4>
                            </div>
                            <form name="login" className={'mb-3'} onSubmit={handleSubmit} autoComplete={'off'} noValidate={true}>
                                <Input name="email" type="email" value={formData.email} {...options} conditions={'required|email'} />
                                <Input name="password" type="password" value={formData.password} {...options} conditions={'required|min:6|max:50'} />
                                {/* <Button type="submit" variant="success" block>Login</Button> */}
                                <button type="submit" class="btn btn-success btn-block">Register</button>
                            </form> 
                            <div className={"row"}>
                                <div className={"col-6"}>
                                    <p><Link to={'/forgot-password'}>Forgot password?</Link></p>
                                </div>
                                <div className={"col-6 text-right"}>
                                    <p><Link to={"/register"}>Yet to register?</Link></p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
 
}