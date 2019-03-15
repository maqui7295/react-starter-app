import React, {useState, useEffect, useRef} from 'react'
import {Link,} from 'react-router-dom'
import AuthService from './auth.service';
import Input from '../forms/Input';
import PasswordField from '../forms/password-field';
// import Button from 'react-bootstrap/Button'


export default function RegisterComponent(props) {

    const [errors, setErrors] = useState({ username: true, email: true, password: true, password_confirmation: true})
    const [formData, setFormData] = useState({username: '', email: '', password: '', password_confirmation: ''})
    const [form_submitted, setFormSubmitted] = useState(false)
    const options = { handleInputData, form_submitted }
    const form = useRef()

    function handleSubmit(event){
        
        event.preventDefault()
        setFormSubmitted(form_submitted => form_submitted = true)

        if (errors.email || errors.password || errors.username) {
            event.stopPropagation(); return;
        } else {
            console.log('submitted')
            console.log(formData)
            // TODO: submit to an api and store the payload in the localStorage
            if(AuthService.create(formData)){
                const location = { pathname: `/dashboard/${formData.email}`,
                                  state: { fromRegister: true, message: "Account creation was successful." }
                }
                props.history.push(location)
            }
        }
    }

    function handleInputData(data){
        setFormData(formData => { return { ...formData, ...data.data }})
        setErrors(errors => { return { ...errors, ...data.errors }})
    }

    return(

        <div className={'container mt-3 py-5'}>
            <div className={'row justify-content-center'}>
                    <div className="col-12 col-md-6 col-lg-4 card px-3 py-4">
                        <div>
                            <h4 className={'text-center'}>Sign up</h4>
                        </div>
                        <form ref={form} name="reg_form" className={'mb-3'} onSubmit={handleSubmit} autoComplete="off" noValidate={true}>
                            <Input name="username" type="text" value={formData.username} {...options} conditions={'required'} />
                            <Input name="email" type="email" value={formData.email} {...options} conditions={'required|email'} />
                            <PasswordField value={formData.password} {...options} conditions={'min:8|max:50'}
                               confirm={formData.password_confirmation} />
                            <Input name="password_confirmation" type="password" value={formData.password_confirmation} 
                              {...options} conditions={'required|min:8|max:50'} />
                              <button type="submit" class="btn btn-success btn-block">Register</button>
                            {/* <Button type="submit" variant="success" block>Register</Button> */}
                        </form>
                            <p>Already have an account? <Link to={'/login'}>Sign in</Link> </p>
                    </div>
            </div>
        </div>
    );
}