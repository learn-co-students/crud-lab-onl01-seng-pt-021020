import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {connect} from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaraunt={this.props.addRestaraunt}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant} addReview={this.props.addReview}
        reviews = {this.props.reviews}
        deleteReview = {this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  addRestaraunt: text => dispatch({type: 'ADD_RESTAURANT', text}),
  deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT',id}),
  addReview: review => dispatch({type: 'ADD_REVIEW',review}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW',id})
})

export default connect(mapStateToProps,mapDispatchToProps) (RestaurantsContainer);
