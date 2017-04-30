import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import { Deals } from '../api/deals';

class PublicDealsMain extends React.Component {
  render () {
    return (
      <div>
        Deal Viewer
      </div>
    );
  }
}

export default createContainer(() => {

}, PublicDealsMain);
