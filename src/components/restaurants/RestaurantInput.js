import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}> 
    	    <label>Add Restaurant: </label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
       </form>
      </div>
    );
  }
};

export default RestaurantInput;