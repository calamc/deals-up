import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

export const PrivateHeaderNav = (props) => {
    return (
      <div className="header">
        <div className="header__insideWrapper">
          <Link to="/dashboard" className="header__title">{props.title}</Link>
          <button className="btn btn-dashboard-header-text" onClick={() => props.handleLogout()}>Log out</button>
        </div>
      </div>
    );
};

// export default class PrivateHeaderNav extends React.Component {
//   onLogout() {
//     Accounts.logout();
//   }
//   render() {
//     return (
//       <div className="header">
//         <div className="header__insideWrapper">
//           <h1 className="header__title">{this.props.title}</h1>
//           <button className="btn btn-dashboard-header-text" onClick={this.onLogout.bind(this)}>Log out</button>
//         </div>
//       </div>
//     );
//   }
// }

PrivateHeaderNav.propTypes = {
  title: React.PropTypes.string.isRequired,
  handleLogout: React.PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    handleLogout: () => Accounts.logout()
  };
}, PrivateHeaderNav);
