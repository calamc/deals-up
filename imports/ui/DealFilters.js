import React from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

export default class DealFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayVisible: true
    };
  }
  // Tracker.autorun
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {

      this.setState({displayVisible: Session.get('displayVisible')})
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }

  render() {
    return (
      <div>
        <label className="checkbox">
          <input className="checkbox__box" type="checkbox" checked={!this.state.displayVisible} onChange={(e) => {

            Session.set('displayVisible', !e.target.checked);}}/>Display your hidden deals</label>
            
      </div>
    );
  }
}
