import React, {Component} from 'react';

class ReviewInput extends Component {
	state = {
		text : '',
	};

	handleOnChange = (event) => {
		this.setState({
			text : event.target.value,
		});
	};

	handleOnSubmit = (event) => {
		event.preventDefault();
		this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
		this.setState({
			text : '',
		});
	};

	render() {
		return (
			<div>
				<form type="submit" onSubmit={this.handleOnSubmit}>
					<input type="text" onChange={this.handleOnChange} value={this.state.content} />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default ReviewInput;
