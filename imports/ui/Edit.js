import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import { Deals } from '../api/deals';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

export class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }
  handleDescriptionChange(e) {
    const description = e.target.value;
    this.setState({ description })
    this.props.call('deals.update', this.props.deal._id, { description
    });
  }
  handleTitleChange(e) {
    const title = e.target.value;
    this.setState({ title });
    this.props.call('deals.update', this.props.deal._id, { title
    });
  }
  componentDidUpdate(previousProps, previousState) {
    const curDealId = this.props.deal ? this.props.deal._id : undefined;

    const previousDealId = previousProps.deal ? previousProps.deal._id : undefined;

    if (curDealId && curDealId !== previousDealId) {
      this.setState({
        title: this.props.deal.title,
        description: this.props.deal.description
      });
    }
  }
  handleDelete() {
    this.props.call('deals.remove', this.props.deal._id);
    // remove the link from url aswell
    // redirect
    this.props.browserHistory.push('/deals');
  }
  render() {
    // Messages for deals
    if (this.props.deal) {
      return (
        <div>
          <input value={this.state.title} placeholder="Untitled Deal" onChange={this.handleTitleChange.bind(this)}/>
          <textarea value={this.state.description} placeholder="Your deal goes here" onChange={this.handleDescriptionChange.bind(this)}></textarea>
          <button onClick={this.handleDelete.bind(this)}>Delete Deal</button>
        </div>
      );
    } else {
        return (
          <p>
            { this.props.selDealId ? 'Unable to find that Deal.' : 'Select a deal from the list to get started.'}
          </p>
        );
      }
    }
};
Edit.propTypes = {
  deal: React.PropTypes.object,
  selDealId: React.PropTypes.string,
  call: React.PropTypes.func.isRequired,
  browserHistory: React.PropTypes.object.isRequired
};

export default createContainer(() => {
  const selDealId = Session.get('selDealId');
  return {
    selDealId,
    deal: Deals.findOne(selDealId),
    call: Meteor.call,
    browserHistory
  };
}, Edit);
