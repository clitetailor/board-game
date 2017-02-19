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

				<div className="bg-container">
					<div className="bg-paper">
						<div className="bg-login-form">
							<form action="#">
								<div className="row">
									<LargeInput label="username" type="input" ref={(input) => { this.usernameInput = input }}></LargeInput>
								</div>
								<div className="row">
									<LargeInput label="password" type="password" ref={(input) => { this.passwordInput = input }}></LargeInput>
								</div>
								<div className="row bg-button-group">
									<LargeButton onClick={() => { this.login(); }}>Login</LargeButton>
									<Link to="/signup">
										<LargeButton onClick={() => { this.signUp(); }}>Sign Up</LargeButton>
									</Link>
								</div>
							</form>
						</div>
					</div>

					<div className="bg-background">
						<img src="./assets/chess.jpg" alt="chess" className="bg-image"/>
					</div>
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