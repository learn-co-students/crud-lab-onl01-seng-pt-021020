import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurants = () => {
    const { restaurants, deleteRestaurant } = this.props;
    return (
      restaurants.map(res => {
        return (
          <Restaurant restaurant={res} deleteRestaurant={deleteRestaurant} key={res.id} />
        )
      })
    )
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