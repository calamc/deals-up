import React from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import PrivateHeaderNav from './PrivateHeaderNav.js';
import moment from 'moment';
import Modal from 'react-modal';

import { Deals } from '../api/deals';

//import { Button, Icon, Header, Form, Modal, TextArea } from 'semantic-ui-react';

export default class AddDeal extends React.Component {
  constructor(props) {
    super(props);

    // Set the state
    this.state = {
      title: '',
      description: '',
      category: 'technology',
      location: 'sligo',
      price: '0.00',
      isOpen: false,
      error: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonOpen = this.handleButtonOpen.bind(this);
    this.handleButtonClose = this.handleButtonClose.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const title = this.state.title.trim();
    const description = this.state.description;
    const category = this.state.category;
    const location = this.state.location;
    const price = this.state.price.trim();

    e.preventDefault();


      Meteor.call('deals.insert', title, description, category, location, price, (err, res) => {
        if (!err) {
          this.handleButtonClose();
        } else {
          this.setState({
            error: err.reason
          });
        }
      });
      // Error checking
    // alert('Title is: ' + this.state.title + 'Description is: ' + this.state.description + 'Category is: ' + this.state.category
    //       + 'Location is: ' + this.state.location + 'Price: ' + this.state.price);


  }

  handleChange(e) {
    this.setState({
        [e.target.name] : e.target.value
    });
  }

  handleButtonOpen() {
    this.setState({
      isOpen: true
    });
  }
  handleButtonClose() {
    this.setState({
      isOpen: false,
      title: '',
      description: '',
      category: 'technology',
      location: 'sligo',
      price: '0.00',
      error: ''
    });
  }

  render() {
    return (
    <div className="content">
      <button className="button-deal btn-primary" onClick={this.handleButtonOpen}>New Deal +</button>
      <Modal isOpen={this.state.isOpen} onAfterOpen={() => this.refs.title.focus()} onRequestClose={this.handleButtonClose}
        contentLabel="Add a deal" className="boxed-view__whitebox--dealform" overlayClassName="boxed-view boxed-view--modal">

        <h1 className="deal__Name">Add Deal</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit} className="boxed-view__form">

            <div className="form-group">
              <label className="deal">Name of Deal:<input ref="title" className="form-control"
              value={this.state.title}
              onChange={this.handleChange} type="text" name="title"/></label>
            </div>

            <div className="form-group">
            <label>Description:<textarea className="form-control"
              id="exampleTextarea"
              value={this.state.description}
              onChange={this.handleChange} type="text" name="description" /></label>
            </div>

            <div className="form-group">
            <select className="form-control" name='category' value={this.state.category} onChange={this.handleChange}>
                <option value="technology">Technology</option>
                <option value="food">Food</option>
                <option value="drink">Drink</option>
                <option value="books">Books</option>
                <option value="clothing">Clothing</option>
                <option value="diy">DIY</option>
                <option value="sports">Sports</option>
                <option value="music">Music</option>
                <option value="fragrance">Fragrance</option>
                <option value="health">Health</option>
              </select>
            </div>

            <div className="form-group">
              <select className="form-control" name='location' value={this.state.location} onChange={this.handleChange}>
                  <option value="sligo">Sligo</option>
                  <option value="donegal">Donegal</option>
                  <option value="mayo">Mayo</option>
                  <option value="roscomman">Roscomman</option>
                  <option value="longford">Longford</option>
                  <option value="leitrim">Leitrim</option>
                </select>
              </div>

              <div className="form-group">
                <label>Price:<input className="form-control"
                  value={this.state.price}
                  onChange={this.handleChange} type="text" name="price" /></label>
              </div>

              <div className="form-group">
                <input className="button-deal btn-success" type="submit" value="Submit"/>
              </div>

          </form>

          <button className="button-deal btn-danger" type="button" onClick={this.handleButtonClose}>Back</button>
      </Modal>
    </div>
    );
  }
}


// const categories = [
//   { key: 'electronics', text: 'Electronics', value: 'Electronics' },
//   { key: 'tvs', text: 'Televisions', value: 'Televisions' },
// ]
//
// const locations = [
//   { key: 'USA', text: 'USA', value: 'USA' },
//   { key: 'Canada', text: 'Canada', value: 'Canada' },
// ]

// export default createContainer(() => {
//
// }, Deal);

// Create form with semantic-ui-react

// constructor(props) {
//   super(props);
//
//   this.state = {
//     title: '',
//     description: '',
//     category: '',
//     location: '',
//     price: '0.00',
//     createdAt: moment().valueOf(),
//     modalOpen: false
//   }
//
//   this.handleOpen = this.handleOpen.bind(this);
//   this.handleClose = this.handleClose.bind(this);
//   this.handleInputChange = this.handleInputChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }
//
// handleSubmit(e) {
//   e.preventDefault();
//
//   let title = this.state.title.trim();
//   let description = this.state.description;
//   let category = this.state.category;
//   let location = this.state.location;
//   let price = this.state.price;
//
//   Deals.insert({
//     title: title,
//     description: description,
//     category: category,
//     location: location,
//     price: price,
//     createdAt: moment().valueOf()
//   });
//
//   this.setState({
//     title: '',
//     description: '',
//     category: '',
//     location: '',
//     price: '0.00'
//   });
// }
//
// handleInputChange(e) {
//   const target = event.target;
//   const value = target.type === "checkbox" ? target.checked : target.value;
//   const name = target.name;
//
//   this.setState({
//     [name]: value
//     });
// }
//
// handleOpen(e)
// {
//   this.setState({ modalOpen: true })
// }
//
// handleClose(e)
// {
//   this.setState({ modalOpen: false })
// }
//
// render() {
//   return (
//     <div className="new-deal">
//       <div className="content">
//         Add Deal form
//         <Button onClick={this.handleOpen}>Create New Deal</Button>
//         <Modal open={this.state.modalOpen}
//                 onClose={this.handleClose}
//                 size="small"
//                 closeIcon="close">
//           <Modal.Header>Create deal</Modal.Header>
//             <Modal.Content>
//               <Form>
//                 <Form.Group>
//                   <Form.Input name="title" label="Title" placeholder="Title" value={this.state.title} onChange={this.handleInputChange}/>
//                   <Form.Field name="description" control={TextArea} label="Description" placeholder="Tell us more about your deal..."
//                     value={this.state.description}
//                     onChange={this.handleInputChange} />
//                   <Form.Select name="category" label="Category" categories={categories} placeholder="Category"
//                     value={this.state.category} onChange={this.handleInputChange} />
//                   <Form.Select name="location" label="Location" locations={locations} placeholder="Location"
//                     value={this.state.location} onChange={this.handleInputChange} />
//                   <Form.Input name="price" label="Price" placeholder="Price"
//                     value={this.state.price} onChange={this.handleInputChange}/>
//                   <Form.Input/>
//                 </Form.Group>
//               </Form>
//             </Modal.Content>
//             <Modal.Actions>
//               <Button className="positive" onClick={this.handleOpen}>Add Deal</Button>
//               <Button className="negative" onClick={this.handleClose}>Cancel</Button>
//             </Modal.Actions>
//           </Modal>
//       </div>
//     </div>
//   );
// }
