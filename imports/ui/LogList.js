import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Logs } from '../api/logs';
import LogListHeader from './LogListHeader';
import LogListItem from './LogListItem';
import LogEmpty from './LogEmpty';
import { Session } from 'meteor/session';

export const LogList = (props) => {
  return (
    <div className="log-list">

      <LogListHeader/>

      {/* show empty box message */}
      { props.logs.length === 0 ? <LogEmpty/> : undefined}

      {props.logs.map((log) => {
        return <LogListItem key={log._id} log={log}/>;
      })}

    </div>
  );
};
LogList.propTypes = {
  logs: React.PropTypes.array.isRequired
};

export default createContainer(() => {
  const selLogId = Session.get('selLogId');
  // get deals collection
  Meteor.subscribe('logs');

  return {
    // map, pass in function, check if deal is selected
    logs: Logs.find({}, {
      sort: {
        updatedAt: -1
      }
    }).fetch().map((log) => {
      return {
        ...log,
        sel: log._id === selLogId
      };
    })
  };
}, LogList);
