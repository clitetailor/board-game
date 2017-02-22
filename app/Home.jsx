import React, { Component } from 'react';
import { Link } from 'react-router';
import * as $ from 'jquery';
import './Home.styl';

import './assets/chess.jpg';


import { LargeInput, LargeButton } from './components';


class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Home">
				<div className="outer-wrapper">
					<nav className="nav-bar">
						<div className="brand-icon">Chess.io</div>
					</nav>

					<div className="login-form">
						<form action="#" className="login-form">
							<LargeInput label="username" type="input" ref={(input) => { this.usernameInput = input }}></LargeInput>
							<LargeInput label="password" type="password" ref={(input) => { this.passwordInput = input }}></LargeInput>
							<div className="button-group">
								<LargeButton onClick={() => { this.login(); }}>Login</LargeButton>
								<Link to="/signup">
									<LargeButton>Sign Up</LargeButton>
								</Link>
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

export default Home;