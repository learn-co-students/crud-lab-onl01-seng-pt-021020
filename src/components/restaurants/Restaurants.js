import React, { Component } from 'react';
import Restaurant from './Restaurant.js';

class Restaurants extends Component {
  render() {
    const restaurantList = this.props.restaurants.map(restaurant => {
      return(
        <Restaurant restaurant={restaurant} key={restaurant.id} delete={this.props.delete} />
      )
    })

    return(
      <ul>
        { restaurantList }
      </ul>
    );
  }
};

export default Restaurants;