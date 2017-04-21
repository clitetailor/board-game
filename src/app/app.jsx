import React, { Component } from 'react'
import { LargeButton, LargeInput } from './cmp'
import { Link } from 'react-router-dom'

import image from '../assets/chess.jpg'
import styles from './app.styl'

export class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="left">
					<nav className="nav-bar">
						<div className="brand">
							<img src="" alt="" className="brand-icon"/>
							<h1>Chess.io</h1>
						</div>
					</nav>

					<div className="content">
						<form action="#" className="form">
							<div className="line">
								<LargeInput type="text" label="username"/>
							</div>

							<div className="line">
								<LargeInput type="password" label="password"/>
							</div>

							<div className="button-group">
								<Link to="/entrance">
									<LargeButton
										type="submit"
									>
										Login
									</LargeButton>
								</Link>

								<Link to="/signup">
									<LargeButton>Signup</LargeButton>
								</Link>
							</div>
						</form>
					</div>
				</div>

				<div className="image-layout">
					<img src={image} alt="chess-board"/>
				</div>
			</div>
		)
	}
}