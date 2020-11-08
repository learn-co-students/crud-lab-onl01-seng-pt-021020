import React, { Component } from 'react';


const initialState ={
  text: '',
}


class RestaurantInput extends Component {
  state = {
    ...initialState,
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({
      ...initialState,
    })
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='text'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
};


export default RestaurantInput;
