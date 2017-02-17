import React, { Component } from 'react';
import { Link } from 'react-router';
import * as $ from 'jquery';
import './Home.styl';

import './assets/chess.jpg';

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
								<div className="bg-input">
									<label htmlFor="account">USERNAME</label>
									<input ref={ (input) => { this.usernameInput = input } } type="text" name="account"/>
								</div>
								<div className="bg-input">
									<label htmlFor="password">PASSWORD</label>
									<input ref={ (input) => { this.passwordInput = input } } type="password" name="password"/>
								</div>
								<button type="button" onClick={() => this.login()}>Login</button>
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

		$.ajax({
			type: 'POST',
			url: '/login',
			data: JSON.stringify(data),
			contentType: 'application/json; charset=utf-8'
		}).then((data) => {
			console.log(data);
		})
	}
}

export default Home;