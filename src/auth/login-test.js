import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Input from '../forms/Input';
import AuthService from './auth.service';
import Form from '../forms/form';
import Form2 from '../forms/form2';
import Form3, { FormContext } from '../forms/form3';



/**
 * The Login component
 * @See the Register component for more details
 * @param {*} props 
 */
export default function LoginComponent(props) {

    const [formData, setFormData] = useState({ email: '', password: '' })
    let [errors, setErrors] = useState({ email: true, password: true })
    // const [form_submitted, setFormSubmitted] = useState(false)

    // const options = { handleInputData, form_submitted }

    // function handleSubmit(event) {

    //     event.preventDefault()
    //     setFormSubmitted(form_submitted => form_submitted = true )

    //     if(errors.email || errors.password){
    //         event.stopPropagation()
    //     } 

    //     // TODO: submit the form to the api and store user info in an api
    //     const location = {
    //         pathname: `/dashboard`,
    //         state: { fromLogin: true, message: "Login sucessful" }
    //     }
    //     props.history.push(location)
    // }
    // /**
    //  * retrieves data from the child input components and pass it to the parent form
    //  * an example of lifting state up
    //  * @param {*} data 
    //  */
    // function handleInputData(data) {
    //     setFormData(formData => ({ ...formData, ...data.data }) )
    //     setErrors(errors =>  ({ ...errors, ...data.errors }) )
    // }

    // useEffect(() => {
    //     // if the user is logged in redirect away from this component
    //     // just a dummy auth service
    //     if (AuthService.show('user')) {

    //         const location = {
    //             pathname: `/dashboard`,
    //             state: { fromLogin: true, message: "You are already loggedin" }
    //         }
    //         props.history.push(location)
    //     }
    // })

    return (
        <div className={'container py-5 my-3'} style={{ height: '100vh' }} id="main">
            <div className={'row justify-content-center'}>
                <div className={"col-12 col-md-6 col-lg-4 card px-3 py-4"}>
                    <div className={'text-center'}>
                        <h4>Sign in</h4>
                    </div>
                    {/* <Form formObj={{ email: '', password: '' }} errObj={{ email: true, password: true }}> 
                        <Input name="email" type="email" value={formData.email}  conditions={'required|email'} />
                        <Input name="password" type="password" value={formData.password} conditions={'required|min:6|max:50'} />
                        <Button type="submit" variant="success" block>Login</Button>
                    </Form> */}
                    {/* <Form2 formObj={{ email: '', password: '' }} action={props.history}>
                        <Input name="email" type="email"  conditions={'required|email'} />
                        <Input name="password" type="password" conditions={'required|min:6|max:50'} />
                        <Button type="submit" variant="success" block>Login</Button>
                    </Form2> */}
                    <Form3 formObj={{ email: '', password: '' }} action={props.history}>
                        <FormContext.Consumer>
                            {value => {
                                return <>
                                    <Input name="email" type="email" conditions={'required|email'} {...value} />
                                    <Input name="password" type="password" conditions={'required|min:6|max:50'} {...value} />
                                    {/* <Button type="submit" variant="success" block>{value.form_submitted ? 'Loading...' : 'Login'}</Button> */}
                                </>
                            }}
                        </FormContext.Consumer>

                    </Form3>
                    {/* <form name="login" className={'mb-3'} onSubmit={handleSubmit} autoComplete={'off'} noValidate={true}>
                        <Input name="email" type="email" value={formData.email} {...options} conditions={'required|email'} />
                        <Input name="password" type="password" value={formData.password} {...options} conditions={'required|min:6|max:50'} />
                        <Button type="submit" variant="success" block>Login</Button>
                    </form>  */}
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