import React from "react";
import { Formik } from "formik";
import { signUp } from "./actions";
import logo from "../../assets/Images/logo.PNG";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router';

export default class Signup extends React.Component {
  render() {
    return (
      <div className="form-container">
      <img src={logo} alt="company logo"/>
        <h3>Signup</h3>
        <Formik
          initialValues={{ email: "", password: "", phone: "", name: "", address: ""}}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "Password too small";
            }
              if (!values.phone){
                errors.phone = "Required"
            } 
            if (!values.name){
                errors.name = "Required"
            }
            if (!values.address){
                errors.address = "Required"
            }
            return errors;
          }}
          onSubmit={values => {
            console.log("Calling Sign Up")
            signUp(values);
            this.history.push('/');
          }}
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
            Name
              <div className="form-input">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>
              {errors.name && touched.name && errors.name}
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
              Enter Mobile Number
              <div className="form-input">
                <input
                  type="number"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
              </div>
              {errors.phone && touched.phone && errors.phone}
              Enter Address
              <div className="form-input">
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
              </div>
              {errors.address && touched.address && errors.address}
              <div className="form-input">
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
        <p>Already Registered?</p>
        <button onClick={() => this.props.history.push('/login')}>Login</button>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      signUp
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {};
}

export const SignUp = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(_SignUp));
