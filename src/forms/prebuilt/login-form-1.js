import React, { useState } from 'react'
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button'
import Input from '../input';
import Form from '../form-simple';

/**
 * The Login component
 * @See the Register component for more details
 * @param {*} props 
 */
export default function LoginForm(props) {

    const [data, setData] = useState({ email: '', password: '' })

    function postData(data){
       props.login(data)
    }

    return (
      
        <Form
            name="login"
            className={"mb-3"}
            action={postData}
            autoComplete={"off"}
            noValidate={true}
            formObj={data}
        >
         
        <Input
            name="email"
            type="email"
            value={data.email}
            conditions={"required|email"}
        />
        <Input
            name="password"
            type="password"
            value={data.password}
            conditions={"required|min:6|max:50"}
        />
        <Button type="submit" variant="success" block>Login</Button>
                   
        </Form>
    );

}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};