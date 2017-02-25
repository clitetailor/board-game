import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as $ from 'jquery';
import './App.styl';
import './index.styl';
import './index.html';

import './assets/chess.jpg';

import { LargeInput, LargeButton } from './components';


class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<div className="outer-wrapper">
					<nav className="nav-bar">
						<div className="brand-icon">Chess.io</div>
					</nav>

					<div className="login-form">
						<form action="#">
							<LargeInput label="username" name="username" type="input" ref={(input) => { this.usernameInput = input }}></LargeInput>
							<LargeInput label="password" name="password" type="password" ref={(input) => { this.passwordInput = input }}></LargeInput>
							
							<div className="button-group">
								<LargeButton onClick={() => { this.login(); }}>Login</LargeButton>
								<a href="./signup">
									<LargeButton>Sign Up</LargeButton>
								</a>
							</div>
						</form>
					</div>
				</div>

				<div className="background">
					<img src="./assets/chess.jpg" alt="chess" className="background-image"/>
				</div>
			</div>
		)
	}

	login() {
		testService.doSomething();

		let data = {
			username: this.usernameInput.value,
			password: this.passwordInput.value
		}

		let request = $.ajax({
			type: 'POST',
			url: '/login',
			data: JSON.stringify(data),
			contentType: 'application/json; charset=utf-8'
		})

		request.done(data => {
			console.log(data);
		})

		request.fail(err => {

		})
	}

	signUp() {

	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);