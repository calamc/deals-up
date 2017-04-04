import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the homepage</h1>

        links

        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    );
  }
}
