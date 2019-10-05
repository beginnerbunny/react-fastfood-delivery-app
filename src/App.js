import React, { Component } from 'react';
import Dashboard from './modules/Dashboard/Dashboard';
import background from './assets/Images/background.jpg';
import logo from './assets/Images/logo.PNG';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <img className = "brand-image" src={background} alt="food image"></img>
          <div className="title">
            <div className="image-container">
              <img src={logo} alt="logo"/>
              <h1>Magic Kitchen</h1>
            </div>
            <p>Delivering 'Maa ke haath ka khaana' since 1969</p>
            <button id="cta-button" onClick={() => this.props.history.push('/signup')}>Register now</button>
            <div className="social-icons">
              <a href="https://www.facebook.com/Magic-Kitchen-Site-109060950501718/?modal=admin_todo_tour"><i className="fab fa-facebook-square" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-youtube" /></a>
              <a href="#"><i className="fab fa-linkedin" /></a>
              </div>
          </div>
        </div>
        <Dashboard />
        </div>
    );
  }
}

export default App;
