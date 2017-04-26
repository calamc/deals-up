import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <header>
        <div className="hero-text-box">
          <h1>Find deals in your area.</h1>
          <Link className="btn-home" to="/signup">Add your first deal today.</Link>
        </div>


        <Link className="btn" to="/login">Log in</Link>
        <Link className="btn" to="/signup">Sign up</Link>
      </header>
    );
  }
}
