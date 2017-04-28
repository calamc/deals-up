import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import { Logs } from '../api/logs';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import uploadcare from 'uploadcare-widget';

export class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      // price: '',
      // category: '',
      // image: '',
      createdAt: null
    };
  }
  handleDescriptionChange(e) {
    const description = e.target.value;
    this.setState({ description })
    this.props.call('logs.update', this.props.log._id, { description
    });
  }
  handleTitleChange(e) {
    const title = e.target.value;
    this.setState({ title });
    this.props.call('logs.update', this.props.log._id, { title
    });
  }
  // handlePriceChange(e) {
  //   const price = e.target.value;
  //   this.setState({ price });
  //   this.props.call('deals.update', this.props.deal._id, { price
  //   });
  // }
  // handleCategoryChange(e) {
  //   const category = e.target.value;
  //   this.setState({ category });
  //   this.props.call('deals.update', this.props.deal._id, { category
  // });
  // }
  // handleImageChange(e) {
  //   const image = e.target.value;
  //   this.setState({ image });
  //   this.props.call('deals.update', this.props.deal._id, { image
  //   });
  // }
  componentDidUpdate(previousProps, previousState) {
    const curLogId = this.props.log ? this.props.log._id : undefined;

    const previousLogId = previousProps.log ? previousProps.log._id : undefined;

    if (curLogId && curLogId !== previousLogId) {
      this.setState({
        title: this.props.log.title,
        description: this.props.log.description,
        // price: this.props.deal.price,
        // category: this.props.deal.category,
        createdAt: this.props.log.createdAt
      });
    }
  }
  handleDelete() {
    this.props.call('logs.remove', this.props.log._id);
    // remove the link from url aswell
    // redirect
    this.props.browserHistory.push('/logs');
  }
  render() {
    // Messages for logs
    if (this.props.log) {
      return (
        <div className="log-edit">
          <input className="log__title" value={this.state.title} placeholder="Log Title" onChange={this.handleTitleChange.bind(this)}/>
          <textarea className="log__description" value={this.state.description} placeholder="Enter a log" onChange={this.handleDescriptionChange.bind(this)}></textarea>
          {/* <input value={this.state.price} placeholder="Price" onChange={this.handlePriceChange.bind(this)}/>
          <select value={this.state.category} placeholder="Choose deal category" onChange={this.handleCategoryChange.bind(this)}>
            <option value="DIY">DIY</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Sports">Sports</option>
            <option value="Shoes">Shoes</option>
            <option value="Food">Food</option>
            <option value="Music">Music</option>
          </select> */}
          {/* <input value={this.state.image} type="hidden" role="uploadcare-uploader" name="deal-image-upload" placeholder="Your image here" onChange={this.handleImageChange.bind(this)} /> */}
          <p>Created at { moment(this.state.createdAt).format('h:mm a') }</p>
          <div>
          <button className="log__btn" onClick={this.handleDelete.bind(this)}>Remove Log</button>
          </div>
        </div>
      );
    } else {
        return (
          <div className="log-edit">
            <p className="log__topMessage">
              { this.props.selLogId ? 'Unable to find that Log.' : 'Select a Log from the list to get started.'}
            </p>
          </div>

        );
      }
    }
};
Edit.propTypes = {
  log: React.PropTypes.object,
  selLogId: React.PropTypes.string,
  call: React.PropTypes.func.isRequired,
  browserHistory: React.PropTypes.object.isRequired
};

export default createContainer(() => {
  const selLogId = Session.get('selLogId');
  return {
    selLogId,
    log: Logs.findOne(selLogId),
    call: Meteor.call,
    browserHistory
  };
}, Edit);
