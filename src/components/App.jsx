// import React from 'react';
import React, { Component } from 'react';

// const App = props => {
// 	return <h1>{props.text}</h1>;
// };

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Hello World',
			hasLoaded: false,
			name: ''
		};
	}
	handleInput = value => {
		this.setState({ name: value });
	};

	handleClick = () => {
		this.setState({ hasLoaded: !this.state.hasLoaded });
	};

	componentDidMount = () => {
		this.setState({ hasLoaded: true });
	};

	render() {
		if (this.state.hasLoaded) {
			return (
				<React.Fragment>
					<h1>
						My name is {this.props.name} {this.state.name}, {this.state.text}.
					</h1>
					<button onClick={this.handleClick}> Submit </button>
					<input
						placeholder="What's your name?"
						value={this.state.name}
						onChange={event => this.handleInput(event.target.value)}
					/>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<h1>Loading...</h1>
					<button onClick={this.handleClick}> Submit </button>
				</React.Fragment>
			);
		}
	}
}

export default App;
