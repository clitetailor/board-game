import React, { Component } from 'react';
import './Entrance.styl';

class Entrance extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Entrance">
				
				<nav className="navbar">
					<div className="brand">
						<div className="brand-typo">Chess.io</div>
					</div>
				</nav>

				<div className="outer-wrapper">
					<div className="content">
						<div className="rooms">
							<div className="card">
								
							</div>
						</div>
						<div className="info">
							<div className="card">
								{/*TODO: Create a new room*/}
							</div>
							<div className="card">
								{/*TODO: Dashboard*/}
							</div>
							<div className="card">
								{/*TODO: Find room*/}
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
}

export default Entrance;