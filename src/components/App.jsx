// import React from 'react';
import React, { Component } from 'react';

// const App = props => {
// 	return <h1>{props.text}</h1>;
// };

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Hello World'
		};
	}
	render() {
		return (
			<h1>
				My name is {this.props.name}, {this.state.text}.
			</h1>
		);
	}
}

export default App;
