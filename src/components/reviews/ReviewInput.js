import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    id: null,
    restaurantId: this.props.restaurantId,
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input onChange={this.handleChange} type='text' value={this.state.text} />
        <input type='submit' value='submit' />
      </form>
    );
  }
};

export default ReviewInput;
