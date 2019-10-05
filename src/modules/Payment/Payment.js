import React from "react";
import {Formik} from "formik";

export default class Payment extends React.Component{
    render(){
        return(
            <div className="form-container">
              <h3>Enter Card Details</h3>
                <Formik
                initialValues={{ cardno: "", expiry: "", cvv: "", name: "" }}
                validate={values => {
                    let errors = {};
                    if (!values.cardno) {
                    errors.cardno = "Required";
                    }
                    if (!values.expiry){
                        errors.expiry = "Required";
                    }
                    if (!values.cvv){
                        errors.cvv = "Required";
                    }
                    if (!values.name){
                        errors.name = "Required";
                    }
                    return errors;
                }}
                onSubmit={values => {
            console.log("Wee Successful");
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
            Card Number *
            <div className="form-input">
              <input
                type="number"
                name="cardno"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cardno}
              />
              </div>
              {errors.cardno && touched.cardno && errors.cardno}
              Expiry *
              <div className="form-input">
              <input
                type="number"
                name="expiry"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.expiry}
              />
              </div>
              {errors.expiry && touched.expiry && errors.expiry}
              CVV *
              <div className="form-input">
              <input
                type="number"
                name="cvv"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cvv}
              />
              </div>
              {errors.cvv && touched.cvv && errors.cvv}
              Name *
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
              <div className="form-input">
              <button type="submit" className="submit-button">
                Submit
              </button>
              </div>
            </form>
          )}
        </Formik>    
        </div>
        );
    }
}