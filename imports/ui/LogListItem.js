import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { Session } from 'meteor/session';

export const LogListItem = (props) => {
  const className = props.log.sel ? 'log log--selDealId' : 'log';

  return (
    <div className={className} onClick={() => {
      props.Session.set('selLogId', props.log._id);
    }}>
      <h3 className="log_item--title">{ props.log.title || 'Blank log' }</h3>


      <p className="log_item--date">{ moment(props.log.updatedAt).format('DD/M/YY') }</p>
    </div>
  );
};
LogListItem.propTypes = {
  log: React.PropTypes.object.isRequired,
  Session: React.PropTypes.object.isRequired
};

export default createContainer(() => {
  return { Session };
}, LogListItem);
