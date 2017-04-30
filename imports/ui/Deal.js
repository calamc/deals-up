import React from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';



import { Deals } from '../api/deals';

// Import components here
import AddDeal from './AddDeal';
import DealList from './DealList';
import PrivateHeaderNav from './PrivateHeaderNav.js';
import DealFilters from './DealFilters.js'

//import { Button, Icon, Header, Form, Modal } from 'semantic-ui-react';
import moment from 'moment';

export default class Deal extends React.Component {
  render() {
    return (
      <div>
        <PrivateHeaderNav title="Deals Administration"/>
        <div className="content">
        <AddDeal/>
        <DealFilters/>
        <DealList/>
        </div>
      </div>
    );
  }
}

// export default createContainer(() => {
//
// }, Deal);
