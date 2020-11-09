import React, { Component } from 'react';

import ReviewsContainer from '../../containers/ReviewsContainer';


class Restaurant extends Component {
  render() {
    const { restaurant } = this.props;

    return (
      <div>
        {restaurant.text}
        <button> X </button>
        <ReviewsContainer restaurant={restaurant}/>
      </div>
    );
  }
};


export default Restaurant;
