import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Input from "../input";
import Form, { FormContext } from "../form";

/**
 * The Login component
 * @See the Register component for more details
 * @param {*} props
 */
export default function LoginForm(props) {
  const [data, setData] = useState({ email: "", password: "" });

  function postData(data) {
    console.log(data);
    // props.login(data)
  }

  return (
    <Form
      name="login"
      className={"mb-3"}
      action={postData}
      noValidate={true}
      formObj={data}
    >
      <FormContext.Consumer>
        {value => (
          <>
            <Input
              name="email"
              type="email"
              value={data.email}
              {...value}
              conditions={"required|email"}
            />
            <Input
              name="password"
              type="password"
              value={data.password}
              {...value}
              conditions={"required|min:6|max:50"}
            />
            <Button type="submit" variant="success" block>
              Login
            </Button>
          </>
        )}
      </FormContext.Consumer>
    </Form>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};
