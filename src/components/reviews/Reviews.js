import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    return this.props.reviews.map(r=>{
      if (r.restaurantId === this.props.restaurant.id) {
        return <Review key={r.id} review={r} deleteReview={this.props.deleteReview} />
      }
    },this)
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