import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    const { restaurant, reviews, deleteReview } = this.props;
    return (
      reviews.map(rev => {
        if (rev.restaurantId === restaurant.id) {
          return (
            <Review review={rev} deleteReview={deleteReview} key={rev.id}/>
          )
        }
      })
    )
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;