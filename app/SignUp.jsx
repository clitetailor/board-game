import ReactDOM from 'react-dom';
import './assets/favicon.ico';
import './index.styl';
import './signup.html';

import React, { Component } from 'react';
import './SignUp.styl';

import * as $ from 'jquery';

import { LargeInput, LargeButton } from './components';

class SignUp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="SignUp">
				<nav className="nav-bar">
					<div className="brand">
						<div className="brand-typo">Chess.io</div>
					</div>
				</nav>

				<div className="outer-wrapper">
					<div className="form">
						<form>
							<div className="row">
								<LargeInput type='input' label='username' ref={(input) => { this.usernameInput = input }}></LargeInput>
							</div>
							<div className="row">
								<LargeInput type="input" label="password" ref={(input) => { this.passwordInput = input }}></LargeInput>
							</div>
							<div className="row">
								<LargeInput type="input" label="confirm password" ref={(input) => { this.confirmPasswordInput = input }}></LargeInput>
							</div>
							<div className="row bg-button-group">
								<LargeButton onClick={() => { this.submit() }}>Submit</LargeButton>
							</div>
						</form>
					</div>
				</div>

				<div className="footer"></div>
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
				data,
				contentType: 'application/json; charset=utf-8'
			})
		}
	}
}

ReactDOM.render(
	<SignUp />,
	document.getElementById('root')
)