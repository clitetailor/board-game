import React, { Component } from 'react';
import { Link } from 'react-router';
import './Home.styl';

import './assets/chess1.jpg';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Home">

				<div className="bg-container">
					<div className="bg-paper">

					</div>

					<div className="bg-background">
						<img src="./assets/chess1.jpg" alt="chess" height="100%"/>
					</div>
				</div>


				{/*<nav className="navbar bg-navbar">
					<div className="bg-icon"></div>

					<div className="bg-nav-right">
						<Link to="about">About</Link>
						<Link to="news">News</Link>
						<Link to="login">Login</Link>
					</div>
				</nav>

				<div>
					<div className="bg-typography">
						<img src="" alt="boardgame"/>
						<h1>
							Title
						</h1>
						<p>
							Description
						</p>
						<div className="bg-login-form">
							<form action="#">
								<label htmlFor="account" className="bg-login-label">Account:</label>
								<input type="text" name="account" className="bg-login-input"/>
								<label htmlFor="password" className="bg-login-label">Password:</label>
								<input type="password" name="password" className="bg-login-input"/>
								<Link to="entrance">
									<button type="submit">Login</button>
								</Link>
							</form>
						</div>
					</div>
				</div>*/}


			</div>
		)
	}


}

export default Home;