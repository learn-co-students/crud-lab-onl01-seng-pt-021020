import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurants = () => {
    return this.props.restaurants.map(r => {
      return <Restaurant deleteRestaurant={this.props.deleteRestaurant} restaurant={r} key={r.id} />
    })
  }

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;