import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export class Login extends React.Component {
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

    this.props.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({error: 'Wrong credentials. Try again'});
      } else {
        this.setState({error: ''});
      }
    });

  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__whitebox">
        <h1>Login: DealsUP</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" name="email" ref="email" placeholder="Email"/>
          <input type="password" name="password" ref="password" placeholder="Password"/>
          <button className="btn">Log in</button>
        </form>
        <Link to="/signup">Not signed up? Click here.</Link>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginWithPassword: React.PropTypes.func.isRequired
};

export default createContainer(() => {
  return  {
    loginWithPassword: Meteor.loginWithPassword
  };
}, Login);
