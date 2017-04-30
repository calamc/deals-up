import React from 'react';
import { Link } from 'react-router';
import PublicDealsList from './PublicDealsList';

export default class Home extends React.Component {
  render() {
    return (
      <div>
      <header>
        <div className="hero-text-box">
          <h1>Find deals in your area.</h1>
          <Link className="btn-home" to="/signup">Add your first deal today.</Link>
        </div>


        <Link className="btn" to="/login">Log in</Link>
        <Link className="btn" to="/signup">Sign up</Link>
      </header>
      <div className="content">
        <h1 className="content__h1 addMargin">Categories</h1>
        <div className="flex-wrap wrap addMargin">
          <Link to="/deals" className="flex-wrap__item">
              <div className="icon fa fa-desktop fa-4x"></div>
              <div className="flex-wrap__text">Technology</div>
          </Link>
          <Link to="/deals" className="flex-wrap__item">
              <div className="icon fa fa-cutlery fa-4x"></div>
              <div className="flex-wrap__text">Food</div>
          </Link>
          <div className="flex-wrap__item">
            <div className="icon fa fa-beer fa-4x"></div>
            <div className="flex-wrap__text">Drink</div>
          </div>
          <div className="flex-wrap__item">
            <div className="icon fa fa-book fa-4x"></div>
            <div className="flex-wrap__text">Books</div>
          </div>
          <Link to="/logs" className="flex-wrap__item">
            <div className="icon fa fa-shopping-bag fa-4x"></div>
            <div className="flex-wrap__text">Clothing</div>
          </Link>
        </div>
        <div className="flex-wrap wrap addMargin">
          <Link to="/deals" className="flex-wrap__item">
              <div className="icon fa fa-dropbox fa-4x"></div>
              <div className="flex-wrap__text">DIY</div>
          </Link>
          <div className="flex-wrap__item">
            <div className="icon fa fa-futbol-o fa-4x"></div>
            <div className="flex-wrap__text">Sports</div>
          </div>
          <div className="flex-wrap__item">
            <div className="icon fa fa-music fa-4x"></div>
            <div className="flex-wrap__text">Music</div>
          </div>
          <Link to="/logs" className="flex-wrap__item">
            <div className="icon fa fa-bath fa-4x"></div>
            <div className="flex-wrap__text">Fragrance</div>
          </Link>
          <Link to="/logs" className="flex-wrap__item">
            <div className="icon fa fa-medkit fa-4x"></div>
            <div className="flex-wrap__text">Health</div>
          </Link>
        </div>
      </div>
      <div className="content">
        <h1 className="content__h1 addMargin">All deals available</h1>
        <PublicDealsList/>
      </div>
    </div>
    );
  }
}
