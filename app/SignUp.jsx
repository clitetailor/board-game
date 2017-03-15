import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { LargeInput, LargeButton } from './cmp'
import * as $ from 'jquery'
import './assets/favicon.ico'
import './SignUp.html'
import style from './SignUp.styl'

class SignUp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={style.SignUp}>
				<nav className="navbar">
					<div className="brand">
						<div className="brand-typo">Chess.io</div>
					</div>
				</nav>

				<div className="outer-wrapper">
					<div className="signup-form">
						<form>
							<LargeInput
								className="large-input"
								type='input' label='username'
								ref={(input) => { this.usernameInput = input }}
							/>
							<LargeInput
								className="large-input"
								type="password" label="password"
								ref={(input) => { this.passwordInput = input }}
							/>
							<LargeInput
								className="large-input"
								type="password" label="confirm password"
								ref={(input) => { this.confirmPasswordInput = input }}
							/>

							<div className="row bg-button-group">
								<LargeButton
									onClick={() => this.submit()}
								>
									Submit
								</LargeButton>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}

	submit() {
		if (this.confirmPasswordInput.value === this.passwordInput.value) {
			let data = {
				username: this.usernameInput.value,
				password: this.passwordInput.value
			}

			let request = $.ajax({
				type: 'POST',
				url: '/signup',
				data: JSON.stringify(data),
				contentType: 'application/json; charset=utf-8'
			})
				.then((data) => {
					if (data.err) {
						console.log(data.err);
					} else {
						location.href = "/"
					}
				})
				.catch((err) => {
					console.log(err);
				})
		}
	}
}

ReactDOM.render(
	<SignUp />,
	document.getElementById('root')
);