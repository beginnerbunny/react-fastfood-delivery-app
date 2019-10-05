import React from "react";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from "../../assets/Images/logo.PNG";

export default class Feedback extends React.Component {
  render() {

    return (
      <div className="form-container">
          <img src={logo} alt="company logo"/>
        <h3>Your order was successfully placed !</h3>
        <p>Please provide your feedback</p>
        Name
        <input type="text" name="name" />
        <hr/>
        E-mail
        <input type="email" name="email" />
        <hr/>
        Message
        <textarea name="feedback" rows="4"/>
        <p>Your feedback is valuable to us</p>
        <button onClick={() => this.props.history.push('/')}>Submit</button>
        <hr/>
        <p>Back to Home screen</p>
        <button onClick={() => this.props.history.push('/')}>Home</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
    }, dispatch);
}

function mapStateToProps(state) {
    return { };
}

