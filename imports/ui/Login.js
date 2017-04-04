import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
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

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({error: 'Wrong credentials. Try again'});
      } else {
        this.setState({error: ''});
      }
    });

  }
  render() {
    return (
      <div>
        <h1>Log Into DealsUP</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" name="email" ref="email" placeholder="Email"/>
          <input type="password" name="password" ref="password" placeholder="Password"/>
          <button>Log in</button>
        </form>
        <Link to="/signup">Not registered? Sign up.</Link>
      </div>
    );
  }
}
