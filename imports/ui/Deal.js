import React from 'react';

import { Deals } from '../api/deals';
import DealList from './DealList';
import Edit from './Edit';

import PrivateHeaderNav from './PrivateHeaderNav';

export default () => {
    return (
      <div>
        <PrivateHeaderNav title="Deals Administration"/>
        <div className="content">
          <p>Add deals</p>
          <DealList/>
          <Edit/>
        </div>
      </div>
    );
};
