import React from 'react';

import { Logs } from '../api/logs';
import LogList from './LogList';
import Edit from './Edit';

import PrivateHeaderNav from './PrivateHeaderNav';

export default () => {
    return (
      <div>
        <PrivateHeaderNav title="Your logs"/>
        <div className="log-content">
          <div className="log-content__sidescroller">
            <LogList/>
          </div>
          <div className="log-content__main">
            <Edit/>
          </div>


        </div>
      </div>
    );
};
