import { Meteor } from 'meteor/meteor';
import React from 'react';
import moment from 'moment';

export default class DealListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="deal-item__container">
        <h2 className="deal-item__Title highlight">Title: {this.props.title}</h2>
        <p className="deal-item">Description: {this.props.description}</p>
        <p className="deal-item">Type: {this.props.category}</p>
        <p className="deal-item">Co. {this.props.location}</p>
        <p className="deal-item">€{this.props.price}</p>
        <p className="deal-item">{ moment(this.props.createdAt).fromNow('lll') }</p>
        <img className="deal-item" src="http://placehold.it/125x125"/>
        <button className="button-deal btn-success" onClick={() => {Meteor.call('deals.determineVisibilty', this.props._id, !this.props.visible);}}>
          {/* // If visible hide -> Else -> Show */}
          {this.props.visible ? 'Hide' : 'Show'}
        </button>
        <button className="button-deal btn-danger" onClick={() => Meteor.call('deals.remove', this.props._id, )}>Delete</button>
      </div>
    );
  }
};

DealListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  category: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
  visible: React.PropTypes.bool.isRequired
};


// ****************** Export the function as a const
// const DealListItem = (props) => {
//   return (
//     <div className="deal-item__Container">
//       <div className="deal-item">
//         <h4 className="deal-item__Title tilt">Name: { props.deal.title || 'Enter a name for your deal'}</h4>
//         <p className="deal-item__Paragraph tilt">Description:{ props.deal.description}</p>
//         <p className="deal-item__Paragraph">€{ props.deal.price}</p>
//         <p className="deal-item__Paragraph highlight">{ moment(props.deal.createdAt).startOf('lll').fromNow() }</p>
//         <img className="deal-item__Paragraph image" src="http://placehold.it/100x100"/>
//       </div>
//     </div>
//   );
// };
//
// DealListItem.propTypes = {
//
//   // Deal object
//   deal: React.PropTypes.object.isRequired
// };
//
// export default DealListItem;

// export default class DealListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//
//   renderViews() {
//     const viewsAlert = this.props.dealViews === 1 ? 'visit' : 'visits';
//     let visitedMessage = null;
//
//     return <p className="dealView__message">{this.props.dealViews} {viewsAlert} {visitedMessage}</p>;
//   }
//   render() {
//     return (
//       <div className="dealView" className={className} onClick={() => {
//       props.Session.set('selectedNoteId', props.note._id);
//         }}>
//         <h2>Name:{this.props.title}</h2>
//         <p className="dealView__message">Description: {this.props.description}</p>
//         <p className="dealView__message">Category: {this.props.category}</p>
//         <p className="dealView__message">Location: {this.props.location}</p>
//         <p className="dealView__message">€ {this.props.price}</p>
//         {this.renderViews()}
//       </div>
//     );
//   }
// };
//
// DealListItem.propTypes = {
//   _id: React.PropTypes.string.isRequired,
//   title: React.PropTypes.string.isRequired,
//   description: React.PropTypes.string.isRequired,
//   category: React.PropTypes.string.isRequired,
//   location: React.PropTypes.string.isRequired,
//   price: React.PropTypes.string.isRequired,
//   isVisible: React.PropTypes.bool.isRequired,
//   dealViews: React.PropTypes.number.isRequired
// };
