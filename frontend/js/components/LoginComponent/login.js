import React, { Component } from 'react';
import store from 'store';
import { Col, Button } from 'reactstrap';
import FoodgramValidator from '../../foodgramValidator';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    store.remove('token');
  }
  render = () => {
    return (
      <section className="login">
        <Col className="logo-container">
          <span className="auth-logo">Foodgram</span>
        </Col>
        <Col xs={{ size: 10, offset: 1}} id="form">
          <form ref="loginForm" onSubmit={this.handleSubmit} className="form-inline">
            <input type="text" ref="login" placeholder="Login" className="form-control auth-input"/>
            <input type="password" ref="password" placeholder="Password" className="form-control auth-input"/>
            <Button type="submit" className="auth-button">Log in</Button>
          </form>
        </Col>
      </section>
    );
  };
  handleSubmit(e) {
    e.preventDefault();
    const login = this.refs.login.value;
    const password = this.refs.password.value;
    FoodgramValidator.login(login, password, this.props.addAlert)
      .then(()=>{
        this.props.login(login, password);
        this.refs.loginForm.reset();
      })
      .catch(()=>{});
  }
}

Login.propTypes = {
  login: React.PropTypes.func,
  addAlert: React.PropTypes.func,
};

export default Login;
