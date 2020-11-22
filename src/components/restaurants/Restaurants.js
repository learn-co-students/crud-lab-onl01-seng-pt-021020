import React, { Component } from 'react';
import Restaurant from './Restaurant';


class Restaurants extends Component {
  render() {
    return(
      <ul>

        {this.props.restaurants.map(restaurant =>
          
            <Restaurant 
            restaurant={restaurant} 
            key={restaurant.id} 
            deleteRestaurant = {this.props.deleteRestaurant} 
            restReviews = {this.props.reviews.filter(review=>review.restaurantId === restaurant.id)}
            addReview = {this.props.addReview}
            deleteReview = {this.props.deleteReview}
            
            />
          
        )}
      </ul>
    );
  }
};

export default Restaurants;