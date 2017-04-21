import React, { Component } from 'react'
import { LargeButton, LargeInput } from './cmp'
import styles from './signup.styl'
import leroy from '../leroy'

export class Signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: undefined
		}
	} 

	submit() {
		this.setState(state => state.assign({
			error: undefined
		}))

		const username = this.uInput.value;
		const password = this.pInput.value;

		if (username === '') {
			this.invalidUsername();
			return;
		}

		if (password === '') {
			this.invalidPassword();
		}
	}

	invalidUsername() {
		this.setState(state => state.assign({
			error: "Invalid username!"
		}))
	}

	invalidPassword() {
		this.setState(state => state.assign({
			error: "Invalid password!"
		}))
	}

	render() {
		return (
			<div className="signup">
				<form
					className="form"
					action="#"
					formAction={() => this.submit()}
					onSubmit={() => this.submit()}
				>
					<div
						className={leroy(styles).cls('error')
							.add('invisible', this.error)}
					>
						{this.error}
					</div>

					<div className="line">
						<LargeInput
							ref={uInput => this.uInput = uInput}
							type="input" label="Username"
						/>
					</div>
					
					<div className="line">
						<LargeInput
							ref={pInput => this.pInput = pInput}
							type="input" label="Password"
						/>
					</div>

					<div className="button-group">
						<LargeButton type="submit">Done</LargeButton>
					</div>
				</form>
			</div>
		)
	}
}