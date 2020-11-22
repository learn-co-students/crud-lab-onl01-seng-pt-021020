import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';


class Restaurant extends Component {

  handleDelete = () => {
    // console.log(`${this.props.restaurant.id} should be deleted`);
    this.props.deleteRestaurant(this.props.restaurant.id)
  }


  render() {
    
    const { restaurant } = this.props;
    
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleDelete}> X </button>
          <ReviewsContainer 
          restaurant={restaurant} 
          addReview={this.props.addReview} 
          reviews = {this.props.restReviews}
          deleteReview = {this.props.deleteReview} />
           
        </li>
      </div>
    );
  }
};

export default Restaurant;
