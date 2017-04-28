import React from 'react';
import { Link } from 'react-router';

export default class DashboardControls extends React.Component {
  render() {
    return (
      <div className="content">
        <h1 className="content__h1">Dashboard</h1>
        <div className="flex-wrap wrap">
          <Link to="/deals" className="flex-wrap__item">
              <div className="icon fa fa-plus-circle"></div>
              <div className="flex-wrap__text">Deals</div>
          </Link>
          <div className="flex-wrap__item">
            <div className="icon fa fa-user"></div>
            <div className="flex-wrap__text">Profile</div>
          </div>
          <div className="flex-wrap__item">
            <div className="icon fa fa-comment"></div>
            <div className="flex-wrap__text">Message</div>
          </div>
          <Link to="/logs" className="flex-wrap__item">
            <div className="icon fa fa-thumb-tack"></div>
            <div className="flex-wrap__text">Logs</div>
          </Link>
        </div>
      </div>
    );
  }
}
