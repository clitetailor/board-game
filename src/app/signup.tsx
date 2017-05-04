import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { LargeButton, LargeInput } from './cmp'
import * as styles from './signup.styl'
import { leroy } from 'leroy'

import { observer } from 'mobx-react'

@observer
export class Signup extends React.Component<any, any> {
	private uInput: LargeInput;
	private pInput: LargeInput;

	submit() {
		this.props.auth.signup(this.uInput.value, this.pInput.value);
	}

	render() {
		if (this.props.auth.authenticated) {
			return (
				<div className="signup">
					<Redirect to="/entrance"/>
				</div>
			)
		}

		return (
			<div className="signup">
				<form
					action=""	
					className="form"
					onSubmit={() => this.submit()}
				>
					<div
						className={leroy(styles).cls('error')
							.add('visible', this.props.auth.authenticateFailed).put()}
					>
						{this.props.auth.authenticateFailed}
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
							type="password" label="Password"
						/>
					</div>

					<div className="button-group">
						<LargeButton onClick={() => { this.submit() }}>Done</LargeButton>
					</div>
				</form>
			</div>
		)
	}
}

export default Signup;