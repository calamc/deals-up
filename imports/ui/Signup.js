import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
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

    Accounts.createUser({email, password}, (err) => {
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });

    // this.setState({
    //   error: 'Ooops error'
    // });
  }
  render() {
    return (
      <div>
        <h1>Sign up to DealsUP</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" name="email" ref="email" placeholder="Email"/>
          <input type="password" name="password" ref="password" placeholder="Password"/>
          <button>Create your Account</button>
        </form>

        <Link to="/login">Already registered? Log in here.</Link>
      </div>
    );
  }
}
