import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    const { restaurant, reviews, addReview, deleteReview } = this.props;
    return (
      <div>
        <ReviewInput addReview={addReview} restaurantId={restaurant.id}/>
        <Reviews restaurant={restaurant} reviews={reviews} deleteReview={deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => state.reviews

const mapDispatchToProps = dispatch => {
  return {
    addReview: (text, id) => dispatch({ type: 'ADD_REVIEW', text, id }),
    deleteReview: id => dispatch({ type: 'DELETE_REVIEW', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
