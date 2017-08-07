import React, { Component } from 'react';
import {
	Title, Nav, Main, Input
} from './import';
import dogui from './import';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cat: 10
		}
		this.handleingChange = this.handleingChange.bind(this);
	}
	render() {
		return (
			<div>
				<Title>A Title</Title>
				<Nav>A Nav Bar</Nav>
				<Main>
					<Input model={this.handleingChange} />
					{this.state.cat}
				</Main>
			</div>
		);
	}

	handleingChange(event) {
		this.setState({
			cat: event.target.value
		})
	}
}

export default App;
