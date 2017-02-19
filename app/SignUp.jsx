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
				<form className="bg-form">
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

export default SignUp;