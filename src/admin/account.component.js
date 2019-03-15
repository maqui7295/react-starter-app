import React, { useState } from "react";
// import AuthService from "../auth/auth.service";
import { Link } from "react-router-dom";
import Input from "../forms/Input";

export default function AccountComponent(props) {

  const [formData, setFormData] = useState({ username: props.username, email: props.email, 
                                             password: "", password_confirmation: ""});
  const [errors, setErrors] = useState({ username: false, email: false, password: false });
  const [form_submitted, setFormSubmitted] = useState(false);
  // let [editPassword, setEditPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setFormSubmitted(form_submitted => (form_submitted = true));

    if (!errors.email && formData.email !== "") {
      alert("form was successfully submitted");
    }
  }

  function handleInputData(data) {
    setFormData(formData => ({ ...formData, ...data.data }))
    setErrors(errors => ({ ...errors, ...data.errors }))
  }

  let error_block = [];
  if (errors.username || errors.email || errors.password || errors.test) {
    for (const e in errors) {
      if (errors.hasOwnProperty(e) && errors[e]) {
        error_block.push(errors[e]);
      }
    }
  }

  return (
    <div className={"container"}>
      <p>
        <Link to={`/dashboard/${props.match.params.email}`} className={"btn btn-secondary"}>
          Back to Dashboard
        </Link>
      </p>

      <div className={"row"}>
        <div className={"col-12 col-md-6"}>
          <div className="card px-3 py-4">
            <div>
              <h4 className={"text-center"}>Account</h4>
            </div>
            {form_submitted && error_block.length !== 0 && (
              <ul className={"list-unstyled alert alert-danger text-bold"}>
                <p>Please fix the following errors</p>
                {error_block.map(err => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            )}
            <form
              id="reg_form"
              className={"mb-3"}
              onSubmit={handleSubmit}
              autoComplete="off"
              noValidate={true}
            >
              <Input
                name="username"
                conditions={"required|min:3|max:50|alpha_num"}
                type="text"
                form_submitted={form_submitted}
                handleInputData={handleInputData}
                value={formData.username}
              />
              <Input
                name="email"
                conditions={"required|min:3|max:50|email"}
                type="email"
                form_submitted={form_submitted}
                handleInputData={handleInputData}
                value={formData.email}
              />
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-block bg-success text-white"
                >
                  Update Account
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className={"col-12 col-md-6"}>
          <div className="card px-3 py-4">
            <div>
              <h4 className={"text-center"}>Edit Password</h4>
            </div>
            {form_submitted && error_block.length !== 0 && (
              <ul className={"list-unstyled alert alert-danger text-bold"}>
                <p>Please fix the following errors</p>
                {error_block.map(err => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            )}

            <form
              id="reg_form"
              className={"mb-3"}
              onSubmit={handleSubmit}
              autoComplete="off"
              noValidate={true}
            >
              <div>
                <Input name="password" />
                <Input name="password_confirmation" />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-block bg-success text-white"
                >
                  Update Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
