import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Validator from 'validatorjs'


class Forgot extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            errors: {
              email: false
            }
        }

      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleInput = this.handleInput.bind(this)

    }

    handleInput(event){
      
      event.preventDefault()
      this.setState({[event.target.name]: event.target.value.toLowerCase() })

    }

    handleSubmit(event){

      event.preventDefault()

      let validate = new Validator({email:this.state.email}, {email: 'required|email'}),

      errors = {email: false}

      if(validate.fails()){
        errors = {email: validate.errors.first('email')}
      }

      this.setState({errors})

      if (errors.email) {
        return
      } else {
        console.log('submitted');
      }

    }

    render() {

       const errors = this.state.errors

        return(

          <section className="section-padding">
            <div  className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-5 card px-3 py-4">
                    <div>
                      <h5 className="text-center mb-3">Get password reset link</h5>
                    </div>
                  <form className="mx-3" onSubmit={this.handleSubmit} noValidate={true}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input className={`form-control ${errors.email && 'is-invalid'}`} value={this.state.email} id="email" type="email" 
                        name="email" onChange={this.handleInput}  required />
                        {errors.email && <span className={'text-danger'}>{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-block bg-success text-white">Send Password Reset Link</button>
                    </div>
                    <div className="form-row">
                      <div className="form-group col">
                        <p className="m-1"><Link to="/login">Go back to Login page</Link></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Forgot;

