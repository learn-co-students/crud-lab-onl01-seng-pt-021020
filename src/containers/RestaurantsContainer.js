import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

import { connect } from 'react-redux';
import { restore } from 'sinon';

class RestaurantsContainer extends Component {

  render() {
    const { restaurants, addRestaurant, deleteRestaurant } = this.props;
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant}/>
        <Restaurants deleteRestaurant={deleteRestaurant} restaurants={restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = state => state.restaurants

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: restaurant => dispatch({ type: 'ADD_RESTAURANT', restaurant }),
    deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
