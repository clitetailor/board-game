import * as React from 'react'
import { LargeButton, LargeInput } from './cmp'
import { Link, Redirect } from 'react-router-dom'
import { leroy } from 'leroy'
import { observer } from 'mobx-react'

import * as image from '../assets/chess.jpg'
import * as styles from './app.styl'

export class App extends React.Component<any, any> {
	private uInput: LargeInput;
	private pInput: LargeInput;

	constructor(props) {
		super(props);
	}

	submit() {
		this.props.auth.signup(this.uInput.value, this.pInput.value);
	}

	render() {
		if (this.props.auth.authenticated) {
			return (
				<div className="app">
					<Redirect to="/entrance" />
				</div>
			)
		}

		return (
			<div className="app">
				<div className="left">
					<nav className="nav-bar">
						<div className="brand">
							<img src="" alt="" className="brand-icon" />
							<h1>Chess.io</h1>
						</div>
					</nav>

					<div className="content">
						<form
							action="#"
							className="form"
							onSubmit={() => { this.submit() }}
						>
							<div
								className={leroy(styles)
									.cls('error')
									.add('visible', this.props.auth.authenticateFailed)
									.put()}
							>
								{this.props.auth.authenticateFailed}
							</div>
							
							<div className="line">
								<LargeInput
									ref={uInput => this.uInput = uInput}
									type="input" label="username"
								/>
							</div>

							<div className="line">
								<LargeInput
									ref={pInput => this.pInput = pInput}
									type="password" label="password"
								/>
							</div>

							<div className="button-group">
								<LargeButton
									type="submit"
								>
									Login
								</LargeButton>

								<Link to="/signup">
									<LargeButton>Signup</LargeButton>
								</Link>
							</div>
						</form>
					</div>
				</div>

				<div className="image-layout">
					<img src={image} alt="chess-board" />
				</div>
			</div>
		)
	}
}