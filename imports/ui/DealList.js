import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';
import FlipMove from 'react-flip-move';

import { Deals } from '../api/deals';
import DealListItem from './DealListItem';
import DealListEmpty from './DealListEmpty';

export default class DealList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deals: []
    };
  }

  componentDidMount() {

    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('deals');

      const deals = Deals.find({
        // Get session variable 'displayVisible'
        visible: Session.get('displayVisible')
      }).fetch();

      // Set the state of deals
      this.setState({ deals });
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }

  renderDealListItem() {
    if (this.state.deals.length === 0) {
      return (
        <div className="item">

          <p className="item__status-message">No Deals to show. Get adding!</p>

        </div>
      );
    }

    // Use map to get the deals
    return this.state.deals.map((deal) => {

      return <DealListItem key={deal._id} _id={deal._id}
        title={deal.title} description={deal.description}
        category={deal.category} location={deal.location}
        price={deal.price} visible={deal.visible}/>;;

    });
  }
  render() {
    return (
      <div>

          <FlipMove>
            {/* Render the documents inside the render function */}
            {this.renderDealListItem()}
          </FlipMove>





      </div>
    );
  }
};

// ************ Tried using createContainer ****************
// ************ For rendering list *************************
// export const DealList = (props) => {
//   return (
//     <div className="deal-item">
//       { props.deals.length === 0 ? <DealListEmpty/> : undefined }
//       {props.deals.map((deal) => {
//         return <DealListItem key={deal._id} deal={deal}/>;
//       })}
//     </div>
//   );
// };
//
// DealList.propTypes = {
//   deals: React.PropTypes.array.isRequired
// };
//
// export default createContainer(() => {
//   //const selectedDealId = Session.get('selectedDealId');
//
//   Meteor.subscribe('deals');
//
//   return {
//     deals: Deals.find().fetch()
//   };
// }, DealList);

//***********Using*******************
//   constructor(props) {
//     super(props);
//     this.state = {
//       deals: []
//     };
//   }
//   componentDidMount() {
//     this.dealsTracker = Tracker.autorun(() => {
//       Meteor.subscribe('deals');
//
//       const deals = Deals.find({
//
//         isVisible: Session.get('dealIsVisible')
//
//       }).fetch();
//       this.setState({ deals });
//     });
//   }
//   componentWillUnmount() {
//     this.dealsTracker.stop();
//   }
//
//   renderDealListItems() {
//     if (this.state.deals.length === 0) {
//       return (
//         <div className="dealView">
//           <p className="dealView__status-message">No Deals Added yet. Click new deal to add one</p>
//         </div>
//       );
//     }
//
//     return this.state.deals.map((deal) => {
//       return <DealListItem key={deal._id} deal={deal} {...deal}/>;
//     });
//   }
//   render() {
//     return (
//       <div>
//         {/* <FlipMove maintainContainerHeight={true}> */}
//           {this.renderDealListItems()}
//         {/* </FlipMove> */}
//       </div>
//     );
//   }
// };
