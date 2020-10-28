import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    id: null,
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input onChange={this.handleChange} type='text' name='text' value={this.state.text} />
        <input type='submit' value='submit' />
      </form>
    );
  }
};

export default RestaurantInput;
