import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props
    const currentReviews = reviews.filter(review => review.restaurantId === restaurantId)

    const reviewList = currentReviews.map((review, idx) => {
      return <Review key={idx} review={review} deleteReview={deleteReview} />
    })

    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;