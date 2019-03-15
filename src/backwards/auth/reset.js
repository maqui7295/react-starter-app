import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Validator from 'validatorjs'

function DisplayError(props) {
    return <span className="is-invalid text-danger">{props.message}</span>
}

class ResetPassword extends Component {


    constructor(props) {
        super(props);

        this.state = {
            password: '',
            password_confirmation: '',
            errors: {
                password: false
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)

    }

    handleSubmit(event) {

        event.preventDefault()

        let rules = {
            password: 'required|confirmed',
            // password: 'required|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/',
        }

        let data = { password: this.state.password, password_confirmation: this.state.password_confirmation },
            validate = new Validator(data, rules),
            errors = { password: false }

        if (validate.fails()) {
            errors = {
                password: validate.errors.first('password')
            }
        }

        this.setState({ errors })

        if (errors.password) {
            return
        } else {
            console.log('submitted')
            console.log(data)
        }

    }


    handleInput(event) {

        event.preventDefault()

        this.setState({ [event.target.name]: event.target.value.toLowerCase() });
    }

    
    render(){
        return(
            <div className="container section-padding">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-5 card py-4 px-3">
                        <h4 className="text-center">Reset Password</h4>
                        <form className="form-horizontal" role="form" noValidate={true} onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="password">New Password</label>
                                <input id="password" type="password" value={this.state.password} onChange={this.handleInput} 
                                    className={`form-control ${this.state.errors.password && 'is-invalid'} `} name="password" required />
                                {this.state.errors.password && <DisplayError message={this.state.errors.password} />}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password_confirmation">Confirm Password</label>
                                <input id="password_confirmation" value={this.state.password_confirmation} 
                                onChange={this.handleInput} type="password" 
                                    className={`form-control ${this.state.errors.password && 
                                    this.state.errors.password === 'The password confirmation does not match.'  
                                    && 'is-invalid'} `} name="password_confirmation" required />
                            </div>
                            <div className="form-group">
                                <div className="">
                                    <button type="submit" className="btn btn-block bg-primary text-white">
                                        Reset Password
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResetPassword;