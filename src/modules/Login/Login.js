import React from "react";
import { Formik } from "formik";
import {login} from "./actions";
import logo from "../../assets/Images/logo.PNG";

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class _Login extends React.Component {
  render() {
    const onSubmit = (values, actions) => {
        console.log('submitted', values);
        login({ ...values }).then(() => {
            console.log('loggedin');
        })
    };
    
    return (
      <div className="form-container">
      <img src={logo} alt="company logo"/>
        <h3>Login</h3>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password){
                errors.password = "Required";
            } else if(values.password.length < 6){
                    errors.password = "Password too small";
            }
            return errors;
          }}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
            Email
            <div className="form-input">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              </div>
              {errors.email && touched.email && errors.email}
              Password
              <div className="form-input">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              </div>
              {errors.password && touched.password && errors.password}
              <div className="form-input">
              <button type="submit" className="submit-button">
                Submit
              </button>
              </div>
            </form>
          )}
        </Formik>
        <p>New User? </p>
        <button onClick={() => this.props.history.push('/signup')}>Signup</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
      login
  }, dispatch);
}

function mapStateToProps(state) {
  return { };
}

export const Login = withRouter(connect(mapStateToProps, mapDispatchToProps)(_Login));