import React, { useState } from "react";
// import AuthService from "../auth/auth.service";
import { Link } from "react-router-dom";
import Input from "../forms/Input";

export default function ProfileComponent(props) {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        country: '',
        state: '',
        street_adress_1: "",
        street_adress_2: "",
        billing_address_1: "",
        billing_address_2: ""
    });
    
    let [errors, setErrors] = useState({
        username: false,
        email: false,
        password: false
    });
    let [form_submitted, setFormSubmitted] = useState(false);


    let options = {
        type: "text",
        form_submitted,
        handleInputData
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormSubmitted(submitted => (form_submitted = true));

        console.log(props);

        // if (!errors.email && formData.email !== "") {
        //     alert("form was successfully submitted");
        // }
    }

    function handleInputData(data) {
        setFormData(formData => {
            return { ...formData, ...data.data };
        });

        setErrors(errors => {
            return { ...errors, ...data.errors };
        });
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
                <Link
                    to={`/dashboard/${props.match.params.email}`}
                    className={"btn btn-secondary"}
                >
                    Back to Dashboard
        </Link>
            </p>

            <div className={"row"}>
                <div className={"col-12 col-md-12"}>
                    <div className="card px-3 pt-4">
                        <div>
                            <h4 className={"text-center"}>Profile</h4>
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
                            className={"mb-3 py-3"}
                            onSubmit={handleSubmit}
                            autoComplete="off"
                            noValidate={true}
                        >

                        <div className={'form-row'}>
                           <div className={'col-12 col-md-6 col-lg-4'}>
                                    <Input
                                        name="first_name"
                                        conditions={"required|min:3|max:50|alpha_num"}
                                        {...options}
                                        value={formData.first_name}
                                    />
                                    <Input
                                        name="last_name"
                                        conditions={"required|min:3|max:50|alpha_num"}
                                        {...options}
                                        value={formData.last_name}
                                    />
                                    <Input
                                        name="country"
                                        conditions={"required|min:3|max:50|alpha_num"}
                                        {...options}
                                        value={formData.country}
                                    />
                                    <Input
                                        name="state"
                                        conditions={"required|min:3|max:50|alpha_num"}
                                        {...options}
                                        value={formData.state}
                                    />
                           </div>
                           <div className={'col-12 col-md-6 col-lg-7 offset-lg-1'}>
                                    <Input
                                        name="street_address_1"
                                        conditions={"required|min:3|max:50|alpha_num"}
                                        {...options}
                                        value={formData.street_adress_1}
                                    />
                                    <Input
                                        name="street_address_2"
                                        conditions={"required|min:3|max:50|alpha_num"}
                                        {...options}
                                        value={formData.street_adress_2}
                                    />
                                    <Input
                                        name="billing_address_1"
                                        conditions={"required|min:3|max:50|alpha_num"}
                                        // type="text"
                                        // form_submitted={form_submitted}
                                        // handleInputData={handleInputData}
                                        {...options}
                                        value={formData.billing_address_1}
                                    />
                                    <Input
                                        name="billing_address_2"
                                        conditions={"required|min:3|max:50|alpha_num"}
                                        {...options}
                                        value={formData.billing_address_2}
                                    />
                           </div>
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
