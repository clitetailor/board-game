import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { LargeInput, LargeButton } from './cmp'
import * as $ from 'jquery'
import './assets/chess.jpg'
import './App.html'
import style from './App.styl'

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={style.App}>
				<div className="outer-wrapper">
					<nav className="navbar">
						<div className="brand-icon">Chess.io</div>
					</nav>

					<div className="login-form">
						<form action="" method="POST" onSubmit={(e) => { this.login(e) }}>
							<LargeInput
								className="large-input"	
								label="username" name="username"
								type="input"
								ref={(input) => { this.usernameInput = input }}
							/>
							<LargeInput
								className="large-input"	
								label="password" name="password"
								type="password" ref={(input) => { this.passwordInput = input }}
							/>

							<div className="button-group">
								<LargeButton type="submit">
									Login
								</LargeButton>
								<a href="./signup">
									<LargeButton>Sign Up</LargeButton>
								</a>
							</div>
						</form>
					</div>
				</div>

				<div className="background">
					<img
						src="./assets/chess.jpg" alt="chess"
						className="background-image"
					/>
				</div>
			</div>
		)
	}

	login(e) {
		e.preventDefault();

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
			location.href = "/entrance";
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