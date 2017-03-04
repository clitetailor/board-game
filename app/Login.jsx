import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './assets/favicon.ico';
import 'index.styl';
import 'signup.html'

class Login extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Login">

			</div>
		)
	}

	login() {

	}
}

ReactDOM.render(
	<Login />,
	document.getElementById('root')
)