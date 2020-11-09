import React, { Component } from 'react';

import Restaurant from './Restaurant'


class Restaurants extends Component {
  render() {
    const { restaurants } = this.props
    return(
      restaurants ?
        <ul>
          {restaurants.map(restaurant =>
            <li key={restaurant.id}>
              <Restaurant restaurant={restaurant} />
            </li>
          )}
        </ul> :
        null
    );
  }
};


export default Restaurants;
