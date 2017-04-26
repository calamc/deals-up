import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length <6) {
      return this.setState({error: 'Password must be more than 6 characters'});
    }

    this.props.createUser({email, password}, (err) => {
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__whitebox">
          <h1>Sign up: DealsUP</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="email" name="email" ref="email" placeholder="Enter your email"/>
            <input type="password" name="password" ref="password" placeholder="Create new password"/>
            <button className="btn">Create Account</button>
          </form>

          <Link to="/login">Registered? Log in here.</Link>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  createUser:React.PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    createUser: Accounts.createUser
  }
}, Signup);
