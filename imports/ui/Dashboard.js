import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Dashboard extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={this.onLogout.bind(this)}>Log out</button>
      </div>
    );
  }
}
